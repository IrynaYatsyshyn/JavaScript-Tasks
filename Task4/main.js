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




//-------------------------------------------------------
//TASK3
// class MonthException {
//     constructor(message) {
//         name = "MonthExceptions";
//     }
// }
//
// function showMonthName(month) {
//     const monthNames = ["", "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"];
//     console.log(monthNames[16]);
//     if (monthNames >= 13) {
//         throw new Error("Incorrect month number!");
//     }
//     return monthNames;
// }
//
// showMonthName();
//
// try {
//     console.log("correct!");
//
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }
