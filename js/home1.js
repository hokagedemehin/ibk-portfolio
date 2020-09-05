const navContainer = document.querySelector('.nav-container');
const navCenter = document.querySelector('.nav-center');
const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');
       
window.addEventListener('scroll', (e)=>{
    const height = window.pageYOffset;
    const linksHeight = links.getBoundingClientRect().height;
    console.log('link height',linksHeight);
    if (height > 5){
        navContainer.classList.add('scrolled');        
    } else {
        navContainer.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', ()=>{
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log('linksHeight: ',linksHeight);
    // console.log('containerheight: ', linksContainerHeight);
    if(linksContainerHeight == 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = `0px`;
    }
});
// ********** smooth scroll ************
// select links

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e)=>{
        //prevent default scrolling
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id);
        const element = document.getElementById(id);

        // calculate the height
        const navHeight = navContainer.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navContainer.classList.contains('scrolled');

        let position = element.offsetTop-navHeight;
        console.log('offset: ', element.offsetTop);
        console.log('position: ', position);
        console.log('navheight: ', navHeight);
        console.log('containerHeight: ', containerHeight);
        console.log('scrolled: ', fixedNav);
        // let position = element.offsetTop;
        // let position1 = position-85;
        if(!fixedNav){
            position = position - navHeight;
            console.log('position inside fixednav: ', position);
        }
        if(navHeight>85){
            position = position + containerHeight - 25;
            console.log('position inside navheight: ', position);
        }
        window.scrollTo({left: 0,top:position});
        //close navbar
       linksContainer.style.height=0;
    });
});