// let :

/*
1 . let : let is generally used in places where we need to re-assign it's value : 
2. Let has a blocked scope. 
3 . as deveopers , we prefer to use let when we think that we would have to re-assign it's value in the re-assign 
*/

// let a = 10;

// a = 20;
// console.log(a);

// let a = 100;

// {
//   let a = 200;
//   console.log(a);  // 200
// }
// console.log(a); // 100

/*

const : 
1 .using const , we cannot re-assign the values .
2 . Const also has a blocked scope . 
3 . we generally prefer using const at places where we are sure that the value wont be changing anywhere inside the program .
*/

// const a = 10;

// a = 20;
// console.log(a);

// const a = 10;

// {
//   const a = 20;
//   console.log(a); // 20
// }
// console.log(a); // 10

// ARROW FUNCTIONS

// Normal function
// function a() {
//   console.log("Hello");
// }

// a();

// arrow functions :

// syntax :

// const a = () => {
//   console.log("this is an arrow function");
// };

// a();

// const num = (n1) => { // params
//   return n1;
// };

// const rn1 = num(10); // args
// console.log(rn1);

/*

Arrow functions : These are a cleaner way to write a function . 
synrax : <varaiabe type> <name of the function> = () => {
    logic you want to perform 
}
were introduced in es6.
*/

// TEMPLATE LITERALS :

/*
This was introduced in es6 (2015)

usage ; 
- getting opt messages
- your otp for transaction for 100 rupees with card number ending with xxxx is <otpvalue>
- whenever we use a template literal we enclose the same in a bactick (``) (above tab keybutton)

*/

// let otpvalue = Math.floor(Math.random() * 10)

// const str = `your otp for transaction for 100 rupees with card number ending with xxxx is ${otpvalue} `;
// console.log(str);

// DESTRUCTURING

/*
- This concept was also introduced in es6 version (2015)
- destructuring means : dismantle | disassemple
- we disassemple a composed array / object .
- This is also referred to as unpacking from arrays or objects 
*/

// const arr = ["one", "two", "three", "four", "five"];

// const [a, b, c, d, e, f, g, h] = arr;

// console.log(a, b, c, d, e, f, g, h);

// Rest Operators

/*
- This is used to gather all the remaining thing into a single structure . 
- This is generally used in function parameters 

*/

// const arr = ["one", "two", "three", "four", "five"];

// const [a, b, ...c] = arr; // rest operator .

// console.log(a, b, c);

// function sum(...nums) {
//   var totalsum = 0;
//   for (var i = 0; i < nums.length; i++) {
//     totalsum = totalsum + nums[i];
//   }
//   console.log(totalsum);
// }

// // sum(5, 10); // args
// sum(5, 10, 15); //
// sum(1);

/*
Spread Operator : 
- Spread means expanding
- Expand arrays .
- Syntax is similar but usecase is different (...<name>)

*/

// const arr1 = [1, 2, 3, 4];
// const arr2 = [8, 9, 10];

// const arr5 = [arr1, 5, 6, 7, arr2];
// console.log(arr5);

// const arr6 = [...arr1 , 5,6,7 ,...arr2]
// console.log(arr6);

// DEFAULT PARAMETERS

/*
- these are default values that we give and make parametersds optional .
- If you give any argument while passing a function , then we see the data being passed in the parameter , but is we don't give any value , 
default parameters will be there

*/

// let namefun = function () {
//   console.log("hello world");
// };

// namefun(2);
// namefun();
// namefun();
// namefun();

// Modules and Imports

/*
- This is a modular programming concept . 


*/

import another from "./Another.js";

another();


// version was introduced between es7 - es9 