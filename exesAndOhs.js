//Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let split = str.toLowerCase().split('');
    let exes = split.filter(letter => letter === 'x');
    let ohs = split.filter(letter => letter === 'o');
    if (exes.length === ohs.length) {
      return true
    } else {
      return false
    }
}

