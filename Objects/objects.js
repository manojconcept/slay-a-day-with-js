//objects are created 3 difference ways

let userData = { name: "manoj", age: 1, dob: "2-4-2001", "first-one": "bass", "first": "jojo", "first name": "kong" }; //key value pair
userData.place = "mars"; //add
userData.id = "1"; //add
userData.name_ui = 1234; //add and dot notation
userData["name-ui"] = 1234; //add and bracket notation;
userData.name = "corgi" //Edit

console.log(userData.name); //accessing dot notation.
console.log(userData["first-one"]); // accessing bracket notation.
console.log(userData.first);
console.log(userData["first name"]);
console.log(userData);

let storeData = new Object();
storeData.proName = "mac";
storeData.brand = "apple";
//{proName:"mac",brand:"apple"};
console.log(storeData);

// object also contain function which is also called as methods
const car = {
    brand: "Toyota",
    model: 'camry',
    startEngine() {
        console.log("Engine started");
    },
    accelerate() {
        console.log("Vroom");
    }
}

car.startEngine();
car.accelerate();

//object with properties 
const person = {
    firstName: "Manoj",
    lastName: "concept",
    age: 35
}
//object with properties and a methods

const dog = {
    name: "max",
    breed: "golden retriever",
    brak: function () {
        console.log("bow bow");
        return "bow bow"; // i will return bow bow 
    }
}
console.log(dog.brak());

//object with nested loops
const student = {
    name: "Emily",
    grades: {
        math: 90,
        science: 85,
        english: 92
    }
};



