"use strict";
var portfolioData;

// Retrieving data from json file:
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      portfolioData = JSON.parse(this.responseText);
      appendData(portfolioData);
    }
  };
  xhttp.open("GET", "/data.json", true);
  xhttp.send();
}

//Listening to checkboxes with categories
$(function() {
    $('.category').change(function() {appendData(portfolioData)});
})

//Write out the data
function appendData(data) {

  let mainContainer = document.getElementById("projectCards");
  $(mainContainer).empty();
  let allCategories = $('.category');
  let checkedCategories = [];
  let cardsToDisplay = [];

  //Get all checked categories
  for (let j = 0; j < allCategories.length; j++) {
    if (allCategories[j].checked) {
      checkedCategories.push(allCategories[j].id);
    }
  }
  //Get all projects to display
  for (var i = 0; i < data.length; i++) {
    for(var k = 0; k < checkedCategories.length; k++) {
        if(data[i].class.includes(checkedCategories[k])) {
          cardsToDisplay.push(data[i]);
          break;
        }
    }
  }
  //Display all projects
  for(let l = 0; l < cardsToDisplay.length; l++){
    //Create a row
    if(l % 3 === 0){
      var rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      mainContainer.appendChild(rowDiv);
    }
    //Create div for image
    var imageDiv = document.createElement("div");
    imageDiv.classList.add("col-md-4");

    //Create image
    var myImage = document.createElement("IMG");
    myImage.src = cardsToDisplay[l].imageUrl;
    myImage.setAttribute('width', '100%');
    myImage.classList.add("img-responsive");
    //Make image clickable
    var linkElement = document.createElement('a');
    linkElement.href = cardsToDisplay[l].projectPage;

    linkElement.appendChild(myImage);

    //Append to DOM
    imageDiv.appendChild(linkElement);
    rowDiv.appendChild(imageDiv);
  }
}

//Display all data
function showAll() {

  let categories = $('.category');
  let labels = $('label');

  //Make all buttons pressed
  for (let i = 0; i < categories.length; i++) {
    if(!categories[i].checked)
    {
      $(labels[i]).button('toggle');
      categories[i].checked = true;
    }
  }
}
