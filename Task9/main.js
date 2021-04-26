//TASK1
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x,y,d,...z ]= arr;
// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log(z); // [Bob]

//TASK2
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };
// let {names, ages} = data;
// let [name1, name2, name3, name4]= data.names;
// let [age1, age2, age3, age4]= data.ages;
// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26

//TASK3------------------------------------------
// function mul(param) {
//     if (param == Number) {
//         console.log(mul(param));
//     } else {
//         console.log(param);
//     }
// }
//
// mul(1, "str", 2, 3, true); // 6
// mul(null, "str", false, true); // 0

///////////////////////////////////////////////
//TASK4
let server = {
    data: 0,
    convertToString: (callback) => {
        callback(( () => {
            return this.data + "";
        })(this));
    }
};
let client = {
    server: server,
    result: "",
    calc:(data) => {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: () => {
        return ((callback) =>{
            this.result = callback();
        })(this);
    }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//TASK5
//let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// 	console.log(map.get(2)); // "span"
