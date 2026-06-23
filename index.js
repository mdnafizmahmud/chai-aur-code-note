// Type of memory => Stack, Heap
// Stack (Primitive), Heap (Non-Primitive)

//
const tinderUser = new Object(); // single turn objects
const tenderUser = {}; // non single turn objects

const obj1 = { 1: "a", 2: "b" };
const obj3 = { ...obj1 }; // ... spread operator
// console.log(obj3);

const course = {
  courseName: "js in hindi",
  courseInstractor: "Hitesh",
};
const { courseInstractor: instractor } = course; // create object distracture
// console.log(instractor);

function loginUserMessage(userName = "Guast User") {
  // when by default name used then not show if condition message
  if (!userName) {
    return `Please enter your name`;
  }
  return `${userName} is logged in`;
}
// console.log(loginUserMessage());
