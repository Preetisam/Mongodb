

//import { y } from "./app"; //SyntaxError: Cannot use import statement outside a module (node js cant use export and import)
const app = require("./app");  // in node js we can directly export or import the  variable we can do it via module.exports

//node js is runtime enivorment

// console.log("sub")
// var a= 20;
// var b= 30;
// var c=40;
// console.warn(a+b+c)

//terminal node index.js
//console.log 
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
// in node js we can directly export or import the  variable we can do it via module.exports
console.log(app.y);// app.js variables
console.log(app.x);
console.log(app.z());
//filter function
// const arr = [2, 4, 7, 1, 3, 8, 3];
// arr.filter((item) => {
//     console.log(item);
// });
// let result = arr.filter((item) => {
//   return item === 3;
// });
// console.warn(result);//[ 3, 3 ] //[ 3, 3 ]

// const arr = [2, 4, 7, 1, 3, 8, 3];
// let result = arr.filter((item) => {
//   return item >= 4;
// });
// console.warn(result); //[ 3, 3 ]

//core modules are inbuit modeles which are present here they are two types gobal(console.log __filename, __dir) and non gobal (filesystem and buffer)
// what are gobal modules?
//File System
// const fs = require("fs");
// console.log("coding is in the process"); //gobal module
// fs.writeFileSync("hello.txt", "coding is fun");
//fs.writeFileSync("hello2.txt", "coding is fun"); // this will create a new foldr with the name hello txt file and with the codung is fun in the content

// console.log("=>>", __dirname); //it will give the directory where it is locatation of folder =>> E:\anil mongodb
// console.log("->>", __filename); //->> E:\anil mongodb\index.js it will give the directory where it is locataction of file name

//2nd method dirctly import of file system

const fs = require("fs").writeFileSync;
fs("abc.txt", "helo world");

