
//======================>Example 1: Triangle Pattern - I
//=========> Triangle Pattern T1;
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
console.log(">>>leftAngleTriangle pattern T1")
let leftAngleTriangle = "";
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
        leftAngleTriangle += i
    }
    leftAngleTriangle += "\n"
}
console.log(leftAngleTriangle.trim());

//=========> Triangle Pattern T1.1;
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
console.log(">>>leftAngleTriangle pattern T1.1")
let leftAngleTriangleP2 = ""
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
        leftAngleTriangleP2 += j;
    }
    leftAngleTriangleP2 += "\n";
}
console.log(leftAngleTriangleP2.trim());
//---------------------------------------------------------->
//=========> Triangle Pattern T1.1;
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
console.log(">>>RightAngleTriangle pattern T2")
let rightAngleTriangle = "";
for (let i = 1; i <= 10; i++) {
    for (let j = 10; j >= i; j--) {
        if (j > i) {
            rightAngleTriangle += " ";
        } else {
            for (let k = i; k >= 1; k--) {
                rightAngleTriangle += i;
            }
        }
    }
    i < 10 && (rightAngleTriangle += "\n")
}
console.log(rightAngleTriangle);

//i=1 ; i<=10 ---> true;
//j=10; j>=i; j-- -->   

/*
         1
        21
       321
      4321
     54321
    654321
   7654321
  87654321
 987654321
10987654321

*/

function funrightAngleTriangle(row) {
    let result = "";
    for (let i = 1; i <= row; i++) {
        for (let j = row; j >= i; j--) {
            if (j > i) {
                result += " ";
            } else {
                for (let k = i; k >= 1; k--) {
                    result += k
                }
            }
        }
        i < row && (result += "\n");
    }
    return result;
}

console.log(funrightAngleTriangle(10));
//---------------------------------------------------------->
//=========> Triangle Pattern T;
/*
12345678910
123456789
12345678
1234567
123456
12345
1234
123
12
1
*/

function inverseLeftAngle(row) {
    let result = "";
    for (let i = 0; i < row; i++) {
        for (let j = 1; j <= row - i; j++) {
            result += j
        }
        i < row && (result += "\n");
    }
    return result;
}
console.log(inverseLeftAngle(10));


/*
10987654321
1098765432
109876543
10987654
1098765
109876
10987
1098
109
10
*/

function inverseLeftAngleTriangleT1(row) {
    let result = "";
    for (let i = 1; i <= row; i++) {
        for (j = row; j >= i; j--) {
            result += j
        }
        i < row && (result += "\n");
    }
    return result;
}

console.log(inverseLeftAngleTriangleT1(10));
// -----------------------------------------------> Good
/*
12345678910
 123456789
  12345678
   1234567
    123456
     12345
      1234
       123
        12
         1
*/
function inverseRightAngleTriangle(row) {
    let result = "";
    for (let i = 1; i <= row; i++) {
            if(i<=1){
                for(let j=1;j<=row;j++){
                    result +=j;
                }
            }else{
                for (let k = 0; k < i-1; k++) {
                    result += " "
                }
                for (let l = 1; l <=row - (i - 1); l++) {
                    result += l;
                }
            }
        i < row && (result += "\n");
    }
    return result
}

console.log(inverseRightAngleTriangle(10));

/*
10987654321
 1098765432
  109876543
   10987654
    1098765
     109876
      10987
       1098
        109
         10
*/
function inverseRightAngleTriangleT1(row){
    let result ="";
    for(let i =1;i<=row;i++){
            if(i<=1){
                for(let j=row;j>=i;j--){
                    result+=j;
                }
            }else{
                for(let j= 0;j<i-1;j++){
                    result += " ";
                }
                for(let j=row;j>=i;j-- ){
                    result += j;
                }
            }
      i<row && (result += "\n");
    }
    return result;
}

console.log(inverseRightAngleTriangleT1(10));
/*
10987654321
  987654321
   87654321
    7654321
     654321
      54321
       4321
        321
         21
          1
*/
function inverseRightAngleTriangleT2(row){
    let result = "";
    for(let i =1; i<=row;i++){
        if(i<=1){
            for(let j=row;j>=i;j--){
                result += j;
            }
        }else{
            for(let j=0;j<(i-1);j++){
                result+=" "
            }
            for(let k=row-(i-1);k>=1;k--){
                result += k;
            }
        }
        i<row && (result += "\n");
    }

    return result;

}
console.log(inverseRightAngleTriangleT2(10));