const add2 = x => x+2;
const substract1 = x => x-1;
const multiply10 = x => x*10;

const res = substract1(multiply10(add2(5)));
//right to left  or inward to outward;
/**
 * 1.add2(5) --> 7;
 * 2. multiply10(7) ---> 70;
 * 3. substract1(40) ---> 69; // final answer is 69
 */
console.log(res,"res");

//writing a polyfill of flow and flowleft in loadash;

const composeResult = compose(substract1,multiply10,add2)(5);
console.log(composeResult,"composeResult");

// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );
// console.log(sumWithInitial);

//right to left polyfills compose;
function compose(...fns){
    return function(vals){
        return fns.reduceRight((pre,fn)=>fn(pre),vals)
    }
}

//left to right polyfills pipesgit 
function pipe(...fns){
    return function(vals){
        return fns.reduce((pre,fn)=>fn(pre),vals);
    }
}

console.log(pipe(substract1,multiply10,add2)(5));

const res1 = add2(multiply10(substract1(5)));
console.log(res1);