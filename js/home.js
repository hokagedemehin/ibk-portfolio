// All query selector
const navContainer = document.querySelector('.nav-container');
const navHeader = document.querySelector('.nav-header') ;
const image = document.querySelector('.image');
const headerContent = document.querySelector('.header-content');
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const marker = document.querySelector('#marker');

// #######################################################################
// Nav bar on scroll
// ############################################################################

window.addEventListener('scroll', (e)=>{
    e.preventDefault();
    const height = window.pageYOffset;
    console.log(height);
    if (height > 10){
        
        navContainer.classList.add('fixed');
    } else {
        navContainer.classList.remove('fixed');
    }
});

// console.log(navToggle);
// ######################################################################
// Nav toggle button
// #########################################################################
navToggle.addEventListener('click', ()=>{
    // linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);
    console.log(containerHeight);
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});