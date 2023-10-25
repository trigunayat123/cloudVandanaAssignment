function reverseWordsInSentence(sentence) {
    function reverseWord(word) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    }

    const words = [];
    let word = '';
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                word += sentence[i];
            }
            words.push(reverseWord(word));
            word = '';
        } else {
            word += sentence[i];
        }
    }

    let reversedSentence = '';
    for (let i = 0; i < words.length; i++) {
        reversedSentence += words[i];
        if (i !== words.length - 1) {
            reversedSentence += ' ';
        }
    }

    return reversedSentence;
}

const inputSentence = "Saurabh TRigunayat loves competitive coding";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed sentence:", reversedSentence);
