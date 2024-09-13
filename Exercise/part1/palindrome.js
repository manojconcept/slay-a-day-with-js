//------------------------------------------>
function checkPalindrome(language) {
    for (let i = 0; i < language.length/2; i++) {
        if (language[i] !== language[language.length - (i + 1)]) {
            return console.log(false);
        }
    }
    return console.log(true);
}
checkPalindrome("malayalam");
//------------------------------------------>
let result = true;
for (let i = 0; i < "malayalam".length/2; i++) {
    if ('malayalam'[i] !== 'malayalam'['malayalam'.length - (i + 1)]) {
        result = false;
        break;
    }
}
console.log(result);
//------------------------------------------>
const input = "malayalam";
let resultData = input.split("").reverse().join("");
console.log(input === resultData);
//------------------------------------------>

