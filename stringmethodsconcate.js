// String Methods & Concatenation

const firstName = 'William';
const lastName = 'Johnson';
const age = 38;
const str = 'Hello there my name is Ely'
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append

val = 'Ely ';
val += 'Bourland';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping with back slash

val = 'That\'s awesome, I can\'t wait';

// Length

val = firstName.length;

// Concat()

val = firstName.concat(' ', lastName);

// Change case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];


// indexOf()

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()

val = firstName.charAt('2');

// Get last character

val = firstName.charAt(firstName.length - 1);

// substring()

val = firstName.substring(0, 4);

// slice

val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()

val = str.split(' ');
val = tags.split(',');

// replace()

val = str.replace('Ely', 'Jeremiah');

// includes()

val = str.includes('Hello');
val = str.includes('foo');


console.log(val);