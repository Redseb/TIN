class Student {
  constructor(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
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

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const separatedName = name.split(" ");
    this.firstName = separatedName[0];
    this.lastName = separatedName[1];
  }
}

let student1 = new Student("Mikołaj", "Zyzański", 0, [1, 2, 3, 4, 5]);
student1.printFullInfo();
console.log(`Old fullname ${student1.fullName}`);
student1.fullName = "Joe Mama";
console.log(`New fullname ${student1.fullName}`);
console.log(`gradeAverage of student1: ${student1.gradeAverage()}`);
