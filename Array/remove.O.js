const fruits = ["Banana", "Orange", "Apple", "Mango"];

const IndexOfremoveElment = fruits.indexOf("Apple");
console.log(IndexOfremoveElment); //2
fruits.splice(IndexOfremoveElment, 1);
console.log(fruits);