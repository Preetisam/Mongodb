//node js is runtime enivorment

console.log("sub")
var a= 20;
var b= 30;
var c=40;
console.warn(a+b+c)

//terminal node index.js
//console.log 

//import { y } from "./app"; //SyntaxError: Cannot use import statement outside a module (node js cant use export and import)
const app = require("./app"); 


// var x = 20;
// let y = 30;
// const z = 40;
// x = 100;
// console.log(x + y + z);

// var x = 20;
// if (x === 20) {
//   console.log("matched");
// }
// var x = "20";
// if (x === 20) {
//   console.log("matched");
// }
// var x = "20";
// if (x == 20) {
//   console.log("matched");
// }
// var x = "20";
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// var x = "20";
// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// var x = "20";
// const arr = [2, 4, 7, 1, 3, 8, 3];
// console.log(arr);
// console.log(arr[0]);

const arr = [2, 4, 7, 1, 3, 8, 3];
console.log(app.y);
console.log(app.x);
