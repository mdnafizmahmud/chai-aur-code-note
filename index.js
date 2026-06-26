// Type of memory => Stack, Heap
// Stack (Primitive), Heap (Non-Primitive)

//
// const tinderUser = new Object(); // single turn objects
// const tenderUser = {}; // non single turn objects

// const obj1 = { 1: "a", 2: "b" };
// const obj3 = { ...obj1 }; // ... spread operator
// console.log(obj3);

// const course = {
//   courseName: "js in hindi",
//   courseInstractor: "Hitesh",
// };
// const { courseInstractor: instractor } = course; // create object distracture
// console.log(instractor);

// function loginUserMessage(userName = "Guast User") {
//   // when by default name used then not show if condition message
//   if (!userName) {
//     return `Please enter your name`;
//   }
//   return `${userName} is logged in`;
// }
// console.log(loginUserMessage());

// {} => scope; all programing language under relative this scope

// browser under first object is window objects
// this => mean current context

// Immediately Invoked Function Expressions (IIFE)
// (function coffee() {
// // named IIFE
// console.log("BD connected");
// })();

// ((name) => {
// // unnamed IIFE
// console.log(`BD connected two ${name}`);
// })("nafiz");

// {"code data"} jsBox  => Global EC => Global Execution Context / Function Execution Context / Eval Execution Context

//  {"code data"} jsBox  => Memory Creation Phase / Execution Phase

// ========================================
// let val1 = 10;
// let val2 = 5;
// function addNum() {
//   let total = val1 + val2;
//   return total;
// }
// let result1 = addNum(val1, val2);
// let result2 = addNum(10, 2);
// =======================================

// 1.Global Execution =< 1st locked done is (this) under [100% hobei]

// 2. Memory Phase =>|
// val1 => undefined
// val2 => undefined
// addNum => defined
// result1 => undefined
// result2 => undefined   |>

// 3.Execution Phase =>
// val1 <= 10
// val2 <= 5

// golobal execution under {
// three();
// two();
// one();
// } => this execution under (lifo) named concep so 1st execut hobe last and last execute hobe 1st

// one equal (=) use for assing value
// two equal (==) use for only  value check
// three equal (===) use for type or value check

// one key multiple checked, so you use switch case
// when any value match; then we don't use break; then (accept default) match value after all value execute kore dibe

// const month = 3;
// switch (month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("february");
//     break;
//   case 3:
//     console.log("march");
//     break;

//   default:
//     console.log("default case June");
//     break;
// }
// const monthText = "feb";
// switch (monthText) {
//   case "jan":
//     console.log("january");
//     break;
//   case "feb":
//     console.log("february");
//     break;

//   default:
//     console.log("default case June");
//     break;
// }

// falsy value => <| false, 0, -0, BigInt 0n, "", null, undefined, NaN |>
// some truthy value => <| "0", "false", " ", [], {}, function(){} |>

// const emtyObj = {};
// if (Object.keys(emtyObj).length === 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefind
// let val1;
// // val1 = 5 ?? 10;
// // val1 = null ?? 10;
// val1 = undefined ?? 15;
// console.log(val1);

// Terniary Operator
// // condition ? true : false;
// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

// for
// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(element);
//   for (let x = 0; x < 5; x++) {
//     const element = x;
//     console.log(element);
//   }
// }

// break and continue
// for (let index = 1; index < 10; index++) {
//   if (index == 5) {
//     console.log("Detected 5");
//     break; //
//   }
//   console.log(`Value of i is ${index}`);
// }

// for (let index = 1; index < 10; index++) {
//   if (index == 5) {
//     console.log("Detected 5");
//     continue;
//   }
//   console.log(`Value of i is ${index}`);
// }

// While and do while loop

// while
// let index = 0;
// while (index < 10);
// {
//   console.log(`value of index is ${index}`);
//   index = index + 2;
// }

// let myArray = ["rohim", "korim", "jafor", "fokrul"];
// let arr = 0;
// while (arr < myArray.length) {
//   console.log(`value is ${myArray[arr]}`);
//   arr++;
// }

//  do while
// let score = 11;
// do {
//   console.log(`score is ${score}`); // 1st result execute
//   score++;
// } while (score <= 10); // condition last check

// for of
// const arr = [1, 2, 3, 4, 5, 6];

// for (const num of arr) {
// console.log(num);
// }

// const greeting = "hello world";
// for (const greet of greeting) {
// console.log(`Each char is ${greet}`);
// }

// Maps  // only unipue value pass kora

// const map = new Map();
// map.set("BD", "Bangladesh");
// map.set("IN", "India");
// map.set("Fr", "France");
// map.set("BD", "Bangladesh");
// console.log(map);

// for of
// for (const [key, value] of map) {
//   // now work for object
//   console.log(key, `:`, value);
// }

// let myObjects = {
//   name: "nafiz",
//   courch: "YouTube",
//   teacher: "Hitesh",
// };

// for in
// for (const key in myObjects) {
//   console.log(`${key} = ${myObjects[key]}`);
// }

// const arr = [1, 2, 3, 4, 5, 6];
// for (const key in arr) {
//   console.log(arr[key]);
// }

const coding = ["HTML", "CSS", "JS", "TS", "REACT.JS", "NEXT.JS"];

// const value = coding.forEach((item) => {
//   return item;
// });
// console.log(value);

// const userCode = coding.filter((cd) => {
//   return cd;
// });
// console.log(userCode);

// multiple loop usable and 1st loop er value 2nd loop e puss hobe
// const newCode = coding
//   .map((cd) => cd + " JS")
//   .map((cd) => cd + " Suuuuuui")
//   .filter((cd) => cd === "TS JS Suuuuuui");
// console.log(newCode);

// reduce
// const num = [1, 2, 3, 4];
// const myNum = num.reduce((accumulator, currentValue) => {
//   console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0); // 0 this value your choice for needs
// console.log(myNum);

// const course = [
//   {
//     courseName: "mobile app development",
//     price: 3999,
//   },
//   {
//     courseName: "React.js development",
//     price: 2999,
//   },
//   {
//     courseName: "JavaScript course",
//     price: 6999,
//   },
//   {
//     courseName: "Omnifood Projects course",
//     price: 4999,
//   },
// ];

// const courses = course.reduce((acc, item) => {
//   console.log(`acc: ${acc} and currval: ${item.price}`);
//   return acc + item.price;
// }, 0);
// console.log(courses);
