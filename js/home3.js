const header = document.querySelector('.nav-container');
const links = document.querySelector('.links');
const bar = document.querySelector('.nav-toggle');
const nav = document.querySelector('.links-container');
const barH = bar.getBoundingClientRect().height;
       
window.addEventListener('scroll', (e)=>{
    // e.preventDefault();
    const height = window.pageYOffset;
    const linksHeight = links.getBoundingClientRect().height;
    console.log('link height',linksHeight);
    if (height > 20){
        header.classList.add('scrolled');
        // const barH = bar.getBoundingClientRect().height;
        //  header.style.height = `${barH}px`;
        //  console.log('bar h inside', barH);
        //  console.log(header.style.height);
        //  header.style.height = `${linksHeight}px`;
        // console.log(`header:`, header.style.height);
        
    } else {
        header.classList.remove('scrolled');
        header.classList.remove('show-link');
        // header.style.height = `100vh`;
        // console.log('ekse inside scroll');
    }
    // console.log(header.classList.contains('scrolled'));
    
    
});

bar.addEventListener('click', ()=> {
    header.classList.toggle('show-link');
    
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e)=>{
        //prevent default scrolling
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id);
        const element = document.getElementById(id);

        // calculate the height
        const navHeight = header.getBoundingClientRect().height;
        const containerHeight = nav.getBoundingClientRect().height;
        const fixedNav = header.classList.contains('fixed-nav');

        let position = element.offsetTop-navHeight;
        console.log('offset: ', element.offsetTop, 'position: ', position, 'navheight: ', navHeight);
        // let position = element.offsetTop;
        // let position1 = position-85;
        if(!fixedNav){
            position = position;
        }
        if(navHeight>85){
            position = position - containerHeight;
        }
        window.scrollTo({left: 0,top:position});
       nav.style.height=0;
    });
});


// const containerHeight = linksContainer.getBoundingClientRect().height;
// const linksHeight = links.getBoundingClientRect().height;
// console.log(linksHeight);
// console.log(containerHeight);


// navToggle.addEventListener('click', ()=>{
//     // linksContainer.classList.toggle('show-links')
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const linksHeight = links.getBoundingClientRect().height;
//     console.log(linksHeight);
//     console.log(containerHeight);
//     if(containerHeight === 0){
//         linksContainer.style.height = `${linksHeight}px`;
//     }
//     else{
//         linksContainer.style.height = 0;
//     }
// });
