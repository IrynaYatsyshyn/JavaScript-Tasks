//TASK1
// function calcRectangleArea(width = 10, height = 5) {
//     let s = width * height;
//
//     debugger;
//     if (typeof width == "number" && typeof height == "number") {
//         console.log(s);
//     } else {
//         console.log("Write a number!");
//     }
// }
//
// calcRectangleArea();

//TASK2
// Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати
// в модальному вікні помилки у випадку,коли:
// - юзер ввів порожню стрічку (наприклад “Thefieldisempty! Please enter your age”),
// - нечислове значення
// - вік юзера менше 14 років.
//     В іншому разі юзер отримує доступ до перегляду фільму.
//     В блокові catch передбачити виведення назви і опису помилки.

// function checkAge() {
//     let age = prompt("Enter your age...", "");
//     console.log(age);
//     if (age === "") {
//         throw new Error("The field is empty! Please enter your age");
//     } else if (!parseInt(age)) {
//         throw new Error("This is not a number!");
//     } else if (age <= 14) {
//         throw  new Error("You are too small!");
//     }
//     return age;
// }
//
// try {
//     let result = checkAge();
//     console.log("Your age:", result, "-Congratulations, you have got access to the movie!");
//
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }

//TASK3
// class MonthException {
//     constructor(message) {
//         this.name = "MonthExceptions";
//         this.message = message;
//     }
// }
//
// function showMonthName(month) {
//     month = month - 1;
//     const monthNames = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"];
//     if (monthNames[month] !== undefined) {
//         return monthNames[month];
//     } else {
//         throw new Error("Incorrect month number!");
//     }
// }
//
// try {
//     console.log(showMonthName(16));
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }

//TASK4
// function showUser(id) {
//     if (id < 0) {
//         throw new Error(id + " - Choose another ID!ID must be positive!")
//     }
//     return {id: id};
// }
// function showUsers(ids) {
//     let array = [];
//     ids.filter(function (id) {
//         try {
//             let result = showUser(id);
//             console.log(result);
//             array.push(result);
//         } catch (exceptions) {
//             console.log(exceptions.name);
//             console.log(exceptions.message);
//         }
//     });
// }
//
// showUsers([7, -12, 22, 44]);

