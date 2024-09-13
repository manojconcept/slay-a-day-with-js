//object constructor;
let count = 0;
function CarBluePrint(brand, color, fuelType) {
    this.id = ++count;
    this.brand = brand;
    this.color = color;
    this.fuelType = fuelType;
}

//car factory 
let car = new CarBluePrint("audi", "black", "diesel"); //{brand:"audi",color:"black",fuelType:"diesel" };
let car2 = new CarBluePrint("tata", "white", "electric"); //{brand:"tata",color:"white",fuelType:"electric"};

let collectionOfCars = [];
collectionOfCars.push(car);
collectionOfCars.push(car2);
console.log(collectionOfCars);

let allJson = JSON.stringify(collectionOfCars);

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function () {
        console.log(`hello ${this.firstName} ${this.lastName}`); // in traditional function only can acess this from lexical scope ;
    }
}

const john = new Person('manoj', "concept", 200);

//Object.create();
const animal = { //parent
    eat() {
        return "yum";
    }
}
const myDog = Object.create(animal);
console.log(myDog.eat());

const myCat = Object.create(animal, {
    name: { value: "Fido" },
    breed: { value: "presian" }
});

console.log(myCat.eat());
console.log(myCat.name);
console.log(myCat.breed);

const human = {
    speak(){
        return "i can talk";
    }
}

const manojconcept = Object.create(human,{
    name:{value:"manoj concept"},
    intro:{value:`my name is manojconcept`}
});

console.log(manojconcept.speak());
console.log(manojconcept.name);
console.log(manojconcept.intro);