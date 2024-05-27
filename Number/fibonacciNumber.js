function fibonacciNumberTo(num) {
    let a = 0;
    let b = 1;
    let c;
    let result = [];
    for (let i = 1; i < num; i++) {
        c = a+b;
        a = b;
        b = c;

    }

    return result;
}


console.log(fibonacciNumberTo(5));

