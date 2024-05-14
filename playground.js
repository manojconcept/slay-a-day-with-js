function toPrimeEnd(num){
    let result = [];
    let count = 0;
    if(num < 1){
        return false;
    }
    
    for(let i=1; i<=num; i++){
        for(let j=1; j<=num;j++){
            if(num%j === 0){
                count++;
            }
        }
        if(count===2){
            result.push(i);
        }
    }

    return result;
}

console.log(toPrimeEnd(50));