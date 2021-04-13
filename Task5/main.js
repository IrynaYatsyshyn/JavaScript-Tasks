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
class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    getArea() {
        let a = 4;
        let b = 5;
        let c = 6;
        let p = (Number(a) + Number(b) + Number(c)) / 2;
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        console.log("Triangle area: ", Math.round(area));
    }
}

class Square extends GeometricFigure {
    getArea() {
        let a = 7;
        let area = a ** 2;
        console.log("Square area:", area);
    }
}

class Circle extends GeometricFigure {
    getArea() {
        let r = 5;
        let area = Math.PI * r ** 2;
        console.log("Circle area: ", area);
    }
}

let resultTriangle = new Triangle();
resultTriangle.getArea();

let resultSquare = new Square();
resultSquare.getArea();

let resultCircle = new Circle();
resultCircle.getArea();
console.log("-----------------------");

function handleFigures(figures) {
    return figures.reduce(function (sum, figure) {
        if (figure instanceof GeometricFigure) {
            console.log(`Geometric Figure: ${figure.toString()} + ${figure.getArea()}`);
            return sum + figure.getArea();
        }
        throw new Error('Not a good one!');
    }, 0);
}

let figures = [new Triangle(),new Square(), new Circle()];
console.log(handleFigures(figures));



