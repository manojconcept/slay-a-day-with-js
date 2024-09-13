
console.log("Revese odd Loop");
for (let i = 1; i < 10; i += 2) {
    console.log(i);
}

console.log("Revese even Loop");
for (let i = 2; i < 10; i += 2) {
    console.log(i);
}

/*
reverse odd 
reverse even
*/
console.log("Revese even Loop");
for (let i = 5; i > 0; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("Revese even Loop");
for (let i = 5; i > 0; i--) {
    i % 2 !== 0 && console.log(i);
}

console.log("Revese odd Loop");
for (let i = 5; i > 0; i -= 2) {
    console.log(i);
}

