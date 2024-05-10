
//======================>Example 1: Triangle Pattern - I
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

function leftAngleTriangle(row){
    let result = "";
    for (let i =1;i<=row;i++){
        for(let j=1;j<=i;j++){
            result += i
        }
        result +="\n";
    }
    console.log(">>>leftAngleTriangle")
    return result;
}

console.log(leftAngleTriangle(5).trim());



