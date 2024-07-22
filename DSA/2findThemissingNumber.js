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
    for (let i = min; i < max; i++) {
        let found = false;

        for (let j = 0; j < array.length; j++) {
            if (array[j] === i) {
                found = true;
                break;
            }
        }

        if (!found) { // takes only false;
            result.push(i);
        }
    }

    return result;
}

console.log(findMissingNumber([5, 2, 4, 8, 10]));

/*
min = 2 
max = 10
result = []

outerloop = i = 2; 2 < 10 --> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 2 --> flase
        array[j] === i ---> 2 === 2 ---> true
            found = true;
            break; 

outerloop = i = 3 ;  3 < 10 --> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 3 --> false
        array[j] === i ---> 2 === 3 ---> false
        array[j] === i ---> 4 === 3 ---> false
        array[j] === i ---> 8 === 3 ---> false
        array[j] === i ---->10 === 3 ---> false
    if (!found) at means found = true;
        result.push(i);

outerloop = i = 4 ;  4 < 10 --> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 4 --> false
        array[j] === i ---> 2 === 4 ---> false
        array[j] === i ---> 4 === 4 ---> true
            found = true;
            break;

outerloop = i = 5; 5 < 10 --> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 5 --> true
         found = true;
            break;

outerloop = i = 6 ;6 < 10 --> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 6 --> false
        array[j] === i ---> 2 === 6 --> false
        array[j] === i ---> 4 === 6 --> false
        array[j] === i ---> 8 === 6 --> false
        array[j] === i ---> 10 === 6 --> false
    found = false;
            result.push(i);

outerloop = i = 7 ; 7 < 10 ---> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 7 --> false
        array[j] === i ---> 2 === 7 --> false
        array[j] === i ---> 4 === 7 --> false
        array[j] === i ---> 8 === 7 --> false
        array[j] === i ---> 10 === 7 --> false
    found = false;
        result.push(i);

outerloop = i = 8 ; 8 < 10 --> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 8 --> false
        array[j] === i ---> 2 === 8 --> false
        array[j] === i ---> 4 === 8 --> false
        array[j] === i ---> 8 === 8 --> true
        found = true;
        break;

outerloop = i = 9; 9 < 10 ---> true
    innerloop = j = 0 to j<array.lengtt(j < 5);
        array[j] === i ---> 5 === 9 --> false
        array[j] === i ---> 2 === 9 --> false
        array[j] === i ---> 4 === 9 --> false
        array[j] === i ---> 8 === 9 --> false
        array[j] === i ---> 10 === 9 --> false
    found = false
        result.push(i):

outerloop = i = 10; 10 < 10 ---> false ,loop will exit
*/