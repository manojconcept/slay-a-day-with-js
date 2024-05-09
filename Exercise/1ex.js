 let word = "pneumonoultramicroscopicsilicovolcanoconiosis";
 /*
 input : pneumonoultramicroscopicsilicovolcanoconiosis
 output: p*******************************************s

 step : 1
 slice(start,end<length>) => slice(1,word.length) =>"neumonoultramicroscopicsilicovolcanoconiosi".length

 step : 2
 let firstWord = word[0].padEnd(word.slice(1,word.length).length,"*"); => p*******************************************
 let secondWord = word[word.length-1]; //-> s
 console.log(firstWord+secondWord); // => p*******************************************s


 */


// let inbetweenLength = word.slice(1,word.length).length;
// let firstword = word[0];
// let secondword = word[word.length-1].padStart(inbetweenLength,"*");
// console.log(firstword+secondword);

let firstWord = word[0].padEnd(word.slice(1,word.length).length,"*");
let secondWord = word[word.length-1]; 
console.log(firstWord+secondWord); 

//----------------> loops
//first = word[0] => p; padEnd(length,"what to come") => p**
                    //
//last = word[word.length-1] => s; => padStart(length, "what to come") => **i


let result = word[0]
for (let i = 0;i<word.slice(1,word.length).length-1;i++){
    result +="*";
}
result+=word[word.length-1];
console.log(result);