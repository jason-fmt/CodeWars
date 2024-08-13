/*
    Given an array of integers, find the one that appears an odd number of times.
    There will always be only one integer that appears an odd number of times.

    Ex.
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
*/
function findOdd(intArray) {
    let frequency = {}
    // Loop through elements in the array
    intArray.forEach(value => {
    // Determine if value exists in the key/value pair
        if(frequency[value]) {
            // Yes? Increment value
            frequency[value] += 1
        }else {
            // No? Add element as the key and value as 1
            frequency[value] = 1
        }
    })
    
    let oddNumber = null
    // Determine which value is odd
    Object.entries(frequency).forEach(([key, value]) => {
        if(value % 2 !== 0) {
            oddNumber = Number(key)
        }
    })
    // Return value
    return oddNumber
}