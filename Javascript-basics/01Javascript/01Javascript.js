// var is a keyword used to declare a variable that is function-scoped or globally scoped and can be re-declared and re-assigned.
// var is add on the window , Hoisted and initialized with undefined, Function-scoped (not block-scoped)
// declarations and initialization

var a; // only declare
var a = 12; // declare and initialize

// Example 1: Function Scope
function test() {
  var x = 10;
}
// console.log(x); //  Error (x is not global)

// Example 2: Not Block Scoped

if (true) {
  var y = 20;
}
// console.log(y); // 20 


// Hoisting is a JavaScript mechanism in which variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed.
// Only declarations are hoisted, not initializations.
// Hoisting -> ek variable ko jab js mein banatae hai to wo variable do hisso mein toot jata hai and uska declare part upar chala jaata hai and uska initialization part neeche reh jata hai.

// Example 3: Hoisting
// console.log(c); // undefined , in javascript undefined is not the error.
var c = 5; 
/*
Internally:
var c;
console.log(a);
c = 5;
*/


// let : let is a keyword used to declare a block-scoped variable that can be re-assigned but cannot be re-declared in the same scope. Hoisted but not initialized (Temporal Dead Zone)


// Example 1: Block Scope { }

if (true) {
  let d = 10;
}
// console.log(d);  // ReferenceError

// Example 2: Re-assignment Allowed

let count = 1;
count = 2;
// console.log(count); // 2

// Example 3: Temporal Dead Zone
// Temporal Dead Zone (TDZ): The Temporal Dead Zone (TDZ) is the period between the start of a block’s execution and the point where a let or const variable is declared, during which accessing the variable results in a ReferenceError.

// console.log(e);  // ReferenceError, Cannot access 'e' before initialization
let e = 5; 



// const : const is a keyword used to declare a block-scoped variable whose value cannot be re-assigned after initialization. Variables and functions are registered in memory



/*

var → hoisted and initialized with undefined
let → hoisted but not initialized (TDZ)
const → hoisted but not initialized (TDZ)

| Keyword | Hoisted | Accessible Before Declaration |
| ------- | ------- | ----------------------------- |
| `var`   |    Yes   |   (undefined)                |
| `let`   |    Yes   |   (TDZ)                      |
| `const` |    Yes   |   (TDZ)                      |


// var - Hoisting works, No error because a is hoisted and initialized as undefined. their is no Temporal Dead Zone
console.log(a); // undefined
var a = 10;

// let -Hoisted but inaccessible(TDZ)
console.log(b); // ReferenceError
let b = 20;

// const - Same as let
console.log(c); // ReferenceError
const c = 30;
*/



var x = 1; // global
{
  var x = 2; // global
}
// console.log(x);  // 2


let z = 10;  // block scope and global
{
  let z = 20; 
//  console.log("Inside:", z); // 20
}
// console.log("Outside:", z); // 10


if (true) {
  var k = 12; // var is not access outside the function.
  let l = 23; // let is not access outside of the block.
}
// console.log(k); // 12
// console.log(l); // ReferenceError: l is not defined

// Why const allowed Object Property.
const person = { name: "Sanskar" };
person.name = "Mishra";  // allowed, because it is inside object update the value of the property.
//console.log(person);
// person = {};  // Not allowed.

// when you to do not change the property of the object then you ,must be use object.freeze() 

// Object.freeze() is a JavaScript method that prevents modifications to an object by making it immutable.
// After freezing, you cannot add, delete, or update properties of the object.

// Example 1: Basic Freeze

const user1 = {
  name: "Sanskar",
  age: 22
};

Object.freeze(user1);

user1.age = 23; //  Not allowed
user1.city = "Delhi"; //  Not allowed
delete user1.name; //  Not allowed

// console.log(user); 

// Example 2: Freeze with const

const config = {
  apiUrl: "https://api.example.cpom"
};
Object.freeze(config);
config.apiUrl = "https://test.com"  // Not allowed
// const prevents reassignment
// Object.freeze() prevents mutation


// Example 3: Shallow Freeze (IMPORTANT)

const user = {
  name: "Sanskar",
  address: {
    city: "Bhopal"
  }
};

Object.freeze(user);
user.address.city = "Indore"; // Allowed 
console.log(user.name) // sansakar
console.log(user.address.city); // Indore 

// Object.freeze() is shallow, not deep.

