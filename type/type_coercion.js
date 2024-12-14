console.log(0===0); // true
console.log({}==={}) //false
console.log([]===![]) // false
console.log([]===[]) // false
console.log(({})===({})); //false
console.log(([])===([])); //false
console.log(true===true); // true
console.log(false===false); // true
console.log(NaN === NaN);// false
console.log(undefined === null) //false
console.log(undefined === undefined) //true
console.log(null === null) //true
console.log(0 === true); //false
console.log(1 === false); //false
console.log(1 === true); //false
console.log(0 === false); //false
//--------------------------------------------------> == double equal to
console.log(0 == "0"); // (1) number convert to '0'
//string and Number --> convert the number to Number('0') so 0 == 0 true
console.log(false == "false"); // (2) false convert to primite 
//boolean and string --> first convert to Number  Number(false) === Number('false') 0 == 1 false
console.log(false == "0"); // (3)
console.log(null == undefined); // (4)
console.log([] == 0); // (5) // true
//Boolean([]) == Boolean(0) // true == false
console.log([] == ![]); // (6) //true
console.log([1, 2] == "1,2"); // (7) true
console.log({} == "[object Object]"); // (8)  true
console.log("" == false); // (9) true

//{} + [] = {} is set of block is undefined and {} and [] is "" undefined + Number(0) = NaN

