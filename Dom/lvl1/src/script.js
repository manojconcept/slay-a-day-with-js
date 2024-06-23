// console.log(document);
const accessWholeDocument = document;
const accessHead = document.head;
const accessBody = document.body;
//To Accessing the elements
const accessId = document.getElementById("name");
// console.log(accessName.innerText); // return an unique;
const accessClass = document.getElementsByClassName("world-tag");
// console.log(accessClass); //returns an array; --> access with index value and with innerText.
const accessTagName = document.getElementsByTagName("div");
// console.log(accessTagName); //retrun an array; --> access with index value and with innerText.
const accessName = document.getElementsByName("color");
// console.log(accessName); // retruns an array; --> access with index value and with innerText
const accessOneAttributesandTagName = document.querySelector("#name"); //selecting first element with the id 
// console.log(accessOneAttributesandTagName);
const accessAllAttributesAndTagName = document.querySelectorAll("input");
//console.log(accessAllAttributesAndTagName);  // retruns an array; --> access with index value and with innerText;
// let chageName = prompt("say your age :");

// (function displayNames() {
//     let creatingElement = document.createElement("h1");
//     creatingElement.id = "box"
//     creatingElement.innerText = prompt("Enter your name");
//     return document.body.append(creatingElement);
// })();


