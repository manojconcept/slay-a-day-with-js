//function along with lexical scope bundled together formes a closer

function x(){
    let a = 1;
    function y(){
        console.log(a);
    }
    return y;
}

console.log(x()); //[Function: y]
let z = x(); //where it will return whole function y but it is bundled with lexical scope
console.log(x()()); //it gives output 1 and undefined, undefined because function that returns nothings