$(document).ready(function() {
  jQuery(".parallax").parallax();
  $(".modal").modal();
  $(".dropdown-trigger").dropdown();

  setTimeout(function() {
    $("#floating_add_button").removeClass("pulse");
  }, 7000);
});

$(document).on("click", "#remove", function() {
  $(".collapsible").remove();
});

$(document).on("click", ".click", function() {
  $("#close_button").removeClass("hidden");
  $("#icon_button").addClass("hidden");
  $(".stay").removeClass("click");
  $(".stay").addClass("hidden");
  $(this).removeClass("hidden");
  $(this).css("width", "100%");
});

$(document).on("click", ".plus_sign", function() {
  $("#close_button").addClass("hidden");
  $("#icon_button").removeClass("hidden");
  $(".stay").css("width", "48%");
  $(".stay").addClass("click");
  $(".stay").removeClass("hidden");
});

$(document).on("click", "#add_education", function() {
  $("#education_status").removeClass("hidden");
});

$(document).on("click", "#add_projects", function() {
  $("#project_status").removeClass("hidden");
});

$(document).on("click", "#add_passions", function() {
  $("#passions_status").removeClass("hidden");
});

//LOAD LINKEDIN INFO IN PROFILE CARD:

$(document).on("click", "#profile_linkedin_icon", function() {
  $("#profile_linkedin_icon").removeClass("attention");
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: "POST",
    dataType: "json",
    url: "/all",
    data: {}
  })
    // If that API call succeeds, add the title and a delete button for the note to the page
    .then(function(data) {
      console.log(data);

      $("#profile_card_name").text(
        data.linkedin.firstName + " " + data.linkedin.lastName
      );
      $("#profile_card_location").text(data.linkedin.location.name);
      $("#profile_card_industry").text(data.linkedin.industry);
      $("#profile_card_position").text(data.linkedin.headline);
      $("#profile_card_company").text(
        data.linkedin.positions.values[0].company.name
      );

      $("#profile_picture_floating").attr("src", data.linkedin.pictureUrl);
    });
});

// SCROLING ACTION BUTTON
// $(function() {
//   var $sidebar = $("#floating_add_button_plus"),
//     $window = $(window),
//     offset = $sidebar.offset(),
//     topPadding = 0;

//   $window.scroll(function() {
//     if ($window.scrollTop() > offset.top) {
//       $sidebar.stop().animate({
//         marginTop: $window.scrollTop() - offset.top + topPadding
//       });
//     } else {
//       $sidebar.stop().animate({
//         marginTop: 0
//       });
//     }
//   });
// });

// $(document).on("click", "#import_linkedin", function() {
//   $("#load_linkedin").removeClass("disabled");
// });

$(document).on("click", "#add_more_experience", function() {
  addExperienceBullet();
});

$(document).on("click", "#remove_field", function() {
  $(this)
    .parent()
    .fadeOut();
});

//HIDE AND SHOW WORK EXPERIENCE SECTIONS BY CLICKING POSITION TITLE
$(document).on("click", ".position", function() {
  $("#hide_details").addClass("hidden");
  $(".position").addClass("unhide");
  $(".work_history_dates").removeClass("hidden");
});

$(document).on("click", ".unhide", function() {
  $("#hide_details").removeClass("hidden");
  $(".position").removeClass("unhide");
  $(".work_history_dates").addClass("hidden");
});

//ACTIVE AND DEACTIVATE WORK HISTORY BULLETS
$(document).on("click", ".activate", function() {
  // $(this).removeClass("activate");
  $(this).addClass("work_history_bullet_active");
  $(this)
    .find(".bullet_menu")
    .removeClass("hidden");
});

$(document).on("click", ".work_history_bullet_active", function() {
  $(this).removeClass("work_history_bullet_active");
  // $(this).addClass("activate");
  $(this)
    .find(".bullet_menu")
    .addClass("hidden");
  // $(this).attr("contenteditable", "true");
});

//REMOVE/CLOSE WORK HISTORY BULLET
$(document).on("click", "#bullet_icon_close", function() {
  $(this)
    .parent()
    .parent()
    .parent()
    .fadeOut();
});

//EDIT WORK HISTORY BULLET
$(document).on("click", "#bullet_icon_edit", function() {
  // $(".bullet_menu").append(
  //   "<span class='bullet_menu right'>" +
  //     "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
  //     "<i class='tiny material-icons' id='bullet_icon_close'>plus</i>" +
  //     "</div>" +
  //     "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
  //     "<i class='tiny material-icons' id='bullet_icon_edit'>home</i>" +
  //     "</div></span>"
  // );
  // $(this)
  //   .parent()
  //   .parent()
  //   .parent()
  //   .attr("contenteditable", "true");
});

$(document).on("click", "#profile_add_bullets", function() {
  event.preventDefault();
  addExpereinceBulletDiv();
  // addProfileBullet();
});

//OLD EDIT FUNCTION WITHOUT "CONTENTEDITABLE"
// var bullet_text = $(this)
//   .parent()
//   .parent()
//   .parent()
//   .find(".bullet_text")
//   .text();

// $(this)
//   .parent()
//   .parent()
//   .parent()
//   .before(
//     "<div class='work_history_bullet'>" +
//       "<span class='bullet_menu right invisible'></span>" +
//       "<div class='left work_history_checkbox'>" +
//       "<i class='tiny material-icons' id='bullet_icon_edit'>edit</i>" +
//       "</div> <div class='bullet_text'>" +
//       bullet_text +
//       "</div></div>"
//   );

// $(this)
//   .parent()
//   .parent()
//   .parent()
//   .addClass("hidden");
