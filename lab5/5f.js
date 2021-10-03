class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const separatedName = name.split(" ");
    this.firstName = separatedName[0];
    this.lastName = separatedName[1];
  }
}

//Showing that the setters and getters work
const person = new Person("Miko", "Zyzanski");
console.log(person);
console.log(person.fullName);
person.fullName = "Tom Person";
console.log(person.fullName);

//Rewritten student class from task E to extend Person
class Student extends Person {
  constructor(firstName, lastName, id, grades) {
    super(firstName, lastName);
    this.id = id;
    this.grades = grades;
  }

  gradeAverage = () => {
    let sum = 0;
    this.grades.forEach((grade) => {
      sum += grade;
    });
    return sum / this.grades.length;
  };

  printFullInfo = () => {
    console.log(
      `STUDENT ${this.firstName} ${
        this.lastName
      } | Grade Average:${this.gradeAverage()}`
    );
  };

  get gradeAverage() {
    return this.gradeAverage;
  }
}

const student = new Student("Miko", "Zyzanski", 0, [1, 2, 3, 4]);
console.log(student);
