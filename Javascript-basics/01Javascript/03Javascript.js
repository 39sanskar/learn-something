/* ------------ Operators ----------- */

const { LEGAL_TLS_SOCKET_OPTIONS } = require("mongodb");

// Arithmetic, comparison, logical, assignment, unary, ternary

console.log(1 + 2);  // addition
console.log("har"+"sh"); // concatenation 

console.log(12 == 13); // false
console.log(12 == "12"); // true, double equal is not check the dataTypes of the value. {it is not strict comparision.}

console.log(12 === "12"); // false, {strict comparision value as well as types of the data}

// != (Not Strict Inequality) → compares values after type coercion
console.log(5 != "5");   // false (values are equal after coercion)

// !== (Strict Inequality) → compares value AND type
console.log(5 !== "5");  // true (number ≠ string)


// -------- Assignment Operators --------

let c = 10;

// =  (Assign)
c = 10;
console.log(c); // 10

// +=  (Add and assign)
c += 5;   // c = c + 5
console.log(c); // 15

// -=  (Subtract and assign)
c -= 3;   // c = c - 3
console.log(c); // 12

// *=  (Multiply and assign)
c *= 2;   // c = c * 2
console.log(c); // 24

// /=  (Divide and assign)
c /= 4;   // c = c / 4
console.log(c); // 6

// %=  (Modulus and assign)
c %= 4;   // c = c % 4
console.log(c); // 2


// -------- Logical Operators --------

// && (Logical AND)
console.log(true && true);    // true
console.log(true && false);   // false

// || (Logical OR)
console.log(false || true);   // true
console.log(false || false);  // false

// ! (Logical NOT)
console.log(!true);           // false
console.log(!false);          // true

// -------- Unary Operators --------
// A unary operator is an operator that works on only one operand (single value).

let d = 5;

// Unary minus
console.log(-d); // -5

// Logical NOT
console.log(!true); // false

// Convert to boolean
console.log(!!"hello"); // true

// Increment
d++;
console.log(d); // 6

// Decrement
d--;
console.log(d); // 5


// if you want to convert a string into a number simply apply +, for eg. { console.log(+"4");} at starting.
console.log(+"4"); // 4
console.log(+"9"); // 9
console.log(+"sanskar"); // NaN


// -------- Ternary Operators --------
// Definition: The ternary operator (?:) is a conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false.

// User access control in production code
const userRole = "admin";

const accessMessage = userRole === "admin"
  ? "Access granted"
  : "Access denied";

console.log(accessMessage); // Access granted

// Age Validation
const age = 16;
const canVote = age >= 18 ? "Eligible to vote" : "Not eligible";
console.log(canVote); // Not eligible

// User Authentication Status
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please login";
console.log(message); // Welcome back!

// Discount Calculation
const totalAmount = 1200;
const discount = totalAmount > 1000 ? 0.5 : 0;
console.log(discount); // 0.5

// API Response Handling
const success = false;
const response = success ? "Data fetched" : "Something went wrong";
console.log(response); // Something went wrong

// Theme Selection (Frontend)
const theme = "dark";
const bgColor = theme === "dark" ? "#000" : "#fff";
console.log(bgColor); // #000

// Optional Value Handling
const username = null;
const displayName = username  ? username : "Guest";
console.log(displayName); // Guest


// ===============================
// JavaScript Operators – All in One File
// ===============================

// -------- Arithmetic Operators --------
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // +
console.log("Subtraction:", a - b);     // -
console.log("Multiplication:", a * b);  // *
console.log("Division:", a / b);        // /
console.log("Modulus:", a % b);          // %
console.log("Exponentiation:", a ** b); // **

// -------- Assignment Operator --------
let x = 5;
console.log("Assignment:", x); // =

