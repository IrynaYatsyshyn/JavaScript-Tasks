//TASK1
// function checkReg(str) {
//     let regExp = /[A-Z]/;
//     if (regExp.test(str) == true) {
//         alert("String's starts with uppercase character!");
//
//     } else {
//         alert("String's not starts with uppercase character!");
//     }
// }
//
// checkReg("Hello");

//TASK5
// function checkCard(number) {
//     let regExp =/(\-|\s)?(\d{4})(\-|\s)?(\d{4})(\-|\s)?(\d{4})(\-|\s)?(\d{4})/;
//     let result = regExp.test(number);
//     alert(result);
// }
//
// checkCard("2345 5762 4086 4173");

//TASK4
// const str = 'Java Script';
// alert(str.replace(/(\w+) (\w+)/i, '$2, $1'));

//TASK3
// let reg = /i(b+)(d)/i;
// let result = reg.exec("cdbBdbsbz");
// console.log(result);

//TASK2
// function checkEmail(email) {
//     let regExp = /\S+@\S+.\S+/;
//     if (regExp.test(email) == true) {
//         alert("TRUE");
//     } else {
//         alert("FALSE");
//     }
// }
//
// checkEmail("Qmail2@gmail.com");

//TASK6
// function checkEmail(email) {
//     let regExp = /^[A-Za-z0-9]+([-]?\w+)*@\w+([-]?\w+)+(\.\w{2,3})+$/;
//     if (regExp.test(email)) {
//         console.log("Correct email!");
//     } else {
//         console.log("Email is not correct!");
//
//     }
// }
//
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_mail@gmail.com');

//TASK7
// function checkLogin(login) {
//     const regExp = /^[A-Za-z][A-Za-z0-9\.]{1,9}$/;
//     const regNum = /[0-9\.]+/g;
//     const result = regExp.test(login);
//     const resultNum = login.match(regNum);
//     console.log(`${login} is ${result} - ${resultNum}`);
// }
//
// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');