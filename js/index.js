// Your code goes here

//mouseover
//make image transparent
let busPic = document.querySelector(".intro img");
busPic.addEventListener('mouseover', (event) => {
    busPic.style.opacity = "0.2";
    event.stopPropagation();
});

//keydown (any key pressed)
//Swap images
let whole = document.getElementsByTagName('body');
let centerPics = document.querySelectorAll(".content-section img");
whole[0].addEventListener('keydown', (event) => {
    centerPics[0].setAttribute('src', "img/fun.jpg");
    centerPics[1].setAttribute('src', "img/adventure.jpg");
});

//keyup
//Change text of first paragraph if key is released
let firstText = document.querySelector(".intro p");

document.addEventListener('keyup', (event) => {
    firstText.textContent = "Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light. Though wise men at their end know dark is right, Because their words had forked no lightning they Do not go gentle into that good night."
});



//copy
//Change h2 text if user copies h2

let funBus = document.querySelector(".intro h2");

funBus.addEventListener('copy', (event) => 
{
    funBus.textContent = "Welcome To The Doom Bus!";}
    );

//load
//Console logs that the page has loaded
window.addEventListener('load', (event) => {
    console.log("Page loaded.");
});

//dblclick
//Flip background and text colors


whole[0].addEventListener('dblclick', (event) => {
    whole[0].style.color = "white";
    whole[0].style.backgroundColor = "black";
    
});

//focus
//On focusing, the background of the form turns blue
let form = document.querySelector('input[type="text"]');
let fillerText = document.querySelector(".form input")
form.addEventListener('focus', (event) => {
    event.target.style.background = "lightblue";
});

//select
//Text has been entered and then selected inside the form
let input = document.querySelector('input');
input.addEventListener('select', (event) => {
    event.target.style.background = "red";
} );

//mouseenter
//The mouse enters the bottom image, and the image zooms in
let finalImage = document.querySelector(".content-destination img");
finalImage.addEventListener ('mouseenter', (event) => {
 
    finalImage.style.transform = "scale(2)";
    finalImage.style.transition = "transform 1s";
});

//mouseleave
//The mouse leaves the bottom image, and the image zooms out
finalImage.addEventListener ('mouseleave', (event) => {
    finalImage.style.transform = "scale(1)";
});

//dblclick nest
//Creating a doubleclick event on first paragraph and preventing propogation to full page doubleclick
firstText.addEventListener('dblclick', (event) => {
    firstText.style.color = "orange";
    firstText.style.backgroundColor = "grey";
    event.stopPropagation();
});

//preventdefault
let navItems = document.querySelectorAll('a');

navItems.forEach((item) => item.addEventListener('click', (event) => {
    item.textContent = "clicked";
    event.preventDefault();
} 
    ));
