/*
    Create a function that takes a list of non-negative integers and strings
    Return a new list with the strings filtered out.

    Ex. 
    filter_list([1,'a','b',0,15]) == [1,0,15]
    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function filter_list(list) {
  return list.filter(element => typeof element !== 'string')
}