console.log("---------------------- Objects --------------------");

// An object is a non-primitive data type that allows you to store multiple values as properties and methods in a single variable.
// In JavaScript, an object is a collection of key–value pairs used to store related data and functionality.

let obj = {
  name: "Aman",
  age: 21,
  place: "Jaipur",
};

let age = obj.age;
console.log(age); // 21
let name1 = obj.name;   
// obj.name ⇒ the property name is searched literally
// whatever is written after `obj.` is treated as a literal key
// and JavaScript looks for that exact key inside the object

console.log(name1); // Aman
let data = obj['place'];
console.log(data); // Jaipur

// If you want to use a variable name and have it converted to its value,
// then use this format: obj[aa];

let aa = "name";  // here aa is convert into name
console.log(obj[aa]); // Aman 


// Key–Value Structure in JavaScript:
// A key–value structure is a way of storing data in an object.
// where each key (property name) is associated with a value.
// Keys are strings (or symbols), and values can be any data type.

const user = {
  name: "Sanskar",
  age: 22,
  city: "Bhopal",
  isDeveloper: true
};

// Explanation
// Keys → name, age, city, isDeveloper
// Values → "Sanskar", 22, "Bhopal", true

// Dot vs bracket notation:

// Dot Notation:
// Used to access object properties using a literal (fixed) property name.
// The property name written after the dot is treated exactly as it is.

// Bracket Notation:
// Used to access object properties using a string or a variable.
// The expression inside the brackets is evaluated first and then used as the property name.


const data1 = {
  name: "Ajay"
};
const key = "name";
console.log(data1.name); // Ajay  // Dot notation → literal
console.log(data1[key]); // Ajay  // Bracket notation → dynamic


const user1 = {
  name: "Dilip",
  address: {
    city: "Jaipur",
    pin: 4567001,
    location: {
      lat: 23.2,
      lng: 77.4,
    },
  },
};
console.log(user1.address.location.lng); // 77.4

let key1 = 'address';
console.log(user1[key1]); // { city: 'Jaipur', pin: 4567001, location: { lat: 23.2, lng: 77.4 } }


// Object Destructuring => Object destructuring is a JavaScript feature that allows you to extract values from object properties and store them into individual variables using a short and readable syntax.

// User Profile (like in a web app / backend API)
const userProfile = {
  id: 101,
  name2: "Sanskar",
  email: "sanskar@gmail.com",
  address: {
    city: "Ajmer",
    country: "India"
  },
  idVerified: true 
};

const { name2, email, address } = userProfile;
const { city } = address;
console.log(name2, email); // Sanskar sanskar@gmail.com
console.log(city, address);  // Ajmer { city: 'Ajmer', country: 'India' }


// Looping: for-in, Object.keys, Object.entries

// for...in loop: => The for...in loop is used to iterate over the enumerable.property names (keys) of an object in JavaScript.

/*
// Syntax of the for...in loop

for (let key in object) {
  // key → stores the property name
  // object[key] → accesses the value.  // remember
}

*/

let obj1 = {
  name: "Aman",
  age: 23,
  email: 'test@email.com',
};

for (let key in obj1){
  console.log(key, obj1[key]);
}
/*
name Aman
age 23
email test@email.com
*/

// Example 1: Basic Object Loop
const car = {
  brand: "BMW",
  model: "X5",
  year: 2024
};
for (let key in car) {
  // console.log(key, car[key]);
}

// Example 2: User Settings (Real-World)
const settings = {
  theme: "dark",
  language: "en",
  notifications: true
};
for (let setting in settings) {
  console.log(`Setting ${setting} is ${settings[setting]}`);
}
/*
Output:
Setting theme is dark
Setting language is en
Setting notifications is true
*/

// Example 3: Counting Properties
const product = {
  id: 101,
  name: "laptop",
  price: 55000,
  place: "USA"
};
let count = 0;

for (let prop in product){
  count++;
}
console.log(count); // 4

// Example 4: Form Validation (Backend Example)

const requiredFields = {
  email: true,
  password: true,
  username: true
};
const formData = {
  email: "user@gmail.com",
  username: "user123"
};
for (let field in requiredFields) {
  if (!formData[field]) {
    console.log(`${field} is required`)
  }
} // password is required

