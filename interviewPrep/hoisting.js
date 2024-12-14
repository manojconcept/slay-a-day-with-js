
//Temporal dead zone
console.log(name1); //ReferenceError
let name1 = "manoj";

console.log(name2); //ReferenceError
const name2 = "manoj";

//hoisting;
console.log(name); //undefined;
var name = "gokul";

console.log(add2(10));

function add2(num){
return num +2;
}
