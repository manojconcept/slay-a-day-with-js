function Human(name,age,skintone,breed){
    this.name = name;
    this.age = age;
    this.skintone = skintone;
    this.breed = breed;
}

const commonPerson = new Human("manojconcept","220","green","marsian");

console.log(commonPerson);
console.log(commonPerson.name);
console.log(commonPerson.age);
console.log(commonPerson.skintone);
console.log(commonPerson.breed);

console.log(Object.keys(commonPerson));
console.log(Object.values(commonPerson));
console.log(Object.entries(commonPerson));


let userData = {};
for (const [key,value] of Object.entries(commonPerson)){
    userData[key] = value;
}
console.log(userData);

//looping through an object;
let commonPer = {};
 Object.values(commonPerson) //["manojconcept","220","green","marsian"];
["username","realage",'color','planet',"hello"];

for(let i=0;i<Object.values(commonPerson).length;i++){
   console.log(Object.values(commonPerson)[i]);
}

for(let i=0;i<["username","realage",'color','planet',"hello"].length;i++){
    if(Object.values(commonPerson)[i] !== undefined && ["username","realage",'color','planet',"hello"][i] !== undefined) {
        commonPer[["username","realage",'color','planet',"hello"][i]] = Object.values(commonPerson)[i];
    }
}

console.log(commonPer);


