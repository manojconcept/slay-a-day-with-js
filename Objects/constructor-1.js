//person constructor
let Person = function(name,gender,birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
}

Person.prototype.calAge = function(){
    console.log(new Date().getFullYear()-this.birthYear);
}

let manoj = new Person("manoj","male",1995);
manoj.calAge();
console.log(manoj);

