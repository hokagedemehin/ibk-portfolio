"use strict";

var header = document.querySelector('.nav-container'); // const
// height = 

window.addEventListener('scroll', function (e) {
  e.preventDefault();
  var height = window.pageYOffset;

  if (height > 0) {
    // console.log(height);
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
var navToggle = document.querySelector('.nav-toggle');
var linksContainer = document.querySelector('.links-container');
var links = document.querySelector('.links');
console.log(navToggle);
navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle('show-links')
  var containerHeight = linksContainer.getBoundingClientRect().height;
  var linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);
  console.log(containerHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = "".concat(linksHeight, "px");
  } else {
    linksContainer.style.height = 0;
  }
});