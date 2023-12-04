/*
OBJECTS

- A collection of data . 
- It follows a key - value pair storage .
- key can be anything , but in a string datatype . 
- If we forget to mention it in a string datatype , Js will automatically convert it for us . 
- For decalaring objects , we have to use {} compared to [] when we declare an array .
- Key has to be unique . 
- You can store any value , any datatype inside an objects
- Even you can store a function . 
*/

// const fn = () => {
//   console.log("Arrow Function");
// };

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const obj = {
//   F_name: "Ritik",
//   L_name: "Masand",
//   //   L_name : 'Singh' ,
//   Age: "26",
//   City: "New Delhi",
//   Funtion: fn,
//   array: arr,
// };

// console.log(obj);

// Accesing objects : If you want to print a particular key , then we can either use a dot notation or a square bracket notataion .

// using dot notation
// console.log(obj.F_name);

// console.log(obj.Age);

// if we try to print/access a key that has not been decalred in the object ?
// using a dot notation , we can also initialize a new key with a new value .
// console.log(obj.M_name);
// obj.M_name = "Singh";

// console.log(obj);

// using a square notation
// console.log(obj['City']);

const obj = new Object();

obj.k1 = "1234";
obj.f_name = "ritik";
obj.l_name = "masand";

obj["f_name"] = "sam";

console.log(obj);
