// let result = function(param){
//     return function(para1,param2=param){
//         return para1 + param2;
//     }
// }

// console.log(result(1)(2));

// //param-->1
// //param1 --> 2 ,param2 = 1
// //return 2 + 1 = 3;

// //shallow copy vs deep copy 
// let a = {a:{name:"gokul"},b:{name:"manoj"}};
// let b = a;
// a.a.name = "manoj";
// a.b.name = "jack";
// console.log(a); 
// console.log(b); 

// //deep copy; premitive data type
// let c = "Gokul";
// let d = c;
// c="Ajith";
// console.log(c,d);

//shallow deep ==> array,
let e = [{a:{name:"Jack"},b:{name:"Jill"}},{a:{name:"Ajith"},b:{name:"Gokul"}}];
let f = e;
e[0].a.name = "jill";
f[0].b.name = "jack";
f[1].a.name = "Gokul";
e[1].b.name = "Ajith";
console.log(f);
console.log(e);
