let name = "manoj";
let result = "";
let reverseResult = "";
for(let i =0;i<name.length;i++) result = result + name[i];
console.log(result);
for(let i=name.length-1;i>=0;i--) reverseResult = reverseResult + name[i]
console.log(reverseResult);
console.log(name.split("").reverse().join(""));