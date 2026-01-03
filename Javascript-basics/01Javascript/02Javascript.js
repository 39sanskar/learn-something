// Primitive Data Types => Primitive values are those which, when copied, create a completely new and independent copy.
// They are stored by value, so changing one does not affect the other.
// Copied by value
// eg: string, number, boolean , null, undefined, symbol, bigint

let a = 12;
let b = a;  // it has an independent copy.
// console.log(a);  // 12
a = a + 2;
// console.log(a);  // 14
// console.log(b);  // 12

/*  undefined -> A variable is declared but not assigned a value. it is provided by the javascript engine.*/ 
let x;
// console.log(x); // undefined 
// console.log(typeof x); // undefined

// Example in function: 
function test(a) {
  console.log(a);
}
// test(); // undefined 


/* 
null → Represents an intentional empty value. 
It is explicitly assigned by the developer to indicate that a variable has no value.
*/


let user = null;
// console.log(user);  // null 
// console.log(typeof user); // "object" (JS bug)
let selectedUser = null; // no user selected yet


/* Symbol -> Used to create unique immutable value, even if descriptions are same. */

const id1 = Symbol("id");
const id2 = Symbol("id");
// console.log(id1 === id2); // false

// Used in objects:
const User = {
  name: "Sanskar",
  [Symbol("id")]: 101
};
// console.log(User); // { name: 'Sanskar', [Symbol(id)]: 101 }

// Used in objects:
let obj = {
  uid: 1,
  name: "Ajay",
  age:12,
  email: "test@test.com",
};
let u1 = Symbol("uid");
obj[u1] = "001";
// console.log(obj);  // { uid: 1, name: 'Ajay', age: 12 email: 'test@test.com', [Symbol(uid)]: '001' }


/* BigInt => Used for very large integers beyond Number limit. */

const bigNumber = 123456789012345678901234567890n; // just write a big number and at the end attach n.

// console.log(bigNumber);
// console.log(typeof bigNumber); // "bigint"


// Comparison with Number:

//console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

const large = 9007199254740991n + 1n;
// console.log(large); // 9007199254740992n

//  Cannot mix BigInt with Number
// Wrong => 10n + 5 

// Correct => 10n + 5n;


/*  ------- Reference Data Types ------  */

// Reference Data Types => Reference values are those which, when copied, do not create a real copy.
// Instead, the copy holds a reference (memory address) to the original value, so changes affect all references.
// Copied by reference
// eg: arrays, objects, functions, 

let c = [1, 2, 3];
let d = c;  // if any change in c that will also be reflect in the d.
c.pop();
// console.log(c); // [ 1, 2 ]
// console.log(d); // [ 1, 2 ]


let e = {
  name: 'harsh',
};
let f = e;

f.name = "harshita"; // Both e and f point to the same object in memory, so changing f.name also updates e.name.
// console.log(e); // { name: 'harshita' }
// console.log(f); // { name: 'harshita' }


// JavaScript does not have static typing; it is a dynamically typed language.

/*
// static type 
int a = 12;
a = true; // not allowed 
*/

// learn => typeof quirks (e.g., typeof null == 'object')

// console.log(typeof 12); // number
// console.log(typeof "aman"); // string
// console.log(typeof null); // object
// console.log(typeof NaN);  // number

// console.log(NaN === NaN); // false
// console.log(.1 + .2); // 0.30000000000000004
// console.log([] + []); // blank string
// console.log('' + ''); // blank string
// console.log(1 + "1"); // 11
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false


/*  ------- Type coercion ------  */

// Type coercion (== vs ===). Type coercion in JavaScript  automatically converts one data type into another during operations.
// Truthy vs Falsy values 

// in programming + sign can two things addition and concatenation. and - sign is do one thing subtraction

// console.log("5" + 1); // 51
// console.log("5" - 1); // 4

// 0, false, " ", null, undefined, NaN, document.all => values are false. using !! apply before the value to check true/false. {Remember the Result}

// console.log(!!0); // false
// console.log(!!false); // false
// console.log(!!null); // false
// console.log(!!undefined); // fasle
// console.log(!!NaN); // false
// console.log(!!""); // false
// console.log(!!document.all) // false , check in the developer console

// console.log(!!true)  // true 
// console.log(true + false); // 1
// console.log(!!-1); // true

if(-1){ // here -1 is considered as the true value.
  let z = 5
  console.log(z)
}

// console.log(2 * "harsh"); // NaN (Not a Number), failed mathematical numerical operation

let s;
console.log(s); // undefined
let y = null;
console.log(y); // null



