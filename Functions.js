// Functions :

// Functions can be considered as a re-usable block of code .

// q :  you want to calculate sum of 2 nos .

// User 1
// var a = 10;
// var b = 20;
// var c = a + b;

// console.log(c);

// // User 2
// var a = 30;
// var b = 40;
// var c = a + b;

// console.log(c);

// Using functions , we can make our code smaller , efficient and easier for debugging .

// How to declare functions ?
// How to invoke functions ?
// paremeters
// arguments

// Function declaration .

/*

1 . Function
Declaration 
*/

// declared a function
// function rahul() {
//   // parameters
//   console.log("This is a function");
// }

// // function invokation (calling)

// rahul(); // arguments
// rahul();
// rahul();

// parameter
// argument

// Parameter

/*
It is that value which is passed while function declaration 
*/

// Arguments

// It is that value which gets passed whenever we are invoking ( calling ) a function

// The user will pass a random name (username) , and we need to display it on the console . **note : There could be multiple users**

// function display_username(username) {
//   // function declaration . username is the parameter
//   console.log(
//     "The username received from the function argument is : " + username
//   );
// }

// display_username("Ritik"); // function invkation . Ritik is the argument
// display_username("Sam"); // Sam is the argument
// display_username("Smith"); // smith is the argument

// Write a function to add 2 numbers

// function addNumbers(num1, num2) {
//   var sum = num1 + num2;
//   return sum;
// }

// let received_sum = addNumbers(1, 2);
// let a = addNumbers(5, 6);
// let b = addNumbers(100, 200);
// let c = addNumbers(500, 500);

// console.log("The sum of numbers is :" + received_sum);
// console.log("The sum of numbers is :" + a);
// console.log("The sum of numbers is :" + b);
// console.log("The sum of numbers is :" + c);
// return

// We can use a function as a variable .

// let x = function square(num) {
//   let sq_num = num * num;
//   return sq_num;
// };

// let y = x(4); // argument
// console.log(y);


