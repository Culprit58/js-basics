// BOOLEAN EXPRESSIONS
// anything that evaluates to true or false

// Number operators
console.log(10 < 5);
console.log(3 == 3);
console.log(67 >= 676);

// comparison

// loose equality operator == (checks if the values are equal)
console.log(7 == "7");

// loose inequality !=  ... checks if two values are not equal by first attempting to convert them to a common data type
console.log(7 !== "7");

// strict equality === (checks if the value and datatype matches)

console.log(7 === 7);

// strict inequality !== ... checks if two values are not equal by first attempting to convert them to a common data type
console.log(7 !== "7");

// logical operators

// ! bang operators .. does the opposite
console.log(!true);
console.log(!false);
console.log(!"");
console.log(!Boolean(""));

// double bang !!
console.log(!!"");
console.log(!!"false");

// and && .. ampasand .. used to combine mutliple expressions (all expressioms must be true)

const age = 20;
const location = "Nairobi";
const hasADegree = true;

console.log(age >= 18 && location === "Nairobi"); //true
console.log(age >= 29 && location === "Nairobi"); //false

// or || double pipes
console.log(age >= 18 || location === "Nairobi"); //true

console.log(age >= 18 && (location === "Nairobi" || hasADegree == false));

console.log(hasADegree == false);
