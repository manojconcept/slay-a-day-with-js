let numbers = [1, 2, 3,4,5];
// arry.reduce(callbackfunction(accumlator,current)=> accumlator + current,initial);
let result = numbers.reduce((accumlator,current)=>accumlator + current,100);
console.log(result);
