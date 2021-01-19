let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = / world$/i; // Must ends with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape characters

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Match anything except a G or F (^ inside bracket not to be confused with outside)
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;  // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;  // Must occur exactly {m} amount of times between (for example 2 to 4 times)
re = /Hel{2,}o/i;  // Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/; // Word character - alpha numeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-ord character - alpha numeric or _
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match

const str = 'adjkhadsyx';

// Log results

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    };
};

reTest(re, str);