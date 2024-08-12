/*
    Write a function that returns an array containing both the minimum and maximum number of the given list/array.

    All arrays/lists will always have at least one element, so you don't need to check the length. 
    Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
    
    Examples:
    [1,2,3,4,5] --> [1,5]
    [2334454,5] --> [5,2334454]
    [1]         --> [1,1]
*/
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }