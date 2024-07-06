"use strict"
import { UserData } from "./services/data.js";

const username = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const male = document.getElementById("male");
const female = document.getElementById("female");
const address = document.getElementById("address");
const password = document.getElementById("password");

const submitbtn = document.getElementById("submit");

const detailAppend = document.getElementById("super");

console.log(UserData);

submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicking");
    function UserCollection(uSername, eMail, aGe, mAle, fEmale, aDdress, pAssword) {
        this.username = uSername.value;
        this.email = eMail.value;
        this.age = aGe.value;
        this.male = mAle.value;
        this.female = fEmale.value;
        this.address = aDdress.value;
        this.password = pAssword.value;
    }
    const eachUsers = new UserCollection(username, email, age, male, female, address, password);
    [username, email, age, male, female, address, password].forEach((ele) => ele.value = "");
   
    return UserData.push(eachUsers);

})

