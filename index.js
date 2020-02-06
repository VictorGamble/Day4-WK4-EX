"use strict"

//Variables & Arrays
const allBlanks = document.querySelectorAll(".blank");
const allItems = document.querySelectorAll(".item");
const myButton = document.getElementById("button1");
const myListArea = document.querySelector(".groceryList")

// Functions
const generateMyList = () => {
    
    allItems.forEach(item => {
        const newText = document.createElement("p");
        newText.innerHTML = item.value;
        myListArea.appendChild(newText) 
}
    )};


//Event Listeners
myButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    generateMyList();
    
});