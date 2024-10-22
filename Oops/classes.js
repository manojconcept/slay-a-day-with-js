class Address {
    //constructor
    constructor(no, area, street, pincode, landmark, geoLocation) {
        this.no = no;
        this.area = area;
        this.street = street;
        this.pincode = pincode;
        this.geoLocation = geoLocation;
        this.landmark = landmark;
    }

    #getGeoLocation = () => this.geoLocation; // private method
    getAllDetails = () => `${this.#getGeoLocation()} & ${this.pincode}`;

}

let manoj = new Address("12/436-E","periyakulam", "thirunager 2nd street", "625604", "thangamuthuPolytechique", "1.2.3.8");

//inheretance
class Person extends Address{
    constructor(name,age,color,origin){
        // super(no, area, street, pincode, landmark, geoLocation)
        this.name = name;
        this.age = age;
        this.color = color;
        this.origin = origin;
    }
}

let person1 = new Person("manoj","30","brown","japan");
console.log(person1);
