
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
let leftAngleTriangle ="";
for (let i = 1;i<=10;i++){
    for(let j=1;j<=i;j++){
        leftAngleTriangle += i
    }
    leftAngleTriangle +="\n"
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
for(let i=1;i<=10;i++){
    for(let j=1;j<=i;j++){
        leftAngleTriangleP2 += j;
    }
    leftAngleTriangleP2 +="\n";
}
console.log(leftAngleTriangleP2.trim());
//---------------------------------------------------------->
//=========> Triangle Pattern T1.1;
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
console.log(">>>RightAngleTriangle pattern T2")
let rightAngleTriangle = "";
for(let i=1;i<=10;i++){
    for(let j=10; j>=i; j--){
       if(j>i){
        rightAngleTriangle += " ";
       }

        for(k=1;k<=i;k++){
            rightAngleTriangle +=i
        }
    }
    rightAngleTriangle +="\n";
}
console.log(rightAngleTriangle);

//i=1 ; i<=10 ---> true;
//j=10; j>=i; j-- -->   


