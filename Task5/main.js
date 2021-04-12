//TASK1
// function propsCount(currentObject) {
//     console.log(Object.keys(mentor));
// }
//
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development",
//     name: "Ira"
// };
// propsCount(mentor); //4

//TASK2
// let student = {
//     name: "Ira",
//     surname: "Yatsyshyn",
//     course: "JS fundamental",
//     position: "Web-Developer",
//     company: "SoftServe"
// };
//
// function showProps(obj) {
//     console.log(Object.keys(student));
//     console.log([student]);
// }
//
// showProps(student);

//TASK3
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     showFullName() {
//         console.log(this.name, this.surname);
//     }
// }
//
// class Student extends Person {
//     constructor(name, surname, year, father) {
//         super(name, surname);
//         this.year = year;
//         this.father = father;
//     }
//
//     showFullName(middleName) {
//         console.log(this.year);
//         console.log(this.father);
//     }
//
//     showCourse() {
//         let now = 2021;
//         let result = now - this.year;
//         console.log("Current course: " + result);
//     }
// }
//
// let student1 = new Student("Petro", "Petrenko", 2015, "Petrovych");
// console.log(student1.name, student1.surname, student1.year, student1.father);
// console.log(student1.showCourse());

//TASK4
// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//
//     showSalary() {
//         let salary = this.dayRate * this.workingDays;
//         this.salary = salary;
//         console.log(salary + "$");
//     }
//
//     showExp() {
//         let experience = 1.2;
//         this.experience = experience;
//         console.log(experience);
//     }
//
//     set setExp(value) {
//         let experience = 1.5;
//         this.experience = experience;
//         return value;
//     }
//
//     showSalaryWithExperience() {
//         let salaryWith = this.salary * this.experience;
//         console.log("Salary with experience -", salaryWith);
//     }
// }
//
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: ");
// worker1.showExp();
// console.log(worker1.setExp = 1.5);
// worker1.showSalaryWithExperience();
//
// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: ");
// console.log(worker2.setExp = 1.5);
// worker2.showSalaryWithExperience();
//
// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: ");
// console.log(worker3.setExp = 1.5);
// worker3.showSalaryWithExperience();
//
// console.log("Sorted salary:");
//
// const workers = [worker1 = 690, worker2 = 1584, worker3 = 1000.5];
// workers.sort(function (a, b) {
//     return a - b;
// });
// console.log(workers);

//TASK5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }
//
// class Triangle extends GeometricFigure {
//     getArea() {
//         let a = 4;
//         let b = 5;
//         let c = 6;
//         let p = (Number(a) + Number(b) + Number(c)) / 2;
//         let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//         console.log("Triangle area: ", area.toFixed(3));
//     }
// }
//
// class Square extends GeometricFigure {
//     getArea() {
//         let a = 7;
//         let area = a ** 2;
//         console.log("Square area:", area);
//     }
// }
//
// class Circle extends GeometricFigure {
//     getArea() {
//         let r = 5;
//         let area = 3.14 * r ** 2;
//         console.log("Circle area: ", area);
//     }
// }
//
// let resultTriangle = new Triangle();
// resultTriangle.getArea();
//
// let resultSquare = new Square();
// resultSquare.getArea();
//
// let resultCircle = new Circle();
// resultCircle.getArea();