// Array.map(callBackfunction,thisarg);

const USERS = ["puvi","mathi","manoj","josy","sudharsun"];
function userSayHello(element,index,array){
    return `${element} Hello index of ${index}`;
}
let result = USERS.map(userSayHello);
console.log(result);

let users1 = ["puvi","mathi","manoj","josy","sudharsun"].map((element,index,array)=>`${element} index of ${index} ${array}`)
console.log(users1);

let users2 = ["puvi","mathi","manoj","josy","sudharsun"].map(
    function names(ele,ind,arr){
        return arr
    }
)
console.log(users2);


let numbers = [1,2,3,4,5].map((element,index,array)=>element * element);
console.log(numbers);
//output => [1,4,9,16,25];

