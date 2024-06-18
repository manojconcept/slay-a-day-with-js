let users = ["jane","otto","jessi","pichi","jackie"];
let result = [];
users.forEach((u,i) => result.push(users[users.length-(i+1)]));
console.log(result);