// Example 5: Filtering Object Data
const scores = {
  math: 85,
  english: 72,
  science: 90
};
for (let subject in scores) {
  if (scores[subject] >= 80) {
    console.log(`${subject}: Passed with distinction`)
  }
}
// math: Passed with distinction
// science: Passed with distinction

// Example 6: API Response Logging
const apiResponse = {
  status: 200,
  message: "Success",
  data: []
};
for (let aman in apiResponse){ // key can be anything.
  console.log(`${aman} => ${apiResponse[aman]}`)
}
/*
Output:
status => 200
message => Success
data => 
*/

// Interview Tip => Always use bracket notation (obj[key]) inside for...in because the key is stored in a variable.


// Object.keys():
// Object.keys() is a JavaScript method that returns an array
// containing all the enumerable property names (keys) of an object.
// Syntax => Object.keys(object);
// Interview Tip => Object.keys() is commonly used for validation, configuration handling, dynamic UI rendering, and object cleanup.

// Enumerable means a property of an object that can be listed or iterated over.

// An enumerable property is a property that appears when you loop over an object (using for...in, Object.keys(), Object.values(), or Object.entries()).
// Enumerable property wo hoti hai jo object ke upar loop lagane par mil jaaye jaise for...in, Object.keys(), Object.values() etc.

const user2 = {
  name: "Sanskar",
  age: 22
};

console.log(Object.keys(user2));
// ["name", "age"]  // name and age are enumerable properties.

// Non-Enumerable Property Example
const obj2 = {};
Object.defineProperty(obj2, "id", {
  value: 101,
  enumerable: false 
});
console.log(Object.keys(obj2));  // [] // id exists, but it is not enumerable.

// Enumerable properties are those object properties that can be iterated over or listed using loops and Object methods.

// real-world examples of Object.keys()
// Example 1: Checking if an Object is Empty

const cart = {};
if (Object.keys(cart).length === 0) {
  console.log("Cart is empty");
}

// Example 2: User Permissions System
const permissions = {
  read: true,
  write: false,
  delete: false
};

const allowedPermissions = Object.keys(permissions).filter((prem) => permissions[prem]);
console.log(allowedPermissions); // [ 'read' ]

// Example 3: Logging Errors Dynamically
const errors = {
  email: "Invalid email",
  password: "Password too short"
};

Object.keys(errors).forEach((field) => {
  console.log(`${field}: ${errors[field]}`);
});

// email: Invalid email
// password: Password too short

// Example 4: Removing Undefined Values
const payload = {
  name: "Sanskar",
  email: undefined,
  age: 22
};

Object.keys(payload).forEach((key) => {
  if (payload[key] === undefined) {
    delete payload[key];
  }
});
console.log(payload); // { name: 'Sanskar', age: 22 }

// Example 5: Comparing Two Objects (Basic Check)
const Obj1 = { a: 1, b: 2};
const Obj2 = { a: 1, b: 2};
const sameKeys = Object.keys(Obj1).length === Object.keys(Obj2).length;
console.log(sameKeys); // true 

// Example 6: Feature Availability Check
const config = {
  login: true,
  signup: true,
  payments: false
};
if (Object.keys(config).includes("payments")) {
  console.log("Payments feature exists");
} // Payments feature exists


// Object.entries():

// Object.entries() is a JavaScript method that returns an array of an object's own enumerable key–value pairs, where each entry is in the form [key, value].

// Syntax => Object.entries(object);

// Example: User Profile Data from API

const userProfile1 = {
  username: "sanskar_97",
  email: "sanskar@gmail.com",
  role: "Admin",
  isActive: true
};
const entriesList = Object.entries(userProfile1);
for (let [property, data] of entriesList) {
   console.log(`${property}: ${data}`);
}
/*
username: sanskar_97
email: sanskar@gmail.com
role: Admin
isActive: true
*/
// Explanation
// entriesList → stores the array of key–value pairs
// property → stores the key
// data → stores the value

// Backend Validation
const errorsObject = {
  email: "Invalid email",
  password: "Too short"
};

Object.entries(errorsObject).forEach(([fieldName, errorMsg]) => {
  console.log(`${fieldName} error: ${errorMsg}`);
});

