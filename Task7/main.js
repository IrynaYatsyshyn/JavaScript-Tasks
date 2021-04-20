//TASK1
// let newWin = window.open("about:blank", "hello", "width=300,height=300");
// newWin.document.write("Hello JavaScript world!");
//
// function resize() {
//     newWin.window.resizeTo(500, 500);
// }
// setTimeout(resize, 2000);
//
// function move() {
//     newWin.window.moveTo(200, 200);
// }
// setTimeout(move, 4000);
//
// function closed() {
//     newWin.window.close();
// }
// setTimeout(closed, 6000);

//TASK2
// function changeCSS(){
//     let btn = document.getElementById('text');
//     btn.style.color = "orange";
//     btn.style.fontSize = "20px";
//     btn.style.fontFamily =  "Comic Sans MS";
// }

//TASK3
// function changeBackground() {
//     document.body.style.backgroundColor = "blue";
// }
//
// function changeBackground2() {
//     document.body.style.backgroundColor = "pink";
// }
//
// function changeColor1() {
//     document.body.style.backgroundColor = "brown";
// }
//
// function changeColor2() {
//     document.body.style.backgroundColor = "white";
// }
//
// function changeByMouse() {
//     document.body.style.backgroundColor = "yellow";
// }
//
// function changeByMouse2() {
//     document.body.style.backgroundColor = "white";
// }

//TASK4
// btn.addEventListener("click", chooseElement)
//
// function chooseElement() {
//     let findElement = document.getElementById("select");
//     findElement.remove(findElement.selectedIndex);
// }

//TASK5
// let btn = document.getElementById("btn");
// btn.addEventListener("click", clickFunc);
// btn.addEventListener("mouseover", overFunc);
// btn.addEventListener("mouseout", outFunc);
//
// function clickFunc() {
//     document.getElementById("text").innerHTML += "I was pressed!";
// }
//
// function overFunc() {
//     document.getElementById("text").innerHTML += "Mouse on me!";
// }
//
// function outFunc() {
//     document.getElementById("text").innerHTML += "Mouse is not on me!";
// }


//TASK6
// function size() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     let windowSize = ('Width: ' + width + ',' + ' Height: ' + height);
//     document.getElementById("size").innerHTML = windowSize;
// }
//
// window.addEventListener("resize", size);

//TASK7
const citiesMas = {
    'ukr': ["Lviv", "Kyiv", "Ternopil"],
    'usa': ["New-York", "Chicago", "Boston"],
    'ger': ["Hamburg", "Berlin", "Munich"],
}

function new_option() {
    city.innerHTML = "";
    let country = countries.value;
    for (let i = 0; i < citiesMas[country].length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = citiesMas[country][i];
        city.appendChild(opt);
    }
}

let name = document.querySelector("p");
function selectText() {
    name.innerHTML = "";
    name.innerHTML = countries.options[countries.selectedIndex].text + "," + "\n" + city.options[city.selectedIndex].text;
}

let countries = document.getElementById("country");
countries.addEventListener("change", new_option);
countries.addEventListener("change", selectText);

let city = document.getElementById("cities");
city.addEventListener("change", selectText);


