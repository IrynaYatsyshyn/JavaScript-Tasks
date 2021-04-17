// TASK1
// let getElemByTag = document.querySelector("div");
// getElemByTag.innerHTML = "Second";
// let getElem = document.getElementById("test");
// getElem.innerHTML = "Second";
//
//TASK2
// document.getElementById("image").src = "cat.jpg";
//
//TASK3
// let element = document.querySelectorAll("#text p");
// for (let i = 0; i < element.length; i++) {
//     alert("Selectors text : " + i + " " + element[i].innerHTML);
// }

//TASK4
//VERSION1
// let Elem = document.getElementById("list");
// alert(Elem.children[0].innerHTML);
// alert(Elem.children[4].innerHTML);
// alert(Elem.children[1].innerHTML);
// alert(Elem.children[3].innerHTML);
// alert(Elem.children[2].innerHTML);

//VERSION2
// const parentEl = document.getElementById("list");
// const first = parentEl.children[0].innerHTML;
// const lastEl = parentEl.children[4].innerHTML;
// const secondEl = parentEl.children[1].innerHTML;
// const fourthEl = parentEl.children[3].innerHTML;
// const thirdEl = parentEl.children[2].innerHTML;

// alert(first);
// alert(lastEl);
// alert(secondEl);
// alert(fourthEl);
// alert(thirdEl);

//TASK5
// let elem = document.querySelector("h1");
// elem.style.background = "green";
//
// let p1 = document.querySelector("p");
// p1.style.fontWeight = "bold";
//
// let p2 = document.getElementById("p2");
// p2.style.color = "red";
//
// let p3 = document.getElementById("p3");
// p3.style.textDecoration = "underline";
//
// let p4 = document.getElementById("p4");
// p4.style.fontStyle = "italic";
//
// let ul1 = document.getElementById("myList");
// ul1.style.writingMode = "vertical-rl";
//
// let span1 = document.querySelector("span");
// span1.style.wordSpacing = "-0.2em";

//TASK6
// let message1 = prompt("Your message1 ...");
// let message2 = prompt("Your message2 ...");
// let input1 = document.getElementById("input1");
// input1.value = message1;
// let input2 = document.getElementById("input2");
// input2.value = message2;
//
// let message1Value = input1.value;
// let message2Value = input2.value;
// input1.value = message2Value;
// input2.value = message1Value;

//TASK7
// document.body.innerHTML =
//     `<main class = "mainClass check item">
//         <div id = "myDiv">
//          <p>First paragraph</p>
//         </div>
//     </main>`;