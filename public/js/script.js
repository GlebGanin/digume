$(document).ready(function() {
  jQuery(".parallax").parallax();
  $(".modal").modal();

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

$(document).on("click", "#add_education", function() {
  $("#education_status").removeClass("hidden");
});

$(document).on("click", "#add_more_experience", function() {
  $("#work_examples").prepend(
    "<div class='my_input-field col s11 offset-s1'>" +
      "<i class='tiny material-icons left' id='experience_bullet'> lens</i>" +
      "<span id='remove_field' class='badge'>" +
      "<i class='tiny material-icons '>close</i> </span>" +
      "<input placeholder='example...' class='add_work_history_row' id='company_dates' type='text'>" +
      "</div>"
  );
});

$(document).on("click", "#remove_field", function() {
  $(this)
    .parent()
    .remove();
});
