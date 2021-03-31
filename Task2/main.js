//TASK 1
// let x = 1;
// let y = 2;
//
// let res1 = String(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res1);// "12"
// console.log(typeof res1);// "string"
//
// let res2 = Boolean(1) + '2';// Допишіть код, необхідно використовувати змінні x і y
// console.log(res2);// "true2"
// console.log(typeof res2);// "string"
//
// let res3 = Boolean(1) && Boolean(2);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"
//
// let res4 = undefined * x + y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

//TASK2
// let num = prompt("Please, enter your number", "");
// if (num % 2 == 0 && num >= 0) { //even number
//     console.log(num, "= Correct.This number is even.");
// } else { //odd number or with minus
//     console.log(num,"= Wrong.This number is odd or with minus.");
// }
//
// if (num % 7 === 0) { //number is a multiple of 7
//     console.log(num, "= Correct.This number is a multiple of 7.");
// } else { //number isn't a multiple of 7
//     console.log(num, "= Wrong.This number isn't a multiple of 7.");
// }

//TASK3
// let Array = [];
// Array[1] = 8;
// Array[2] = "Good Morning!";
// Array[3] = true;
// Array[4] = null;
// let user = prompt("Please, enter value...", "");
// Array[5] = user;
// console.log(Array.length);
// console.log(Array);
// console.log(Array[4]);
// Array.shift(); //delete 1st element mas
// console.log(Array);

//TASK4
// let cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities);
// let mas = cities.join("*");
// console.log(mas);

//TASK5
// let isAdult = confirm("Welcome!Are you an adult?Are you 18 years old and older?");
// console.log(isAdult);
// let check = prompt("How old are you?");
// if (check < 10) {
//     alert("You are a kid!");
// } else if (check < 18) {
//     alert("You are a teenager!");
// } else {
//     alert("You have reached the age of majority!");
// }

//TASK6
// let a = prompt("Enter first side of the triangle...", "");
// let b = prompt("Enter second side of the triangle...", "");
// let c = prompt("Enter third side of the triangle...", "");
// console.log(a, b, c);
// let p = (Number(a) + Number(b) + Number(c)) / 2;
// console.log(p);
// let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
// console.log(area.toFixed(3));//‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми
// let x = (2 * Number(area) / (Number(a) * Number(b)));
// let y = (2 * Number(area) / (Number(b) * Number(c)));
// let z = (2 * Number(area) / (Number(a) * Number(c)));
// console.log(x);
// console.log(y);
// console.log(z);
// if ( x === 1 || y === 1 || z === 1) {
//     console.log("The triangle is rectangular!");
// } else {
//     console.log("The triangle is not rectangular!");
// }


// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

//TASK7
//Method 1
//let hour = prompt("Enter an hour."); //You can use this string for both methods
// if (hour >= 23 && hour <= 5) {
//     alert("Good night!");
// } else if (hour >= 5 && hour <= 11) {
//     alert("Good morning!");
// } else if (hour >= 11 && hour <= 17) {
//     alert("Good day!");
// } else {
//     alert("Good evening!");
// }

//Method 2
// let hour = new Date().getHours(); //You can use this string for both methods
// switch (true) {
//     case hour >= 23 && hour <= 24 || hour >= 0 && hour <= 5:
//         console.log("Good night!");
//         break;
//     case hour >= 5 && hour <= 11:
//         console.log("Good morning!");
//         break;
//     case hour >= 11 && hour <= 17:
//         console.log("Good day!");
//         break;
//     case hour >= 17 && hour <= 23:
//         console.log("Good evening!");
//         break;
//     default:
//         console.log("Another time");
// }


