// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {
    let wordArray = [];
    for (var i = 0; i < sentence.length; i++) {
        console.log(wordArray += sentence[i] + " ");
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);