// Interview Line => Object.entries() is commonly used when both keys and values are required together, especially in loops.

// Copying objects: spread, Object.asign, deep clone 

// The spread operator (...) in JavaScript is used to create a shallow copy of an object by copying all its enumerable own properties into a new object.
// It helps in copying objects, merging objects, and updating properties immutably without modifying the original object.

// Syntax:   const newObject = { ...oldObject };

// Example: Copying an Object
const user3 = {
  name: "Sanskar",
  age: 22,
};
const copiedUser = {...user3};
console.log(copiedUser); // { name: 'Sanskar', age: 22 }
// copiedUser is a new object
// Changes to copiedUser will not affect user (for top-level properties)

// Updating Properties While Copying

const updatedUser = {...user3, age: 23 };
console.log(updatedUser); // { name: 'Sanskar', age: 23 }

// Important Note (Shallow Copy) => The spread operator creates a shallow copy, meaning nested objects are still referenced.

const person = {
  name: "Aman",
  address: {
    city: "Bhopal"
  }
};

const copy = { ...person };
copy.address.city = "Indore";

console.log(person.address.city); // "Indore"
// Nested objects are not deeply copied


// Object.assign() is a JavaScript method used to copy enumerable own properties from one or more source objects into a target object. It returns the target object and performs a shallow copy.

// Syntax:  Object.assign(target, ...sources);

/*
target → object that receives the properties
sources → one or more objects whose properties are copied
return value → the modified target object
*/

// Basic Example (Copying an Object)
const product1 = {
  id: 101,
  name: "Laptop"
};
const productCopy = Object.assign({}, product1);
console.log(productCopy); // { id: 101, name: 'Laptop' }

// Creates a new object
// Original object remains unchanged (for top-level properties)

// Real-World Example: User Profile Update
const userProfile2 = {
  username: "sanskar123",
  email: "sanskar@gmail.com"
};

const updatedProfile = Object.assign({}, userProfile2, {
  email: "contact@sanskar.dev",
  phone: 2323232323
});
console.log(updatedProfile); 
/*
Output:

{
  username: 'sanskar123',
  email: 'contact@sanskar.dev',
  phone: 2323232323
}

Original data is preserved
New object contains updated values
*/

// Shallow Copy => A shallow copy is a copy of an object where only the top-level properties are copied, but nested objects or arrays are still shared by reference between the original and the copied object.

// Primitive values → copied by value
// Objects / Arrays → copied by reference

// So, if you change a nested object, the change appears in both the original and the copied object.

const employee = {
  name: "Amit",
  department: {
    name: "Engineering"
  }
};
const employeeCopy = {...employee }; // shallow copy
employeeCopy.department.name = "HR";
console.log(employee.department.name);  // HR
console.log(employeeCopy.department.name); // HR
// employee and employeeCopy are different objects
// ❌ department is the same reference in both

/*

How Shallow Copy is Created
Spread operator ({ ...obj })
Object.assign()
Array.prototype.slice()
Array.from()

*/

// Primitive vs Reference Example
const data2 = {
  count: 10,
  items: ["pen", "book"]
};
const dataCopy = Object.assign({}, data2);
dataCopy.count = 20; // primitive → independent
dataCopy.items.push("pencil");  // reference → shared

console.log(data2.items); // [ 'pen', 'book', 'pencil' ]
console.log(data2.count); // 10

// A shallow copy duplicates only the first level of an object, while nested objects remain linked by reference.


// Another example (Object.assign)
let obj3 = {
  name: "dilip",
  age: 26,
  email: "test@test.com",
};
let obj4 = Object.assign({ price: Infinity }, obj3);
console.log(obj4); // { price: Infinity, name: 'dilip', age: 26, email: 'test@test.com' }

let aman = {
  name: "raj",
  age: 26,
  email: "test@test.com",
  address: {
    city: "Bhopal",
  },
};
let aman2 = {...aman};
aman2.address.city = "Indore";
console.log(aman2); // { name: 'raj', age: 26, email: 'test@test.com', address: { city: 'Indore' } }
console.log(aman); // { name: 'raj', age: 26, email: 'test@test.com', address: { city: 'Indore' } }

