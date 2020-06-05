// Your code goes here

//mouseover


//keydown (any key pressed)


//dblclick
//Flip background and text

let whole = document.getElementsByTagName('body');

whole[0].addEventListener('dblclick', (event) => {
    whole[0].style.color = "white";
    whole[0].style.backgroundColor = "black";
});

console.log("test");