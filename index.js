/*
*   Return the length of the longest word in the provided sentence.
*   ReturnYour response should be a number.
*/

function findLongestWordLength(str) {
    let strArray = str.split(' ')
    let bigWord = strArray[1]
    strArray.forEach(word => {
        if (word.length >= bigWord.length) {
            bigWord = word
        }
    })
    console.log(bigWord)
    return bigWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("The greatest glory in living lies not in never falling, but in rising every time we fall"));
console.log(findLongestWordLength("The way to get started is to quit talking and begin doing"));
console.log(findLongestWordLength("If life were predictable it would cease to be life, and be without flavor"));
console.log(findLongestWordLength("Life is what happens when you're busy making other plans"));
console.log(findLongestWordLength("When you reach the end of your rope, tie a knot in it and hang on"));
console.log(findLongestWordLength("Don't judge each day by the harvest you reap but by the seeds that you plant"));
console.log(findLongestWordLength("It is during our darkest moments that we must focus to see the light"));
console.log(findLongestWordLength("Never let the fear of striking out keep you from playing the game"));
console.log(findLongestWordLength("Success usually comes to those who are too busy to be looking for it"));
console.log(findLongestWordLength("You miss 100% of the shots you don't take"));

/*
*   Only returns one word and includes grammatical marks, also multiple words could be of the same length.
*   Depends where they end up in the string
*   Technically passes original test given
*/