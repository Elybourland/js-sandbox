// // var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Initialize Var

// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with a number

// // Multi word variables

// var firstName = 'John'; // Camel case - preferred way
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname; // All lowercase is not recommended

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
// const name = 'John';
// console.log(name);

// Can not reassign with const
// name = 'Sara';

// Have to assign a value
// const greeting;

const person =  {
    name: 'John',
    age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);