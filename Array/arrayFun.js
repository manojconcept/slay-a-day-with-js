const array = ["manoj","corgi","batman","x-men","double-star"];
const array2 = ["puvi","mathi","superman","cyborg","avater"];

function storyReturn(/*rest*/...otherinfo){
    return `i like ${otherinfo}`;
}

console.log(storyReturn(/*spread*/...array));