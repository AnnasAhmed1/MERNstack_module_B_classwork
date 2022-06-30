// for (const i = 0; i < 5; i++) {}

// const i = 0;

// console.log(window);

// let obj = {};

// console.log(obj);

// let obj2 = new Object();

// console.log(obj2);

// function MyObj(a){
//     this.name = a;
// }

// let obj3 = new myObj("Ghous");

// console.log(obj3)

// let obj = {};

// obj.name = "Ghous";

// delete obj.name;

// console.log(obj);

// const obj  = {

// }

// obj.name = "Ghous";

// console.log(obj)

// let userInput = prompt("Enter property name");

// let obj = {
//   name: "Ghous",
//   email: "ghous@gmail.com",
//   phone: 021242414,
//   class: "test",
// };

// console.log(obj[userInput])

// let mobiles = {
//   iphone: {
//     iphone13: {
//       model_name: "Iphone 13",
//       price: 500,
//       color: "gold",
//       camera: "10",
//     },
//   },
// };

// let brand = prompt("Enter brand name");
// let mobile = prompt("Enter mobile name");

// console.log(mobiles[brand][mobile]);

// if (mobiles[brand] !== undefined) {
//   if (mobiles[brand][mobile] !== undefined) {
//     console.log(mobiles[brand][mobile]);
//   } else {
//     console.log("Data not found");
//   }
// } else {
//   console.log("Data not found");
// }

// let firstName = "Ghous";

// let lastName = "Ahmed";

// let fullName = "My name is " + firstName + " " + lastName;

// console.log(fullName);

// Template String

// let fullName = `My name is ${firstName} ${lastName} ${2 + 2 }`;

// console.log(fullName);

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// div.setAttribute("class", "main");
// h1.setAttribute("class", "heading");

// let text = document.createTextNode("Hello World");

// h1.appendChild(text);

// div.appendChild(h1);

// let text = "Hello World";

// let div = `
// <div class="main">
// <h1 class="heading">${text}</h1>
// </div>
// `;

// document.getElementById("container").innerHTML = div;

// function abc(a = 2, b = 2) {
//   console.log(a + b);
// }

// abc(2,3);
// abc(2);
// abc();

// function xyz(a, ...b) {
//   console.log(a);
//   console.log(b);
// }

// xyz(3, 5, 7, 9);

// function abc(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// abc(...[2, 3, 5]);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// console.log([...arr2, ...arr]);

// let obj1 = {
//   name: "Ghous",
//   email: "ghous@gmail.com",
// };

// let obj2 = {
//   ...obj1,
//   phone: 343,
//   time: "8:34",
// };

// console.log(obj2);

// function likePost() {
//   alert("Liked");
// }

// let allPosts = [];

// function submitPost() {
//   let val = document.getElementById("post-value");
//   let main = document.getElementById("main");

//   allPosts.unshift(val.value);

//   main.innerHTML = "";

//   for (var i = 0; i < allPosts.length; i++) {
//     main.innerHTML += `
//     <div class="post">
//     <h1>${allPosts[i]}</h1>
//     <div>
//       <button id="like-btn">LIKE</button>
//     </div>
//   </div>
//     `;
//   }
//   val.value = "";
// }

// var email = prompt("Enter your email");
// var a = email && "provided";

// console.log(a);

// let student = {
//   name: "Ahmed",
//   email: "ghous@gmail.com",
//   phone: 245445,
//   s_class: "SAIMS",
//   class_detail: {
//     class_name: "Module b",
//     timing: "5:30",
//     teacher: "Ghous",
//   },
// };

// let { s_class, name, class_detail } = student;
// let { teacher, timing } = class_detail;

// console.log(teacher, timing);

// let arr = ["Ghous", "Ahmed", "Khan"];

// let [fistName, , lastName] = arr;

// console.log(fistName, lastName);

// function generatePass() {
//   let pass = document.getElementById("pass");
//   let arr = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     0,
//     "!",
//     "@",
//     "#",
//     "$",
//     "%",
//     "^",
//   ];
//   let new_pass = "";
//   for (var i = 0; i < 8; i++) {
//     let random = Math.floor(Math.random() * arr.length);
//     new_pass += arr[random];
//   }

//   pass.value = new_pass;
// }

// let arr = [{ name: "Ghous" }, { name: "Ahmed" }, { name: "Khan" }];
// let newData = [];

// for (var i = 0; i < arr.length; i++) {
//   newData.push({
//     ...arr[i],
//     institute: "Jawan Pakistan",
//   });
// }

// console.log(arr);
// console.log(newData);

let arr = [{ name: "Ghous" }, { name: "Ahmed" }, { name: "Khan" }];

let newData = arr.map(function (a, i) {
  return {
    ...a,
    institute: "Jawan Pakistan",
  };
});

console.log(arr, newData);
