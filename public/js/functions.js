//SHOW MENU IN BULLET DIV ON MAIN SECTION
function addWorkHistorySection() {
  $("#profile_add_section").append(
    "<span class='bullet_menu right'>" +
      "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
      "<i class='tiny material-icons' id='bullet_icon_close'>close</i>" +
      "</div>" +
      "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
      "<i class='tiny material-icons' id='bullet_icon_edit'>edit</i>" +
      "</div></span>"
  );
}

//SHOW MENU IN BULLET DIV ON MAIN SECTION
function createEditSaveMenu() {
  $(".work_history_bullet").append(
    "<span class='bullet_menu right'>" +
      "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
      "<i class='tiny material-icons' id='bullet_icon_close'>close</i>" +
      "</div>" +
      "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
      "<i class='tiny material-icons' id='bullet_icon_edit'>edit</i>" +
      "</div></span>"
  );
}

//ADD BULLET IN MAIN SECTION
function addExpereinceBulletDiv() {
  $("#bullet_section").append(
    "<div class='work_history_bullet activate' contenteditable='true'>" +
      "<span class='bullet_menu right hidden'>" +
      "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
      "<i class='tiny material-icons' id='bullet_icon_close'>" +
      "close </i> </div>" +
      "<div class='badge bullet_menu_icon' id='bullet_menu_icon_height'>" +
      "<i class='tiny material-icons' id='bullet_icon_edit'>" +
      "edit </i> </div> </span>" +
      "<div class='left work_history_checkbox'>" +
      "<label id='profile_work_experience_checkbox'>" +
      "<input type='checkbox' /><span /> </label> </div>" +
      "<div class='valign-wrapper'>" +
      "Enter text here </div> </div>"
  );
}

//ADD BULLET IN MODAL
function addExperienceBullet() {
  $("#work_examples").prepend(
    "<div class='my_input-field col s11 offset-s1'>" +
      "<i class='tiny material-icons left' id='experience_bullet'> check_box_outline_blank" +
      "</i>" +
      "<span id='remove_field' class='badge'>" +
      "<i class='tiny material-icons '>close</i> </span>" +
      "<input placeholder='example...' class='add_work_history_row' id='company_dates' type='text'>" +
      "</div>"
  );
}