// -------- Comparison Operators --------
console.log("== :", 5 == "5");     // true
console.log("=== :", 5 === "5");   // false
console.log("!= :", 5 != "5");     // false
console.log("!== :", 5 !== "5");   // true
console.log("< :", 5 < 10);        // true
console.log("> :", 10 > 5);        // true
console.log("<= :", 5 <= 5);       // true
console.log(">= :", 5 >= 3);       // true

// -------- Logical Operators --------
console.log("&& :", true && false); // false
console.log("|| :", false || true); // true

// -------- Unary Operators --------
console.log("! :", !true);        // false
console.log("!! :", !!"hello");   // true

// -------- Ternary Operator --------
let myage = 17;
let result = myage >= 18 ? "Adult" : "Minor";
console.log("Ternary:", result);


// learn for (interview)
console.log(typeof null); // object
console.log(typeof []);  //  object
console.log(typeof {});  // object
console.log(typeof NaN); // number
console.log( function(){}); // [Function (anonymous)]


// instanceof is an operator in JavaScript that checks whether an object is an instance of a specific constructor or class by verifying its prototype chain. it work with reference values, not a primitive values.
let p = []
console.log(p  instanceof Array); // true

let s = {}
console.log(s  instanceof Object); // true 
console.log(s  instanceof Array); // false

// Example
class User {}

const u1 = new User();

console.log(u1 instanceof User);   // true
console.log(u1 instanceof Object); // true

// 
const arr = [];

console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true

/*

- arr is created using the Array constructor, so
- arr instanceof Array → true
- In JavaScript, Array inherits from Object, so an array’s prototype chain includes Object.prototype
- Therefore, arr instanceof Object → true

*/

// instanceof is not work with Number(because that is Primitive.).
let q = 12;
console.log(q instanceof Number); // false , because instanceof is work with reference values not a primitive values.

// Example: 1
let isAdmin = true;
let ismyLoggedIn = false;

if (isAdmin || ismyLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}  // Access granted

// Example: 2
let temp = 35;
if(!(temp < 30)) {
  console.log("Hot");
} else {
  console.log("Pleasant")
} // Hot

// Example: 3

let j = 0;  // 0 has a falsy nature.
if (j) {
  console.log("Truthy");
} else {
  console.log("Falsy");
} // falsy

// Example: 4
let score = 78;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade); // B

// Example: 5
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deney";
console.log(access); // Deny

// 
let k = 8;
++k;
console.log(k); // 9

let l = 3;
let m = l++; // Here the value of `l` is 3, so `m` gets the value 3.
// After that, `l++` increments(postincrement) `l`, so its value becomes 4.

console.log(l, m); // 4, 3


let n = 4;
let o = ++n; // here preincrement => first increment then assign the value.
console.log(n, o); // 5, 5

let z = 10;
console.log(z--); // 10
console.log(z); // 9

let aman = 5;
let answer = aman++ + ++aman; 
console.log(answer); // 12

/*

-  Step-by-step Execution
-  aman++ (post-increment)
-  First, it uses the current value → 5
-  Then it increments aman → aman becomes 6
-  ++aman (pre-increment)
-  First, it increments aman → aman becomes 7
-  Then it uses the updated value → 7
answer = 5 + 7; // 12

*/

let likes = 100;
function likePost() {
  return ++likes;
}
console.log(likePost()); // 101
console.log(likes); // 101

let count = 5;
if (count--  === 5){
  console.log("Matched");
} else {
  console.log("Not Matched");
}  // Matched

//  !! value for truthiness.
console.log(!!"");     // false
console.log(!"hello"); // false
console.log(!!"hello"); // true
console.log(!!0);   // false
console.log(!!1);  // true

/*

Pre-Increment (++variable)
Pre-increment first increases the value by 1 and then uses the updated value in the expression.

Post-Increment (variable++) 
Post-increment first uses the current value in the expression and then increases the value by 1.

One-Line Difference
Pre-increment updates before use, post-increment updates after use.
*/

let i = 1;
console.log(++i); // 2
console.log(i++); // 2 (but i is now 3 while you use in future.)
