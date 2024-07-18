/*
INPUT = [1,4,7,9,10];
output = min = 1;
output = max = 1;
1.step --> find maximum value and minimum value
 */

function findThemissingNumber(passArray){
    let max = passArray[0];
    let min = passArray[0];
    for(let i=1;i<passArray.length;i++){
        if(passArray[i] > max) max=passArray[i];
        if(passArray[i] < min) min=passArray[i];
    }
    return {
        min,
        max
    }
}

console.log(
    findThemissingNumber([1,4,7,9,10])
)


//BREAK DOWN
/*
[1,4,7,9,10];

1. we are taking first value of array for min and max;
let min = array[0]; --> 1
let max = array[0]; --> 1

for loop;
now let i = 1; i<array.length;i++
let breakdown the loop 
the loop should start from 2 element in array, so we are starting i = 1;
i=1;
i<array.length ---> 1 < 5;
i++;

start looping 
step1 
i=1
i < 5 --> true
array[i] > max ---> 4 > 1 --> true --> max = 4
array[i] < min ---> 4 < 1 --> false --> min = 1

step 2 
i = 2;
i<5 --> 2 < 5 --> true;
array[i] > max --> 7 > 4 --> true --> max = 7;
array[i] < min --> 7 < 1 --> false --> min = 1

step 3
i = 3
i<5 --> 3 < 5 -->true;
array[i] > max --> 9 > 7 --> true --> max = 9;
array[i] < min --> 9 < 1 --> false --> min = 1;

step 4;
i = 4
i < 5 --> 4 < 5 --> true;

array[i] > max --> 10 > 9 --> true --> max = 10;
array[i] < min --> 10 < 9  --> false --> min =1

step 5 
i=5
i<5 --> 5 < 5 --> false 
loop breaks

step 6 
it retrun an object 
{
min : 1,
max : 10
}











*/