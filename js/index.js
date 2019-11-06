// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use: 
// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick

/* Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

    * Nest two similar events somewhere in the site and prevent the event propagation properly
    * Stop the navigation items from refreshing the page by using preventDefault()
*/

// Your code goes here

// 1
// when clicked, no links have default behavior and color changes to lightgreen
const stopLink = document.querySelectorAll('.nav-link');
stopLink.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        element.style.color = 'lightgreen';    
    });
});

// 2
// with window resize, backgroud color of logo heading changes to red
const logoHeading = document.querySelector('.logo-heading');
window.addEventListener('resize', () => {
    logoHeading.style.backgroundColor = 'red';
});

// 3
// on scroll, header image disappears
const headerImage = document.querySelector('.intro img');
window.addEventListener('scroll', () => {
    headerImage.style.display = 'none';
});

// 4
// on mousedown, all h2's in .text-content turn red
const textContentH2 = document.querySelectorAll('.text-content h2');
textContentH2.forEach((element) => {
    element.addEventListener('mousedown', () => {
        element.style.color = 'red';
        TweenLite.to(element, 2, {fontSize: '5rem'});
    });
});

// 5
// on mouseup, all h2's in .text-content turn back to black
textContentH2.forEach((element) => {
    element.addEventListener('mouseup', () => {
        element.style.color = 'black';
    });
});

// 6
// with mouseover, the first image in .img-content has its size reduced
const textContentP = document.querySelector('.img-content img');
textContentP.addEventListener('mouseover', () => {
    textContentP.style.width = '50%';
});

// 7
// with mouseout, the first image in .img-content is back to 100% width
textContentP.addEventListener('mouseout', () => {
    textContentP.style.width = '100%';
});

// 8
// use dblclick to change colors of first signup section
// events will only fire seperately because of stopPropagation()
const destinationBox = document.querySelector('.destination');
destinationBox.addEventListener('dblclick', () => {
    destinationBox.style.color = 'blue';
});
const firstButton = document.querySelector('.btn');
firstButton.addEventListener('dblclick', () => {
    firstButton.style.backgroundColor = 'red';
    event.stopPropagation();
});

// 9
// any key down gives the footer a border
const footerSection = document.querySelector('.footer');
document.addEventListener('keydown', () => {
    footerSection.style.border = '10px dashed green';
});

// 10
// on designation image, disable right click context menu
// change color to red if right clicked
const noContext = document.querySelector('.content-destination img');
const bodySection = document.querySelector('body');
noContext.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    bodySection.style.backgroundColor = 'red';
    TweenLite.to(noContext, 2, {opacity:0, rotation:360});
});