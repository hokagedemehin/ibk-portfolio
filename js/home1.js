const header = document.querySelector('.nav-container');
const links = document.querySelector('.links');
const bar = document.querySelector('.nav-toggle');
const nav = document.querySelector('.links-container');
const barH = bar.getBoundingClientRect().height;
       
window.addEventListener('scroll', (e)=>{
    e.preventDefault();
    const height = window.pageYOffset;
    const linksHeight = links.getBoundingClientRect().height;
    console.log('link height',linksHeight);
    if (height > 0){
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
