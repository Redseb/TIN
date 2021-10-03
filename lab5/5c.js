//NOTE: Unsure if this is exactly what the task is asking
const Student = {
  firstName: "firstName",
  lastName: "lastName",
  id: 0,
  grades: [0, 0, 0],
  requiredClasses: ["CS", "English", "Maths"],
};

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
    const student = Object.create(Student);
    student.firstName = randomFirstName;
    student.lastName = randomLastName;
    student.id = i;
    student.grades = randomGrades;
    students.push(student);
  }
  return students;
};

const students = studentFactory(3);
console.log(students[0].requiredClasses); //Required classes are set in the prototype of Student
console.log(students);
