function Student(firstName, lastName, id, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
  this.grades = grades;

  this.gradeAverage = function () {
    let sum = 0;
    this.grades.forEach((grade) => {
      sum += grade;
    });
    return sum / this.grades.length;
  };

  this.printFullInfo = function () {
    console.log(
      `STUDENT ${this.firstName} ${
        this.lastName
      } | Grade Average:${this.gradeAverage()}`
    );
  };
}

let student1 = new Student("Mikołaj", "Zyzański", 0, [1, 2, 3, 4, 5]);
student1.printFullInfo();
let student2 = new Student("Tom", "The Man", 1, [5, 5, 5, 5]);
student2.printFullInfo();
