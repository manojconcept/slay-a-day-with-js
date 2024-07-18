function reverseString(param) {
    let result = "";
    for (let i = param.length - 1; i >= 0; i--) {
        result += param[i];
    }
    return result
}


// const reverseThestring(param)=>param.split(" ").map(word => word.split(""))

const reverseString2 = (param) => param.split(" ").map(word=>word.split("").reverse().join("")).join(" ");


console.log(reverseString("iam not in the mood to talk"));
console.log(reverseString2("iam not in the mood to talk"));


const fibonacciNumber = (param) =>{
    let result = new Array();
    f1=-1;
    f2=1
    for(let i=f1+f2;i<param;i++){
        fn = f1 + f2 
        result.push(fn);
        f1=f2;
        f2=fn;
    }
    return result;

}

console.log(
    fibonacciNumber(8)
)



// const findMissingNumber=(array)=>{
//     let max = array[0];
//     let min = array[0];
//     let result = new Array();
//     for(let i =1; i<array.length;i++){
//         array[i] > max && (max = array[i]);
//         array[i] < min && (min = array[i]);
//     }
//     for(let i = min;i<max;i++){
//         !array.includes(i) && result.push(i);
//     }
//     return result
// }

// console.log(findMissingNumber([5,2,4,8,10]));

const findMissingNumber = (array) => {
    let max = array[0];
    let min = array[0];
    let result = [];

    // Find the min and max in the array
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }

    // Check for missing numbers
    for (let i = min; i <= max; i++) {
        let found = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(i);
        }
    }

    return result;
}

console.log(findMissingNumber([5, 2, 4, 8, 10]));