// When an object contains a nested object and you copy it—whether using the spread operator or any other method—only the top-level values are actually copied. The nested objects are passed again by reference.


// A deep clone is a process of copying an object along with all of its nested objects and arrays, so that no references are shared between the original object and the cloned one. Any change made to the cloned object does not affect the original object at any level.

/*
Simple Meaning
Creates a completely independent copy
Copies all levels (top-level + nested levels)
Prevents unintended side effects
*/

let obj5 = {
  name: "harsh",
  age: 25,
  email: "test@test.com",
  address: {
    city: "pune",
  },
};
console.log(JSON.stringify(obj5)); // {"name":"harsh","age":25,"email":"test@test.com","address":{"city":"pune"}}

let obj6 = JSON.parse(JSON.stringify(obj5)); // convert into real format.
console.log(obj6);

obj6.address.city = "Indore"
console.log(obj6); // { name: 'harsh', age: 25, email: 'test@test.com', address: { city: 'Indore' } }

console.log(obj5); // { name: 'harsh', age: 25, email: 'test@test.com', address: { city: 'pune' } }

// When you use JSON.stringify(), the object is converted into a string, so no part of it remains a reference. During this process, the nested parts are also included as real values. Then, when you use JSON.parse(), the string is converted back into a new object, and obj6 receives a completely independent copy of the nested data.

// If you copy the object directly (for example, using the spread operator), the nested parts are never truly copied—only their references are passed, which can cause problems.


// Valid Example using structuredClone() (Recommended)

const company = {
  name: "TechNova",
  location: {
    city: "Pune",
    country: "India"
  },
  teams: ["Backend", "Frontend"]
};

const companyClone = structuredClone(company);

companyClone.location.city = "Bangalore";
companyClone.teams.push("DevOps");

console.log(company.location.city); // "Pune"
console.log(company.teams);         // ["Backend", "Frontend"]
// No shared references
// Safe deep clone


// Real-World Example: E-Commerce Cart Snapshot
const shoppingCart = {
  userId: 901,
  items: [
    { product: "Phone", price: 15000 },
    { product: "Charger", price: 800 }
  ],
  delivery: {
    address: "Delhi"
  }
};

const cartSnapshot = structuredClone(shoppingCart);

// Modify snapshot
cartSnapshot.items[0].price = 14000;
cartSnapshot.delivery.address = "Mumbai";

console.log(shoppingCart.items[0].price); // 15000
console.log(shoppingCart.delivery.address); // "Delhi"
// Original cart remains unchanged
// Useful for order history, undo/redo features

// Alternative Deep Clone Method (JSON Method)
const settings1 = {
  theme: "dark",
  shortcuts: ["ctrl+s", "ctrl+p"]
};
const settingClone = JSON.parse(JSON.stringify(settings1));
settingClone.city = "USA";
console.log(settingClone); // { theme: 'dark', shortcuts: [ 'ctrl+s', 'ctrl+p' ], city: 'USA' }

console.log(settings1); // { theme: 'dark', shortcuts: [ 'ctrl+s', 'ctrl+p' ] }



// Optional chaning  => Optional chaining (?.) is used to safely access object properties or methods. If the property exists, it returns its value; otherwise, it returns undefined instead of throwing an error.

let obj7 = {
  name: "mayank",
  age: 26,
  email: 'test@test.com',
  addresses: {
    city: "punjab",
  },
};
let obj8 = obj7?.address?.city;  // Optional chaining (?.) is used to safely access object properties or methods. If the property exists, it returns its value; otherwise, it returns undefined instead of throwing an error.
console.log(obj8); // undefined

const user5 = {
  profile: {
    name: "Sanskar"
  }
};
console.log(user5.profile?.name); // Sanskar 
console.log(user5.address?.city); // undefined

// Optional chaining prevents runtime errors when accessing properties that may not exist.

// Optional chaining (?.) allows you to safely access object properties, methods, or array elements.
// If the value before ?. exists, it returns the result; otherwise, it returns undefined without throwing an error.


// Optional Chaining with Objects
const student = {
  name: "Ravi",
  marks: {
    math: 85
  }
};

console.log(student.marks?.math);     // 85
console.log(student.address?.city);   // undefined (no error)

