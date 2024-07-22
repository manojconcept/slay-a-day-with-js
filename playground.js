let roleName = "author";

console.log(roleName[0]); //a
console.log(roleName[1]); //u
console.log(roleName[2]); //t
console.log(roleName[3]); //h
console.log(roleName[4]); //o
console.log(roleName[5]); //r

console.log(roleName[5]); //r
console.log(roleName[4]); //o
console.log(roleName[3]); //h
console.log(roleName[2]); //t
console.log(roleName[1]); //u
console.log(roleName[0]); //a

//syntax
//for(start;condition;increment)
//for(start;condition;decrement)

for(let i=0;i<5;i++){
    console.log(i);
}

/*
//step 1
let i =0
i<5---->true
console.log(i)--> 0
i++ ---> 1 --> i = i +1 ---> 1

//step 2
let 
i < 5 --> 1 < 5 --> true
console.log(i) --> 1
i++ --> 2 --> i = i+1 --> 1+1 --> 2

//step 3
i=2
i < 5 --> 2 < 5 --> true
console.log(i) --> 2 
i++ ---> 3 --> i = i+1 --> 3

//step 4
i=3
i < 5 --> 3 < 5 --> true
console.log(i) --> 3
i++ ---> 3 --> i = i+1 --> 4

//step 5
i=4
i < 5 --> 4 < 5 --> true
console.log(i) --> 4
i++ ---> 4 --> i = i+1 --> 5

step 6 
i=5
i<5 --> 5<5 -->false
loop --> exit
*/

console.log(roleName.length); //6

for(let i=0;i<roleName.length;i++){
    console.log(roleName[i]);
}

console.log(typeof parseInt("5")); //number
console.log(typeof +"5"); //number unary operator
console.log(typeof 5) // number


let i =0;
i = i + 1;  // 1
i = i+ 1 ; // 2
i = i+ 1 ; //3
console.log(typeof i);

let j = ""; //
j=j+1;
j=j+1;
j=j+1;
j=j+1;
console.log(typeof +j)

console.log(+"1111" + "2") // 1113

/*
1111 + "2" => 11112
*/
/* roleName.length = 6  */
for(let i=0;i<roleName.length;i++){
    console.log(roleName[i]);
}

for(let i =10;i>=3;i--){
    console.log(i);
}
/*
step : 1
i=3
i>=0 ---> 3 > =0 --> true
console.log(i) --> 3
i-- --> i = i-1 => 3-1 => 2

step :2 
i=2
i>=0 --> 2>=0 --> true
console.log(i)--> 2
i-- --> i=i-1 -->2-1 --> 1

step : 3
i=1
i>=0 --> 1 >=0 --> true
console.log(i); --> 1
i-- --> i-1 -> 1-1 ---> 0

step 4
i=0
i>=0 --> 0>=0 --> true
console.log(i) --> 0;
i-- -->0-1 --> -1

step 5 
i = -1 
-1>=0 -->false 
loop exit

*/

let result = "";
for(let i = roleName.length-1;i>=0;i--){
    result += roleName[i];
    
}
console.log(result);

/* odd --> 1,3,5,7 */
/* even --> 2,4,6,8 */

/* i++ ---> i = i+1 post prefix  */ 
/* ++i ---> i = i+1 prefix */
console.log("------>odd")
for(let i =1;i<=10;i=i+2){
    console.log(i); //odd
    //i=i+2
}
console.log("------>even")
for(let i=2;i<=10;i=i+2){
    console.log(i)
}



