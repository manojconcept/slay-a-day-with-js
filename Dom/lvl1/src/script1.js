// console.log("linked");
// console.log(document.body);

// let outerDiv = document.createElement("div")
// outerDiv.classList.add("outer-box")

// let innerDiv = document.createElement("div");
// innerDiv.classList.add("inner-div");

// outerDiv.appendChild(innerDiv);
// document.body.append(outerDiv);

// let inputTag = `<input type="password"/>`
// document.innerHtml = inputTag
// document.body.append(inputTag);

//Target
let increment = document.getElementById("increment-btn");
let reset = document.getElementById("reset-btn");
let decrement = document.getElementById("decrement-btn");

let counterResult = document.getElementById("counter-result");
counterResult.innerText = 0

let count = 0;
increment.addEventListener("click", () => {
    // console.log(count += 1)
    counterResult.innerText = count +=1
    
});

reset.addEventListener("click", () => {
    count = 0;
    counterResult.innerText = 0
    // console.log(count);
}
)
decrement.addEventListener("click", () => {
    // console.log(count -=1);
    if(count>0) counterResult.innerText = count -=1
    
}
)


// reset-btn
// decremnet-btn