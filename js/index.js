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

//4 - mouse over
const goBig = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('mouseover', (e) => {
        e.target.style.color = 'red';
//4.5 - timeout
        setTimeout(function() {
            e.target.style.color = '';
        }, 500);
    }, false);
});

//5 - 



// goBig.addEventListener('mouseover', (e) => {
//     e.target.style.color = 'red';
// })



// prevent links
const stopLink = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', (e) => {
        console.log('stopped link');
        
        e.preventDefault();
    })
})