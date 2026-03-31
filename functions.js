// FUNCTIONS
/**
 * funtions .. reusability, blocks of code organized together
 *              and can be called any time
 *
 * parameters .. variables that are used inside the function paranthesis
 * arguments .. values we passed to funstion when we call/invoke them
 */

// funstion declaration
function calculateTax(parameters) {
  console.log("calculate tax");
}

function greet(name, time) {
  return `Good ${time}, ${name}`;
  console.log("Am I working?");
}
// greet
console.log(greet("Enock", "morning"));

// return keyword .. we one in scope/block of code
//                .. stops execution of a function

function sum(x, y) {
  if (typeof x === "number" || typeof y === "number") {
    return x + y;
  } else {
    return "x and y must be a number";
  }
}

/**
 *  first class functions .. treated like other values (string, number)
 *                           (a.) Arrow funtions
 *                           (b.) Callback functions
 *   Must declare a function before calling it
 */

// Arrow functions

const sayHi = (parameters) => {
  //function body
};

// we have declared an arrow function
const add = (x, y) => {
  return x + y;
};

console.log(add(10, 4));

// TODO function hoisting
// TODO default values for functions

const calculate = function perimeter(l, w) {
  return l * 2 + w * 2;
};
console.log(calculate(7, 4));

function greeting(name) {
  console.log(`Good morning, ${name}`);
}

// assignment expression
const person = "Enock";

// lookup expression

greeting(person);

greeting("Culprit");

function run(greet) {
  console.log("Running");
  greet("Enock");
}

run(function () {
  console.log("Get to work!!");
});
