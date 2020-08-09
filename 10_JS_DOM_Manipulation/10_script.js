let firstH2Element = document.querySelector("#first-h2");

let displayWishMsg = (message,color) => {
    firstH2Element.textContent = message;
    firstH2Element.style.backgroundColor = color;
    firstH2Element.style.textAlign = "center";
    firstH2Element.style.padding = "10px";
    firstH2Element.style.boxShadow = "0 0 15px black";
};

// JavaScript Event Listeners
let secondH2Element = document.querySelector("#second-h2");

let SecondDisplayWishMsg = (message,color) => {
    secondH2Element.textContent = message;
    secondH2Element.style.backgroundColor = color;
    secondH2Element.style.textAlign = "center";
    secondH2Element.style.padding = "10px";
    secondH2Element.style.boxShadow = "0 0 15px black";
};

// GM Button
let GMButton = document.querySelector('#gm');
GMButton.addEventListener('click',function() {
    SecondDisplayWishMsg("Good Morning",'lightgreen');
});

// GA Button
let GAButton = document.querySelector('#ga');
GAButton.addEventListener('click',function() {
    SecondDisplayWishMsg("Good Afternoon",'lightblue');
});

// GE Button
let GEButton = document.querySelector('#ge');
GEButton.addEventListener('click',function() {
    SecondDisplayWishMsg("Good Evening",'lightsalmon');
});

// GN Button
let GNButton = document.querySelector('#gn');
GNButton.addEventListener('click',function() {
    SecondDisplayWishMsg("Good Night",'orange');
});

// Likes Button Logic
let likesButton = document.querySelector('#likes');
let spanTag = document.querySelector('#span');
let count = 1;
likesButton.addEventListener('mouseenter',function() {
    spanTag.textContent = count;
    count++;
});
