/**  OBJECTS
 * used to store collection of related data consisting of key value pairs
 * values can be of any datatype
 * we use curly brackets .. {}
 */
const car = {
  color: "Black",
  brand: "BMW",
  speed: 260,
  year: 2018,
  preOwned: false,
  isElectric: false,
  owner: {
    firstName: "Enock",
    lastName: "Mutai",
    // special key (very rare) -> we are not using the camelCase naming
    // convention
    ["full name"]: "Enock Mutai",
  },
};

// accessing values inside an object
// 1. use dot notation
console.log(car.preOwned);
console.log(typeof car.owner);

// 2. square brackect notation
//    also used when dealing with special keys
console.log(car["year"]);
console.log(car[`owner`]["full name"]);

// assignment
const brandkey = "brand";

// lookup
console.log(brandkey);

// access values dynamically
console.log(car[brandkey]);

// add more properties (key/value pairs)
console.log(car.isManual);
car.isManual = true;
console.log(car);
console.log(car.isManual);
car["driveModes"] = ["sport", "comfort", "racemode"];
console.log(car.driveModes);

// update properties
console.log(car.year);
car.year = 2025;
console.log(car.year);

// deleting properties
console.log(car.year);
delete car.year;
console.log(car.year);
