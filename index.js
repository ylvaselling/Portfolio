"use strict";

$(function() {
    $('.category').change(toggleVisibility);
})

function showAll() {

  $('.card').show();
  let categories = $('.category');
  let labels = $('label');

  //Make all buttons unpressed
  for (let i = 0; i < categories.length; i++) {
    if(!categories[i].checked)
    {
      $(labels[i]).button('toggle');
      categories[i].checked = true;
    }
  }
}


function toggleVisibility() {

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
