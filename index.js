"use strict";

function showAll() {

  $('.card').show();
  var categories = $('.category');

  //Make all buttons unpressed
  for (var i = 0; i < categories.length; i++) {
    if(!categories[i].checked)
    {
      categories[i].checked = true;
    }
  }
}


function toggleVisibility(className) {

  let allCategories = $('.category');
  let projects = $('.card');

  for (let i = 0; i < projects.length; ++i) {

    for (let j = 0; j < allCategories.length; j++) {

      if (projects[i].classList.contains(allCategories[j].id) &&
          allCategories[j].checked) {
          $(projects[i]).show();
          break;
      }
      else {
          $(projects[i]).hide();
      }
    }
  }
}
