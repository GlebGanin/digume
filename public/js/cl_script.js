$(document).ready(function() {
  $("select").formSelect();
});

$(document).on("click", "#cl_add_company", function() {
  var input = $("#company_name").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_company_name").text(input);
    $("#cl_company_name").removeClass("cl_highlight_word_blue");
  }
});

$(document).on("click", "#cl_add_name", function() {
  var input = $("#your_name").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_applicant_name").text(input);
    $("#cl_applicant_name").removeClass("cl_highlight_word");
  }
});

$(document).on("click", "#cl_add_job_description", function() {
  var input = $("#your_description").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_job_description").text(input);
    $("#cl_job_description").removeClass("cl_highlight_word");
  }
});

$(document).on("click", "#cl_add_location", function() {
  var input = $("#your_location").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_your_location").text(input);
    $("#cl_your_location").removeClass("cl_highlight_word");
  }
});

$(document).on("click", "#cl_add_adjective", function() {
  var custom_text = $("#your_adjective").val();
  if (custom_text == "") {
    var input = $("#custom_adjective option:selected").text();
    $("#cl_first_adjective").text(input);
  } else {
    $("#cl_first_adjective").text(custom_text);
  }
  $("#cl_first_adjective").removeClass("cl_highlight_word_green");
});

//PASSIONS of CHOICE
$(document).on("click", "#cl_add_focus_areas", function() {
  var input = $("#company_focus").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_company_focus").text(input);
    $("#cl_company_focus").removeClass("cl_highlight_word_blue");
  }
});

//INDUSTRY THAT COMPANY IS IN
$(document).on("click", "#cl_add_industry", function() {
  var input = $("#company_industry").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_company_industry").text(input);
    $("#cl_company_industry").removeClass("cl_highlight_word_blue");
  }
});

//SELECT MENU FUNCTION
$(document).on("click", "#cl_add_pickword", function() {
  var custom_text = $("#custom_verb").val();
  if (custom_text == "") {
    var input = $("#pick_word option:selected").text();
    $("#cl_add_verb").text(input);
  } else {
    $("#cl_add_verb").text(custom_text);
  }
  $("#cl_add_verb").removeClass("cl_highlight_word_green");
});

$(document).on("click", "#cl_add_software", function() {
  var input = $("#replace_software").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_software").text(input);
    $("#cl_software").removeClass("cl_highlight_word");
  }
});

$(document).on("click", "#cl_add_interests", function() {
  var input = $("#replace_interests").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_interests").text(input);
    $("#cl_interests").removeClass("cl_highlight_word");
  }
});

$(document).on("click", "#cl_add_project", function() {
  var input = $("#replace_project").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_project").text(input);
    $("#cl_project").removeClass("cl_highlight_word");
  }
});

$(document).on("click", "#cl_list_technologies", function() {
  var input = $("#replace_technologies").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_technologies").text(input);
    $("#cl_technologies").removeClass("cl_highlight_word_blue");
  }
});

$(document).on("click", "#cl_collaboratin", function() {
  var input = $("#replace_collab").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_collaboration").text(input);
    $("#cl_collaboration").removeClass("cl_highlight_word");
  }
});

$(document).on("click", "#cl_databases_button", function() {
  var input = $("#replace_databases").val();
  if (input == "") {
    M.toast({ html: "Please input value into field", classes: "rounded" });
  } else {
    $("#cl_databases").text(input);
    $("#cl_databases").removeClass("cl_highlight_word_blue");
  }
});

$(function() {
  var $sidebar = $("#builder_input"),
    $window = $(window),
    offset = $sidebar.offset(),
    topPadding = 100;

  $window.scroll(function() {
    if ($window.scrollTop() > offset.top) {
      $sidebar.stop().animate({
        marginTop: $window.scrollTop() - offset.top + topPadding
      });
    } else {
      $sidebar.stop().animate({
        marginTop: 50
      });
    }
  });
});
