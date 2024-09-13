//>>>Traditional Function 

//--function,name,(parameters),{return statements}

//>>>Arrow Function


//>>>Immediately Invoked Function Expression
console.log(typeof (function darlaCalling(parm = "jane jane where are you !"){
    return parm;
})("jane, I found you").length);


//>>>Anonymous Function
function lll(){
    return function(){
        return "hello";
    };
}

const callingBell = function(){
    return "ding dong";
}

console.log(callingBell());

//Arrow function
const dingoBow = () => "Arrow function";
console.log(dingoBow());

const dingoBowBow = () => {
    let i = 2;
    return i+1;
};
console.log(dingoBowBow());


// function nameCalling(name){
//     console.log(name); // wick
//     return name;
// }

// let fullName = nameCalling("wick") + " hello";
// console.log(fullName);


let name1 = "donkey";
let name2 ="monkey";

console.log(name1,console.log(name2,console.log(name1))); // donkey undefined

//step 1 => donkey
//step 2 => monkey ---> undefined
//step 3 => donkey ---> undefined
let name3 = " javascript";
function isPhone(par="ring ring",par1){
   return par + par1 + name3
}

console.log(isPhone("","phone"));

// let result = isPhone("ring ring");

// console.log(result[0].padEnd(result.length,"*"));

// ==================> /// "kkkk lll a cc bbb" ---> 4k3l1a2c3b
function findingDistance(parm){
    let result = "";
    let count = 1;
    for(let i=0;i<parm.length;i++){
        if(parm[i] === parm[i+1]){
            count++;
        }else{
            result += count;
            result += parm[i];
            count = 1;
        }
    }
    return result;
}

console.log(findingDistance("kkkklllaccbbb"));
    

console.log(duckCalling("quak quak")); // quak quak

function duckCalling(parm="bow bow"){
    return parm ;
}


