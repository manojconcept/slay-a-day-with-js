let userData = {
    username:"manojconcept",
    planet:"earth",
    intro:function(){
        return `iam ${this.username} from ${this.planet}`;
    }
}

let userData2 = {
    username:"jack",
    planet:"mars"
}

//accessing a function in an object
console.log(userData.intro())

/**
 intro:function(){
        return `iam ${this.username} from ${this.planet}`;
    }
    it returns iam manojconcept from earth ;
    In userData2 key values are same so far, we have to use same functionality on key intro in userData2
    so which here comes call method.
    call method have arguments one is ref and arguments you want to pass
 */
console.log(userData.intro.call(userData2)); //iam jack from mars

//now we are going to use seperate function for intro
let userData3={
    username:"manoj",
    planet:"mars"
}
let userData4={
    username:"umber",
    planet:"pluto"
}

function intro (para,para1){
    return `iam ${this.username} from ${this.planet} ${para? para : ""} ${para1?`reg:${para1}`:""}`;
}
console.log(intro.call(userData3));
console.log(intro.call(userData4,"i need your help",10001));
//------>apply method
//call and apply gives same functionality but in apply method we pass second argument as array [].
console.log(intro.apply(userData4,["i need your help",10001]));
//------>bind method
//bind method which retrun a copy of function;
console.log(intro.bind(userData4,"i need your help",10001)); //[Function: bound intro]
const result = intro.bind(userData4,"i need your help",10001)();
console.log(result);

console.log(function(){
    return "manoj"
}); //<<-----------adding and semi colon 

(function() {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer);
    })();