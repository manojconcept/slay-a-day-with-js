let dog = {
    name : "jani",
    age :3,
    location:"heaven",
    speak:function(){
        return `${this.name} bow bow `
    }
}

console.log(dog.speak());

function Car(make,model,year){
    this.make =make;
    this.model = model;
    this.year = year;
    this.drive = function(){
        return `The ${this.make} ${this.model} is driving`
    };
}

let myCar = new Car("Honda","Civic",2022);
console.log(myCar.drive());