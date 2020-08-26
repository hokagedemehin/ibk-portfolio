const header = document.querySelector('.nav-container');
// const
// height = 
window.addEventListener('scroll', (e)=>{
    e.preventDefault();
    const height = window.pageYOffset;
    if (height > 0){
        // console.log(height);
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
console.log(navToggle);
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