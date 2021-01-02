// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if it's an array
val = Array.isArray(numbers);
// Get a single value
val = numbers[3];
val = numbers[0];
// Insert into an array
numbers[2] = 100;
// Find an index of a value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// Add onto the end of an array
// numbers.push(250);
// // Add onto the front of an array
// numbers.unshift(120);
// // Take off from the end of an array
// numbers.pop();
// // Take off from the front of an array
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// CONCATENATE ARRAYS

val = numbers.concat(numbers2);

// SORTING ARRAYS

val = fruit.sort();
// val = numbers.sort();

// Use the "compare function"
// val = numbers.sort(function(x, y) {
//     return x - y;
// });

// // Reverse sort

// val = numbers.sort(function(x, y) {
//     return y - x;
// });

// FIND

// function under50(num) {
//     return num < 50;
// }

function over50(num) {
    return num > 50;
}

// val = numbers.find(under50);
val = numbers.find(over50);

// console.log(mixed);

console.log(numbers);
console.log(val);
