//Type Conversion 

// Boolean
// Number
// String

/*
All Typeof
//--> string
1. ""
//--> number
2. 0
3. 1
//---> null
4.null
//----> undefined
5. undefined 
6.NaN --> Not a number
//----> boolean
7.true
8.false
*/

//------------------------------------------------> Boolean Conversion
console.log("Boolean Conversion")
console.log(Boolean("")); // false***
console.log(Boolean(NaN)); // false
console.log(Boolean(1)); // true***
console.log(Boolean(0)); // false***
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(true)); //true
console.log(Boolean(false)); //false
console.log(Boolean("Hello")); //true***
//--------------------------------------------------> Number Conversion
console.log("Number Conversion")
console.log(Number("")); // 0***
console.log(Number(" ")); // 0***
console.log(Number("hi")) //NaN
console.log(Number(NaN)); // NaN
console.log(Number(1)); // 1
console.log(Number(0)); // 0
console.log(Number(null)); // 0 ***
console.log(Number(undefined)); // NaN ***
console.log(Number(true)); // 1 ***
console.log(Number(false)); // 0 ***
//--------------------------------------------------> Number Conversion
console.log("String Conversion")
console.log(String("")); // ""
console.log(String(NaN)); // "NaN"
console.log(String(1)); // "1"
console.log(String(0)); // "0"
console.log(String(null)); // "0" ***
console.log(String(undefined)); // "undefined"
console.log(String(true)); // "1" ***
console.log(String(false)); // "0" ***

