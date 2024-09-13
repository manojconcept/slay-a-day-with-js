/*
num%num => 0
num%1 => 0
if num%2 => 0 ---> not a prime number;
*/

function isPrimeNumber(num) {
    let count = 0
    for (let j = 1; j <= num; j++) {
        if (num % j === 0) {
            count++;
        }
    }
    if (count === 2) {
        return true;
    }
    return false;
}

console.log(isPrimeNumber(13));

//1 to n number of prime number !
function primeNumberIn(num){
    let count =0;
    let result = [];
    for(let i=1;i<=num;i++){
        for(j=1;j<=i;j++){
            if(i%j === 0){
                count++;
            }
        }
        if(count === 2) {
            result.push(i);
        }
        count=0;
    }
    return result;
}

console.log(primeNumberIn(100));

//prime number range

function primeNumberRange(start=1,end){
    let count = 0
    let result = [];
    for(let i=start;i<=end;i++){
        for(j=1;j<=i;j++){
            if(i%j===0){
                count++;
            }
        }
        if(count === 2){
            result.push(i);
        }
        count = 0;
    }
    return result;
}

console.log(primeNumberRange(25,100));