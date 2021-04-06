//TASK1
// let mas = [2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < mas.length; i++) {
//     sum = sum + mas[i];
// }
// console.log("Sum of elements this array - ", sum, "- cycle for");
//
// while (sum <= 5) {
//     sum++;
// }
// console.log("Sum of elements this array - ", sum, " - cycle while");

//TASK2
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even")
//     } else {
//         console.log(i + " is odd");
//     }
// }

//TASK3
// function randArray(k) {
//     let mas = [];
//     for (let i = 0; i < 5; i++) {
//        mas[i] = Math.floor(Math.random() * 500) + 1;
//     }
//     console.log(mas);
// }
// randArray(5);

//TASK4
// function raiseToDegree(a, b) {
//     a = prompt("Enter a number...");
//     b = prompt("Enter a number2...");
//     if (b < 1) {
//         console.log("Isn't integer number!Chose another!");
//     } else {
//         let result = Math.floor(a ** b);
//         console.log("Is integer number!", result);
//     }
// }
//
// raiseToDegree();

//TASK5
// function findMin() {
//     let mas = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < mas) {
//             mas = arguments[i];
//         }
//     }
//     console.log("Minimum value = ", mas);
// }
//
// findMin(12, 14, 4, -4, 0.2); //min = -4

//TASK6
// function findUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = (i + 1); j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return Boolean(findUnique[i]);
//             }
//         }
//     }
//     return true;
// }
//
// console.log(findUnique([1, 2, 3, 5, 3]));// =>false
// console.log(findUnique([1, 2, 3, 5, 11])); // =>true

//TASK7
// function lastElem(mas, number) {
//     for (let i = 0; i <= mas.length; i++) {
//         if (number == null) {
//             console.log(mas.pop());
//         } else {
//             console.log(mas.slice(-number));
//         }
//     }
// }
//
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5], 8));   // [3, 4, 10, -5]

//TASK8
// function firstLetter(str) {
//     let words = str.toLowerCase().split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
//     }
//     return words.join(' ');
// }
//
// console.log("i love java script");
// console.log(firstLetter("i love java script"));
