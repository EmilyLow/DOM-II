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


//dblclick
//Flip background and text colors


whole[0].addEventListener('dblclick', (event) => {
    whole[0].style.color = "white";
    whole[0].style.backgroundColor = "black";
});

console.log("test");