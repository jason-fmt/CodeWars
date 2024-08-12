/*
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
    The sum of these multiples is 23.

    Return the sum of all the multiples of 3 or 5 below the number passed in.

    Additionally, if the number is negative, return 0.
*/  
function solution(number){
    // If number < 0 return 0
    if(number < 0) return 0
    
    let multiplesArr = []
    
    // Loop from 1 to (number - 1)
    for(let i = 1; i < number; i++){
    // If the num is a multiple of 3 or 5 add it to a list
      if(i % 3 === 0 || i % 5 === 0) {
        multiplesArr.push(i)
      }
    }
    // Use reduce to get the sum and return the sum
    return multiplesArr.reduce((acc, curr) => acc + curr, 0)
}