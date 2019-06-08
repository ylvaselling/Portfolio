"use strict";

// Retrieving data:

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var portfolioData = JSON.parse(this.responseText);
      appendData(portfolioData);
      console.log(portfolioData);
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

$(function() {
    $('.category').change(toggleVisibility);
})

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'id: ' + data [i].id + ' Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
  }
}

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
