
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






