// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var request = require("request");
var cheerio = require("cheerio");
var app = express();

var Linkedin = require("node-linkedin")(
  "78r998wpzh7dsp",
  "qOgsksswIkhRkgjX",
  "http://localhost:3000/profile_builder/linkedin"
);

var scope = ["r_basicprofile"];

var session = require("express-session");
//allow sessions SETS A TIMER FOR HOW LONG THE SESSION WILL STAY ACTIVE:
app.use(
  session({ secret: "app", cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 } })
);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up a static folder (public) for our web app
app.use(express.static("public"));
app.set("view engine", "ejs");

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "digume_db";
var collections = ["users"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
  res.render("pages/index");
});

app.get("/profile", function(req, res) {
  //PROFILE INFO LOADS HERE

  res.render("pages/profile");
});

app.post("/login", function(req, res) {
  console.log(req.body);

  db.users.findOne(
    {
      username: req.body.login_username,
      password: req.body.login_password
    },
    //   function(error, result) {
    //     if (!result) return res.status(404).json({ error: "user not found" });

    //     if (!bcrypt.compareSync(req.body.login_password, result.password))
    //       return res.status(401).json({ error: "incorrect password " });

    //     console.log(username);

    //     var payload = {
    //       _id: result._id,
    //       username: result.username
    //     };

    //     var token = jwt.sign(payload, process.env.JWT_SECRET, {
    //       expiresIn: "4h"
    //     });

    //     return res.json({
    //       message: "successfuly authenticated",
    //       token: token
    //     });
    //   }
    // );
    function(error, user) {
      session.user_id = user._id;

      console.log(session.user_id);
      // Log any errors
      if (error) {
        res.send(error);
      } else {
        // session.user_id = user._id;
      }
    }
  );

  res.redirect("/profile");
  // console.log(session.user_id);
});

//LOAD COMPANY DATA
app.get("/linkedin_company_search", function(req, res) {
  // company_name = req.body.company_name;

  Linkedin.companies.name("facebook", function(err, company) {
    if (error) {
      console.log(error);
    } else {
      // Otherwise, send json of the notes back to user
      // This will fire off the success function of the ajax request
      res.json(company);
    }
  });
});

//LOAD USER PROFILE CARD DATA
app.post("/all", function(req, res) {
  // Find all notes in the notes collection
  db.user_linkedin.findOne(
    {
      _id: mongojs.ObjectId(session.user_id)
    },
    function(error, user) {
      // Log any errors
      if (error) {
        console.log(error);
      } else {
        // Otherwise, send json of the notes back to user
        // This will fire off the success function of the ajax request
        res.json(user);
      }
    }
  );
});

app.get("/me", function(req, res) {
  var user_id = session.user_id;
  // Find all notes in the notes collection
  db.user_linkedin.findOne(
    {
      _id: mongojs.ObjectId(user_id)
    },
    function(error, user) {
      // Log any errors
      if (error) {
        console.log(error);
      } else {
        // Otherwise, send json of the notes back to user
        // This will fire off the success function of the ajax request
        res.json(user);
      }
    }
  );
});

app.get("/all_data", function(req, res) {
  // Find all notes in the notes collection
  db.user_linkedin.find({}, function(error, found) {
    // Log any errors
    if (error) {
      console.log(error);
    } else {
      // Otherwise, send json of the notes back to user
      // This will fire off the success function of the ajax request
      res.json(found);
    }
  });
});

app.get("/profile_builder", function(req, res) {
  res.render("pages/profile_builder");
});

app.get("/cover_letter_builder", function(req, res) {
  res.render("pages/cover_letter_builder");
});

app.get("/oauth/linkedin", function(req, res) {
  // This will ask for permisssions etc and redirect to callback url.
  Linkedin.auth.authorize(res, scope);
});

app.get("/load_user_info", function(req, res) {
  var linkedin = Linkedin.init(req.session.access_token);
  var user_id = session.user_id;

  linkedin.people.me(
    [
      "first-name",
      "last-name",
      "location",
      "picture-url",
      "industry",
      "headline",
      "positions"
    ],
    function(err, in_info) {
      // Loads the profile of access token owner.
      console.log(in_info);
      db.user_linkedin.insert({ _id: user_id, linkedin: in_info });
    }
  );

  setTimeout(function() {
    return res.redirect("/profile");
  }, 2500);
});

app.get("/profile_builder/linkedin", function(req, res) {
  Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(
    err,
    results
  ) {
    if (err) return console.error(err);
    console.log(results.access_token);
    req.session.access_token = results.access_token;

    db.token.insert(
      {
        token: results.access_token
      },
      function(error, user) {
        if (error) {
          console.log("error connecting, try again");
        } else {
          console.log("token has been saved!");
        }
      }
    );

    return res.render("pages/profile_builder");
  });

  // activate();
});

//ORIGINAL COPY:
app.get("/load_user_info2", function(req, res) {
  var linkedin = Linkedin.init(req.session.access_token);

  linkedin.people.me(
    [
      "first-name",
      "last-name",
      "location",
      "picture-url",
      "industry",
      "headline",
      "positions"
    ],
    function(err, in_info) {
      // Loads the profile of access token owner.
      console.log(in_info);
      req.session.first_name = in_info.firstName;
      req.session.last_name = in_info.lastName;
      req.session.location = in_info.location.name;
      req.session.headline = in_info.headline;
      req.session.industry = in_info.industry;
      req.session.picture_url = in_info.pictureUrl;
      req.session.headline = in_info.headline;

      req.session.current_company = in_info.positions.values[0].company.name;
      req.session.current_title = in_info.positions.values[0].title;
      req.session.current_industry =
        in_info.positions.values[0].company.industry;
      req.session.company_size = in_info.positions.values[0].company.size;
      req.session.company_ownership = in_info.positions.values[0].company.type;
      req.session.company_location = in_info.positions.values[0].location;
      req.session.start_date = in_info.positions.values[0].location;
      req.session.company_summary = in_info.positions.values[0].summary;
    }
  );

  setTimeout(function() {
    return res.redirect("/profile");
  }, 2500);
});

app.post("/create_profile", function(req, res) {
  req.session.username = req.body.username;
  req.session.password = req.body.password;

  user_password = req.session.password;
  user_username = req.session.username;

  console.log(req.body);

  db.users.insert(
    {
      username: user_username,
      password: user_password
    },
    function(error, user) {
      // Log any errors
      if (error) {
        res.send(error);
      } else {
        console.log("successfully signed up");
      }
    }
  );
  res.redirect("/");
});

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
