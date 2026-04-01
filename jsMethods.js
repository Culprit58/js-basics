const students = [
  {
    name: "Peter",
    score: 40,
  },

  {
    name: "Jane",
    score: 80,
  },
  {
    name: "Nus",
    score: 75,
  },
];

const filteredStudents = students.filter((student) => { // return students with <=40
  return student.score <= 40;
})

console.log(filteredStudents);


// return scores or name

const studentScore = students.map((student) => {
    return student.score
})

console.log(studentScore);


// search and return 

const foundStudent = students.find((student) =>  {
    return student.name === "Jane"
})

console.log(foundStudent);

// return false coz not all students have 40
const hasPoorScores = students.every((student) =>  {
    return student.score <= 40
})

console.log(hasPoorScores)

// return true if condition is met
const hasLowScores = students.some((student) =>  {
    return student.score <= 40
})

console.log(hasLowScores);

// return total
const total = students.reduce((currentTotal, student) => {
    return student.score + currentTotal
}, 0)

console.log(total)



