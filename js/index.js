// Your code goes here

// 1 - click
const changeLogo = document.querySelector('.logo-heading');

changeLogo.addEventListener('click', () => {
    changeLogo.style.color = 'rebeccapurple';
});

// 2 - mouse enter
const changeImg = document.querySelector('.intro img');

changeImg.addEventListener('mouseenter', () => {
    changeImg.style.transform = 'scale(1.1)';
    changeImg.style.transition = 'all 0.5s'
})
// 2.5 - mouse leave
changeImg.addEventListener('mouseleave', () => {
    changeImg.style.transform = 'scale(1.0)';
    changeImg.style.transition = 'all 0.3s';
})

//3  - double click
const body = document.querySelector('body');

body.addEventListener('dblclick', () => {
    body.style.backgroundColor = '#696969';
})

//3.5 stop propagation
const changeTop = document.querySelector('.content-section');

changeTop.addEventListener('dblclick', (e) => {
    changeTop.style.color = 'green';
    e.stopPropagation();
});


//4 - mouse over
const goBig = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseover', (e) => {
        e.target.style.fontSize = '3rem';
//4.5 - timeout
        setTimeout(function() {
            e.target.style.fontSize = '';
        }, 500);
    }, false);
});

//5 - mousedown

const bannerColor = document.querySelector('.main-navigation');

bannerColor.addEventListener('mousedown', () => {
    bannerColor.style.backgroundColor = '#696969';
})


// 6 - mousemove

const coolColor = document.querySelector('body');

coolColor.addEventListener('mousemove', (e) => {
    body.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 80)';
})

// 7 - scroll 
const bannerScroll = document.querySelector('.main-navigation');
window.addEventListener('scroll', () => {
    bannerScroll.style.backgroundColor = 'hotpink';
  })


// 8 - wheel

const images = document.querySelectorAll("img");
window.addEventListener("wheel", function() {
  images.forEach(img => {
    img.style.borderRadius = `${window.scrollY / 1}px`;
  })
})

// 9 - resize

const bottomColor = document.querySelector(".content-pick")
window.addEventListener('resize', () => {
    bottomColor.style.backgroundColor = 'green';
})

// 10 - select

const footerColor = document.querySelector('.footer p');

footerColor.addEventListener('drag', (e) => {
    e.target.style.backgroundColor = 'red';
})


// prevent links
const stopLink = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', (e) => {
        console.log('stopped link');
        
        e.preventDefault();
    })
})