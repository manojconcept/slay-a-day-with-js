function squarePattern(row){
    let result = "";
    for(let i = 1 ; i<=row;i++){
        for(let j=1;j<=row;j++){
            result += j;
        }
        i<row && (result += "\n");
    }
    return result;
}
console.log(squarePattern(10));



