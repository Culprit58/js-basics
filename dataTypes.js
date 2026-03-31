// DATA TYpes

// (a.) primitive

// 1. strings. .. characters, texts, paragraphs
const firstName = "Enock"; // double quotes
const lastName = "Cheruiyot"; // single quotes
const fullName = `Mike Judges`; // backticks

console.log(typeof fullName);

// string concatenation ... combining of strings using the + operator

console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// string interpolation ... combining of values into strings. always use backticks
console.log(`${firstName} ${lastName}, my age is ${2025 - 2005}`);

// 2. numbers ... whole numbers, negatives, decimals

console.log(typeof -53);
console.log(typeof 79);
console.log(typeof 13.6);

// 3. boolean ... true/falls

console.log(Boolean("h")); // true
console.log(Boolean(``)); // false
console.log(Boolean(0));  // false
console.log(Boolean(-23)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

// 4. objects .. collection of related data represented in key/value pairs separated by commas

const student = {
  name: "Enock Mutai",
  gender: "male",
  age: 20,
  single: true,
  class: {
    cohort: "SDFFT15",
    room: 103,
  },
};

console.log(typeof student); // object

// accessing values in objects i.e lookup

// 1. dot notation
console.log(student.name);
console.log(student.class.room);

// 2. square bracket
console.log(student["age"]);
console.log(student["class"]["room"]);

const car = {
  color: "Black",
  brand: "Mercedes",
  speed: 260,
  isOwned: true,
  owner: {
    name: "Culprit",
    postalAddress: 1000,
  },
};

console.log(car.speed);
console.log(car["owner"]["name"]);
console.log(car["owner"]["postalAddress"]);

// 5. arrays ... list of values (any datatype). we use square brackets
// arrays are considered special type of objects
// uses index (position of value) which always starts with index 0

const people = ["Mutai", "Enock"];
console.log(typeof people); // array
console.log(people[0]); // Mutai
console.log(people[1]); // Enock

// Get the second feature of the Tesla Model 3 car3 >>> console.log(cars[1]["features"][1]);
const cars = [
  {
    make: "Toyota", // String
    model: "Camry", // String
    year: 2022, // Number
    isElectric: false, // Boolean
    features: ["Bluetooth", "Backup Camera", "Cruise Control"], // Array
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    isElectric: true,
    features: ["Autopilot", "Touchscreen", "Over-the-air updates"],
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2020,
    isElectric: false,
    features: ["V8 Engine", "Rear-Wheel Drive", "Convertible"],
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
    isElectric: false,
    features: ["Eco Mode", "Lane Assist", "Heated Seats"],
  },
  {
    make: "Chevrolet",
    model: "Bolt EV",
    year: 2024,
    isElectric: true,
    features: ["Fast Charging", "Regenerative Braking", "Apple CarPlay"],
  },
];

console.log(cars[1]["features"][1]);

// 5. null ... to intentionally indicate there is no value

const laptop = {
  serialNumber: null,
};

console.log(laptop.serialNumber);

// undefined ... no value is provided
const myvariable = "must provide a value";

let myAge;

console.log(typeof myAge);

myAge = 25;
// after assigning
console.log(typeof myAge);
