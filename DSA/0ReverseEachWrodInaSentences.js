function reverseWordsInSentence(sentence) {
    let result = ""; 
    let word = "";   

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1 && char !== ' ') {
                word += char;
            }

            let reversedWord = "";
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }

            if (result.length > 0) {
                result += " "; 
            }
            result += reversedWord;

            word = "";
        } else {
            word += char;
        }
    }

    return result;
}

const sentence = "Hello world this is a test";
const reversedSentence = reverseWordsInSentence(sentence);
console.log(reversedSentence); 