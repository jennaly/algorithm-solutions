// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  if (a === []) return [];

  const nums = {};
  let output = [];

  for (const num of a) {
    if (!nums[num]) {
      nums[num] = "true";
      output.push(num);
    }
  }

  return output;
}

// given an array of non negative numbers
// return the array with duplicates removed
// order of sequence stays the same
// new array ok
// cannot sort array

// base case: empty array => return empty array

// iterate through array
// initialize var for output array
// initialize object for hash map
// at each index of the array, check if num at curr. index exists as a key in hash map
// if it does not, add num to hash map and to output array
// return output array at the end

// time complexity of O(n) where n is the length of a (input array)
// space complixity of O(n) because the size of hash map increases with size of input

// if we can't make a new array:
// use Array.splice() method to remove duplicated value in place

function distinct(a) {
  if (a === []) return [];

  const nums = {};

  for (let i = 0; i <= a.length; i++) {
    let num = a[i];

    if (!nums[num]) {
      nums[num] = "true";
    } else {
      a.splice(i, 1);
      i--;
    }
  }

  return a;
}

// time complexity is still O(n) where n === a.length
// space complexity is still O(n) where n is the number of unique values in a
