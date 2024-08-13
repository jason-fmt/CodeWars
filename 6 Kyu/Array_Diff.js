/*
    Implement a difference function, which subtracts one list from another and returns the result.
    It should remove all values from list a, which are present in list b keeping their order.

    Ex.
    arrayDiff([1,2,2,2,3],[2]) == [1,3]

    Pseudocode:
    Loop thru all values in a
    Determine if current value(a) is in b
    Yes? Remove value 
    No? Keep value
    Return result
*/
function arrayDiff(a, b) {
    let result = []
    a.forEach(value => {
      if(!b.includes(value))
        result.push(value)
    })
    return result
}