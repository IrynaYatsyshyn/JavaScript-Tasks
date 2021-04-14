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
//     #experience = 1.2;
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
//     get showExp() {
//         return this.#experience;
//     }
//
//     set setExp(experience) {
//         this.#experience = experience;
//     }
//
//     showSalaryWithExperience() {
//         let salaryWith = this.salary * this.#experience;
//         console.log("Salary with experience -", salaryWith);
//     }
//
//     showWorker() {
//         return `${this.dayRate * this.workingDays * this.#experience}`;
//     }
//
//     sortSalary(workersArr) {
//         let sortSalaries = workersArr.sort(function (a, b) {
//             return a.showWorker() - b.showWorker();
//         });
//         console.log(sortSalaries);
//         for (let i = 0; i < sortSalaries.length; i++) {
//             console.log(sortSalaries[i].fullName + ":" + sortSalaries[i].showWorker());
//         }
//     }
// }
//
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// console.log("-----------------------");
//
// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log("-----------------------");
//
// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// console.log("-----------------------");
//
// let workersArr = [worker1, worker2, worker3];
// worker1.sortSalary(workersArr);

//TASK5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }
//
// class Triangle extends GeometricFigure {
//     constructor(s, h) {
//         super();
//         this.side = s;
//         this.height = h;
//     }
//     getArea() {
//         return this.side * this.height / 2;
//     }
// }
//
// class Square extends GeometricFigure {
//     constructor(a) {
//         super();
//         this.sides = a;
//     }
//     getArea() {
//         return this.sides ** 2;
//     }
// }
//
// class Circle extends GeometricFigure {
//     constructor(r) {
//         super();
//         this.radius = r;
//     }
//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }
// }
//
// function handleFigures(figures) {
//     return figures.reduce(function (sum, figure) {
//         if (figure instanceof GeometricFigure) {
//             console.log(`Geometric Figure: ${figure.toString()} - area: ${figure.getArea()}`);
//             return sum + figure.getArea()
//         }
//         throw new Error('Not a good one!');
//     }, 0);
// }
// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));