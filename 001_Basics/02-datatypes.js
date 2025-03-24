"use strict"; // treat all js code as new verstion

// alert("My name is Haider Cheema and i'm learning JavaScript from scratch after two years") // it will not alert because we are using nodejs, not browser

console.log(100 + 100);

console.log(200 - 100);

console.log(100 + 100); console.log(200 - 100);  // (this is not recommended) code readablity should be high

// console.log(200
//     * 
//     2
// ); // this is very bad practice to do code like this. line number 5 and 7 are good to use

// let's start discussing the datatypes

/*
JavaScript has two main categories of data types:
1. Primitive data types
2. Non-primitive data types

************ Primitive data type ***************
String
Number
Boolean
Null => the name of null data type is null but actually this is an object
Undefined
BigInt
Symbol

************ Non Primitive data type ***************
Arrays
Objects
Functions


*/
let user_name = "Haider Cheema"; // string
let user_age = 24; // number
let is_haider_single = true; // boolean
let user_details = [user_name, user_age, is_haider_single]; // array
let user_updated_detail = {
    user_name: "Haider Ali Cheema",
    user_age: 25,
    is_haider_single: false,
} // object
let undefined_variable; // undefined
let null_variable // null
let bigint_variable = 12345678901234567890n; // Used for very large numbers beyond Number limits.
let symbol_variable = Symbol('unique'); // A unique and immutable value often used as object keys.
