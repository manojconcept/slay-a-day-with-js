"use strict"

const username = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const male = document.getElementById("male");
const female = document.getElementById("female");
const address = document.getElementById("address");
const password = document.getElementById("password");
const submitbtn = document.getElementById("submit");
const detailAppend = document.getElementById("super");

let UserData = new Array();

const creatUserData = () => {
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
}

submitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    creatUserData();
    let htmlBlock;
    UserData.forEach(ele => {
        const {
            username,
            age,
            email,
            male,
            female,
            password,
            address
        } = ele;
        htmlBlock = `<hr><div>
       <h3>name : ${username}</h3>
        <h3>age : ${age}</h3>
        <h3>email : ${email}</h3>
        <h3>male : ${male}</h3>
        <h3>female : ${female}</h3>
        <h3>password : ${password}</h3>
        <h3>address : ${address}</h3>
    </div><hr>`
    })
    return detailAppend.innerHTML += htmlBlock
})


