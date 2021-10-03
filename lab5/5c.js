//NOTE: Unsure if this is exactly what the task is asking
//Prototype is accessed through class, not initializer?
//Trying to access prototype of an anonymous object does not work
class Student {
  constructor(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
  }
}
Student.prototype.requiredClasses = ["CS", "English", "Maths"]; //Classes each student should take

const studentFactory = (n) => {
  //Create n students
  const firstNames = ["Bob", "Joe", "Tom"];
  const lastNames = ["Kowalski", "Smith", "Guy"];
  let students = [];
  for (let i = 0; i < n; i++) {
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomGrades = [
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
    ];
    students.push(
      new Student(randomFirstName, randomLastName, i, randomGrades)
    );
  }
  return students;
};

const students = studentFactory(3);
console.log(students[0].requiredClasses); //Required classes are set in the prototype of Student
console.log(students);
