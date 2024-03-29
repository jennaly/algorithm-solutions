// 8 kyu
// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// given an operation in the form of a string, 2 values in the form of numbers
// return the result of the two numbers after applying the operation
// will the two numbers always be present?
// will the operations only pertain to +,-,*,/ ?
// will there ever be an empty string?

//write conditionals that account for each case
//i.e, if the operation is "+", return the sum of value1 and value2
//use switch/case for readability

function basicOp(operation, value1, value2) {
    switch (operation) {
        case ("+"): return value1 + value2;

        case ("-"): return value1 - value2;

        case ("*"): return value1 * value2;

        case ("/"): return value1 / value2;

        default: return 0;
    } 
}