// Optional Chaining with Functions
const userActions = {
  login() {
    return "User logged in";
  }
};

console.log(userActions.login?.());   // "User logged in"
console.log(userActions.logout?.());  // undefined (no error)

// Optional Chaining with Arrays
const products = [
  { name: "Phone", price: 15000 }
];

console.log(products[0]?.name);  // "Phone"
console.log(products[1]?.name);  // undefined (no error)

// Real-World Example: API Response Handling
const apiResponse1 = {
  data: {
    user: {
      email1: "test@gmail.com"
    }
  }
};
const email1 = apiResponse1.data?.user?.email1;
const phone = apiResponse1.data?.user?.phone;

console.log(email1); // test@gmail.com
console.log(phone); // undefined

// Without Optional Chaining (Error)

// console.log(apiResponse.data.user.phone); // ❌ TypeError: Cannot read properties of undefined


// Computed properties allow you to use dynamic expressions as object property names instead of fixed (static) keys.
// The property name is evaluated at runtime and written inside square brackets [].

// Syntax:  const obj = { [expression]: value };

const keyName = "age";

const person1 = {
  name: "Anamika",
  [keyName]: 22
};
console.log(person1); // { name: 'Anamika', age: 22 }
// Property name is decided dynamically
// Very useful when keys are not known in advance

// Real-World Example: Form Input Handling
const inputField = "email";
const inputValue = "user@example.com";

const formData1 = {
  name: "Ravi",
  [inputField]: inputValue
};

console.log(formData1);
// { name: "Ravi", email: "user@example.com" }

// Example with Expression
const prefix = "user";
const id = 101;

const account = {
  [prefix + id]: true
};

console.log(account); // { user101: true }


// One-Line Interview Definition: Computed properties allow dynamic expressions to be used as object keys in JavaScript objects using square brackets.

// Practice 

// Can an object key be a number or boolean? Try this => yes it is possible.

const code = {
  true: "yes",
  42: "answer",
};
console.log(code[true]); // yes
console.log(code[42]); // answer


// Given a dynamic key let key = "age", how will you access user[kay] ?
let key2 = "age";
const user6 = {
  age: 29
};
console.log(user6[key2]); // 29


// Destructure the key "first-name" as a variable called firstName.

const program = {
  "first-name": "Rajan",
};
let { "first-name": firstName } = program;
console.log(firstName); // Rajan

// Here, because of the hyphen in first-name, the property is accessed using bracket notation. Then you create a variable named firstName, and the value of the first-name property, which is "Rajan", is extracted and stored in the firstName variable.

const program1 = {
  "first-name": "Rajan",
};

const firstName1 = program["first-name"];
console.log(firstName1); // "Rajan"

// Properties with hyphens cannot be accessed using dot notation (program.first-name ❌)
// Bracket notation allows access using a string key

/*
Summary
Object destructuring → { "first-name": firstName }
Bracket notation → program["first-name"]
*/

// Use for-in to log all kays in this object:
const course = {
  title: 'Javascript',
  duration: "4 weeks",
};
for (let key in course ){
  console.log(key);
  // title
  // duration
}

// Use Object.entries() to print all key-value pairs as:

const course1 = {
  title: "Python Programming",
  duration: "4 weeks",
};
Object.entries(course1).forEach(function(val){
  console.log(val[0]+ ": " + val[1]);
});
/*
title: Python Programming
duration: 4 weeks
*/

// copy this object using spread operator 
const original = { a: 1, b: 23, c: 22};
const copy1 = {...original};
console.log(copy1); // { a: 1, b: 23, c: 22 }

// identify the problem 
const mug1 = {info: { score: 80 }};
const clone = { ...mug1 }; // nested object value is not  copy here only passed with reference so if change the value then it will also change the original value of the object.
clone.info.score = 100;
console.log(mug1.info.score); // 100

// deep clone the mug1 safely:
let newmug = JSON.parse(JSON.stringify(mug1));
newmug.info.score = 200;
console.log(newmug); // { info: { score: 200 } } // newmug has value changed
console.log(clone);   // { info: { score: 100 } } // old object that name is clone and its value remaind same.


// do not directly copy reference type values.
const a = { score: 90 };
const b = a;
b.score = 50;
console.log(a.score); // 50 





