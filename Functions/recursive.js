function doSomething(n) {
    let result = "";
    if (n === 0) {
      return result;
    }
    result += "I'm doing something.";
    n > 1  && (result += "\n");
    result += doSomething(n - 1); // Accumulate the result from the recursive call
    return result;
  }
  
  console.log(doSomething(3));
