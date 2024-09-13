/*
0,1,1,2,3,5,8
*/

//0---> how this 0 has come ---> like 1 -1

function fibbonacciNumber(param){
    f1 = -1;
    f2 = 1;
    let result = new Array();
    for(let i = f1+f2; i<param;i++){
        f3 = f1 + f2;
        console.log(f3);
        result.push(f3);
        f1 = f2 
        f2 = f3
    }
    return result;
}

console.log(fibbonacciNumber(5));