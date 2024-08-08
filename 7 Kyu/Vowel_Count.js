/*
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
    let vowelsArr = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    for(let i = 0; i < str.length; i++) {
        if (vowelsArr.includes(str.charAt(i)))
            vowelCount+= 1
    }
    return vowelCount
}