// let a;
// let b;
// [a,b] = [12,"manoj"];
// let arrayOfRandom = [a,b];
// console.log(arrayOfRandom); // [12,manoj];

let arrayofAll = [12,"manoj","dragon"];
// let numberOfrow = arrayofAll[0];
// let myName = arrayofAll[1];
// let mythicalCreature = arrayofAll[2];
// console.log(myName); // "manoj";
// console.log(mythicalCreature); // dragon;
// console.log(numberOfrow); //12

let numberOfrow,mythicalCreature,myName;
 [numberOfrow,mythicalCreature,myName] = arrayofAll;
 console.log(numberOfrow);
 console.log(mythicalCreature);
 console.log(myName);


let array2 = [1,'manoj',"catfish","python","spider",3344,7788];
let firstNumber,myName2,freshWaterFish,rest;
[firstNumber,myName2,freshWaterFish,...rest] = array2;
// console.log(firstNumber); 1
// console.log(myName2); //manoj
// console.log(freshWaterFish);// catfish
// console.log(rest); //["python","spider",3344,7788]
const array3 = [firstNumber,myName2,freshWaterFish,rest];
console.log(array3);