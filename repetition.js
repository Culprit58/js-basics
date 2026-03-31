// REPETITION

// 1. Selection

// a. if statement

const age = 16; // if age is 18 and above it returns 'You can vote'
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// check if person is allowed in staff area
const personA = "student";
const personB = "staff";

if (personB === "staff") {
  console.log("Allowed in staff area");
} else if (personB === "student") {
  console.log("Get tf out of staff area");
} else {
  console.log("check your status");
}

// using if statements, check if a grade is between A to E
// the marks should be between 0 to 100

const marks = 79;

if (marks < 0 || marks > 100) {
  console.log("Invalid");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else {
  console.log("E");
}

// TODO use switch statement to get the grade
// 2. Repetition .. run a piece of code repeatedly until a certain condition is met

// a. while statement
// natural terminating loop

let count = 8;  // viriable that will be used in the condition of the loop

while (count < 18) {   // condition of the loop (keep repeating the code inside the loop until this condition is false)
  console.log(`count ${count}`);
  count = count + 1;
}

console.log(count);

// b. do/while .. runs the code inside do at least once even if the condition if false

let countTwo = 8;
do {
  console.log(`count ${countTwo}`);
  countTwo++;
} while (countTwo < 10);
