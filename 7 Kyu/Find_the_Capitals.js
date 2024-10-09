/*
    Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
*/
function findCapitals(word) {
    let uppercaseLetters = []

    for(let i = 0; i < word.length; i++) {
        if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
            uppercaseLetters.push(i)
        }
    }

    return uppercaseLetters
}