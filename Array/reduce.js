let numbers = [1, 1, 1, 1, 1];

// arry.reduce(callbackfunction(accumlator,current)=> accumlator + current,initial);

let result = numbers.reduce((accumlator, current) => accumlator + current, 0);
console.log(result);
