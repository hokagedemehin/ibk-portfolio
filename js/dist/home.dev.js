"use strict";

// All query selector
var navContainer = document.querySelector('.nav-container');
var navHeader = document.querySelector('.nav-header');
var image = document.querySelector('.image');
var headerContent = document.querySelector('.header-content');
var navToggle = document.querySelector('.nav-toggle');
var linksContainer = document.querySelector('.links-container');
var links = document.querySelector('.links');
var marker = document.querySelector('#marker'); // #######################################################################
// Nav bar on scroll
// ############################################################################

window.addEventListener('scroll', function (e) {
  e.preventDefault();
  var height = window.pageYOffset;
  console.log(height);

  if (height > 100) {
    navContainer.classList.add('fixed');
  } else {
    navContainer.classList.remove('fixed');
  }
}); // console.log(navToggle);
// ######################################################################
// Nav toggle button
// #########################################################################

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