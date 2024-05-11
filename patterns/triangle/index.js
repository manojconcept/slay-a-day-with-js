
//======================>Example 1: Triangle Pattern - I
/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
*/
console.log(">>>leftAngleTriangle pattern 1")
let leftAngleTriangle ="";
for (let i = 1;i<=10;i++){
    for(let j=1;j<=i;j++){
        leftAngleTriangle += i
    }
    leftAngleTriangle +="\n"
}
console.log(leftAngleTriangle.trim());
/*
1
12
123
1234
12345
123456
1234567
12345678
123456789
12345678910
*/
console.log(">>>leftAngleTriangle pattern 1")



