console.log("-------------- Arrays ------------------");

// An array in JavaScript is a special type of object used to store multiple values in a single variable, where each value is stored at a numeric index starting from 0.
/*

- Key Characteristics
- Can store multiple data types (numbers, strings, objects, functions, etc.)
- Elements are ordered
- Index-based access (0, 1, 2, ...)
- Arrays are mutable (can be changed after creation)
- Dynamic size (can grow or shrink)

*/

// create an array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

// another way to create an array.
let myarr = new Array();

// modify an array 
let arr1 = [1, 2, 3, 4];
arr1[2] = 12;
console.log(arr1); // [ 1, 2, 12, 4 ]

// push() is a JavaScript array method used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.
// Syntax:  array.push(element1, element2, ..., elementN)

arr1.push(5000);
console.log(arr1); // [ 1, 2, 12, 4, 5000 ]

let numbers = [11, 12, 13];
numbers.push(4);
console.log(numbers); // [ 11, 12, 13, 4 ]

// Adding multiple elements

let fruits = ["apple"];

fruits.push("banana", "mango");

console.log(fruits); // ["apple", "banana", "mango"]

// pop() => pop() is a JavaScript array method used to remove the last element from an array. It modifies the original array and returns the removed element.

// Syntax: array.pop()

let removed = numbers.pop();
console.log(removed); // 4
console.log(numbers); // [ 11, 12, 13 ]

// When array is empty
let arr2 = [];

console.log(arr2.pop()); // undefined

// shift() is a JavaScript array method used to remove the first element from an array. It modifies the original array and returns the removed element.

let queue = ["task1", "task2", "task3"];

let firstTrack = queue.shift();
console.log(firstTrack); // task1
console.log(queue); // [ 'task2', 'task3' ]

// When array is empty
let dataList = [];

console.log(dataList.shift()); // undefined

// unshift() is a JavaScript array method used to add one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array.

// Syntax:  array.unshift(element1, element2, ..., elementN)

let playlist = ["song2", "song3"];

let newLength = playlist.unshift("song1");

console.log(newLength); // 3
console.log(playlist); // [ 'song1', 'song2', 'song3' ]

// Adding multiple elements

let tasks = ["task3"];

tasks.unshift("task1", "task2");

console.log(tasks); // [ 'task1', 'task2', 'task3' ]

// splice() is a JavaScript array method used to add, remove, or replace elements in an array at a specific index.It modifies the original array and returns an array of removed elements.

// Syntax:  array.splice(startIndex, deleteCount, item1, item2, ..., itemN)

/*

Parameters
startIndex → index where the change starts
deleteCount → number of elements to remove
item1, item2, ... → elements to add (optional)

*/

// Example 1: Remove elements
let colors = ["red", "blue", "green", "yellow"];

let removedColors = colors.splice(1, 2);

console.log(removedColors); // [ 'blue', 'green' ]
console.log(colors); // [ 'red', 'yellow' ]

// Example 2: Add elements

let steps = ["step1", "step4"];

steps.splice(1, 0, "step2", "step3");
console.log(steps); // ["step1", "step2", "step3", "step4"]

/*
// Initial array
["step1", "step4"]

// Index positions:
Index:  0        1
Value: "step1"  "step4"

Understanding splice(1, 0, "step2", "step3")

1 → start index
Start modifying the array at index 1
This is before "step4"

0 → delete count
Remove 0 elements
So nothing is deleted

"step2", "step3" → elements to insert
These values are inserted starting at index 1

What happens internally
"step4" is shifted to the right
"step2" and "step3" are placed at index 1

Final array (output): ["step1", "step2", "step3", "step4"]

Visual representation:

Before: ["step1",        "step4"]
                ↑
             index 1

After:  ["step1", "step2", "step3", "step4"]

*/

// Example 3: Replace elements
let scores = [10, 20, 40];
scores.splice(2, 1, 30);
console.log(scores); // [ 10, 20, 30 ]

/*
// Explaination:

2 → start index
Start the operation at index 2
Index 2 refers to the value 40

Index:   0    1    2
Value:  10   20   40

1 → delete count
Remove 1 element starting from index 2
So 40 is removed

30 → new element to insert
After removing 40, 30 is inserted at index 2

Visual explanation
Before: [10, 20, 40]
                  ↑
               index 2

After remove: [10, 20]
Insert 30 →   [10, 20, 30]

*/

// slice() is a JavaScript array method used to extract a portion of an array and return it as a new array without changing the original array.

// Syntax: array.slice(startIndex, endIndex)
// endIndex is not included

// Example 1: Basic slicing
let numbers1 = [10, 20, 30, 40, 50];

let part = numbers1.slice(1, 4);

console.log(part);    // [20, 30, 40]
console.log(numbers1); // [10, 20, 30, 40, 50]

/*
// How indexes work 
Index:   0    1    2    3    4
Value: 10   20   30   40   50
            ↑         ↑
         start      end (not included)

*/

// Example 2: Copy an array
let original = ["a", "b", "c"];

let copy = original.slice();
console.log(copy);  // [ 'a', 'b', 'c' ]

// Example 3: Using negative indexes
let colors1 = ["red", "blue", "green", "yellow"];

let lastTwo = colors1.slice(-2);

console.log(lastTwo); // ["green", "yellow"]

/*

Step 1: Index positions
Index:    0        1        2         3
Value:  "red"   "blue"   "green"   "yellow"

Step 2: Meaning of -2
Negative index means count from the end
Array length = 4
-2 → length - 2 = 4 - 2 = 2

So internally:

slice(-2)  →  slice(2)

Step 3: Extract from index 2 to end

Start at index 2
End index is not provided → go till end

Visual extraction

Original: ["red", "blue", | "green", "yellow"]
                           ↑ start here

Step 4: Create a NEW array

lastTwo = ["green", "yellow"];
 
// Key rule to remember:  array.slice(-n)
returns the last n elements

*/

// reverse() is a JavaScript array method used to reverse the order of elements in an array. It modifies the original array and also returns the reversed array.

// Syntax: array.reverse()

let letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters); // [ 'd', 'c', 'b', 'a' ]

// Reverse WITHOUT changing original array

let nums = [1, 2, 3];
let reversedCopy = nums.slice().reverse();
console.log(reversedCopy); // [ 3, 2, 1 ]
console.log(nums); // [ 1, 2, 3 ]

// sort() is a JavaScript array method used to sort the elements of an array. It modifies the original array and returns the sorted array.
// sort() => accept a function.
// Syntax: array.sort(compareFunction)
// compareFunction → optional function that defines the sort order

// Example 1: Default sorting (⚠️ lexicographical)
let values = [1, 10, 2, 21];

values.sort();

console.log(values); // [1, 10, 2, 21] ❌

// Why? => Numbers are converted to strings. Compared by Unicode (dictionary) order

// Example 2: Correct numeric sorting (ascending order => a-b)

let arr3 = [11, 62, 3, 4, 25];
let sr = arr3.sort(function (a, b) {
  return a - b; // ascending order
})
console.log(sr); // [ 3, 4, 11, 25, 62 ]

let sr1 = arr3.sort(function (a, b){
  return b - a; // descending order
})
console.log(sr1); // [ 62, 25, 11, 4, 3 ]

// Example 2: Correct numeric sorting (ascending)
let scores1 = [40, 5, 100, 20];

scores1.sort((a, b) => a - b);

console.log(scores1); // [5, 20, 40, 100]

// Example 3: Descending order
let marks = [40, 5, 100, 20];

marks.sort((a, b) => b - a); // b-a => descending order

console.log(marks); // [100, 40, 20, 5]

/*

How compare function works (internally)
(a, b) => a - b

| Return value | Meaning              |
| ------------ | -------------------- |
|  < 0         |  a  comes before  b  |
|  > 0         |  b  comes before  a  |
|  0           | No change            |

*/


// Example 4: Sorting strings

let names = ["banana", "apple", "cherry"];
names.sort();
console.log(names); // [ 'apple', 'banana', 'cherry' ]

// Sort without mutating original array
let num1 = [3, 1, 2];
let sorted = num1.slice().sort((a, b) => a - b);

console.log(sorted); // [ 1, 2, 3 ]
console.log(num1); // [ 3, 1, 2 ]


// sort(), map(), filter(), reduce(), forEach() => one thing is common all accept the function. 


// forEach() is a JavaScript array method used to execute a function once for each element of an array. It does not return a new array and is mainly used for side effects (like logging, updating values, etc.).
// “Each time, forEach runs the function for every single element of the array.”
/*

Syntax: array.forEach((element, index, array) => {
  // logic
});

*/

let arr4 = [11, 6, 3, 4, 25];

arr4.forEach(function (val){
  console.log(val);
});
/*
Output:

11
6
3
4
25

*/

// Example 1: Basic usage
let numbers2 = [10, 20, 30];
numbers2.forEach((value) => {
  console.log(value);
}) 
/*

Output:
10
20
30

*/

// Example 2: Using index
let fruits1 = ["apple", "banana", "mango"];

fruits1.forEach((item, idx) => {
  console.log(idx, item);
})
/*
0 apple
1 banana
2 mango
*/

// Example 3: Modifying original array
let scores2 = [1, 2, 3];
scores2.forEach((num, i) => {
  scores[i] = num * 2;
});
console.log(scores); // [2, 4, 6]
/*

// How forEach() works internally (visual)
Array: [10, 20, 30]

Step 1 → callback(10, 0)
Step 2 → callback(20, 1)
Step 3 → callback(30, 2)

- forEach() vs map()

| Feature           |  forEach()   |  map()        |
| ----------------- | ------------ | --------------|
| Returns new array |   No         |  Yes          |
| Use case          | Side effects | Transformation|

*/

// map() is a JavaScript array method used to create a new array by applying a function to each element of an existing array. It does not modify the original array.

// “Use map only when you want to create a new array based on existing data.”
// “As soon as you see map, imagine that a blank new array is being created.”

// “Whenever you see a case where a new array will be created from an existing array, and this new array will contain some transformed values, that’s when you should use map.”

/*
// Syntax:

array.map((element, index, array) => {
  return newValue;
});

*/

// Example 1: Basic usage
let numbers3 = [12, 22, 33];
let squared = numbers.map(num => num * num);
console.log(squared); // [ 121, 144, 169 ]
console.log(numbers); // [ 11, 12, 13 ]

// Example 2: Using index
let items = ["a", "b", "c"];
let labeled = items.map((value, index) => `${index}-${value}`);
console.log(labeled); // [ '0-a', '1-b', '2-c' ]


let result = numbers.map(num => {
  num * 2; //  missing return
});
// if you return nothing then that condition return undefined.
console.log(result); // [undefined, undefined, undefined]

// correct =>  numbers.map(num => num * 2);


let myAman = [11, 62, 3, 4, 25];
let newAman = myAman.map(function (val) {
  if (val > 10) return val;
});
console.log(newAman); // [ 11, 62, undefined, undefined, 25 ]


// filter() is a JavaScript array method used to create a new array containing only the elements that pass a certain condition. It does not modify the original array.

/*
Syntax:

array.filter((element, index, array) => {
  return condition; // true or false
});

*/

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];

let newarr = arr5.filter(function(val){
  if (val > 4) return true;
});

console.log(newarr); // [ 5, 6, 7, 8 ]

// Example 1: Basic usage
let num = [10, 20, 30, 40];
let filtered = num.filter(num => num > 20);

console.log(filtered); // [ 30, 40 ]
console.log(num); // [ 10, 20, 30, 40 ]

/*

How filter() works internally (visual)

Original array: [10, 20, 30, 40]

Step 1 → 10 → 10 > 20? ❌ → ignore
Step 2 → 20 → 20 > 20? ❌ → ignore
Step 3 → 30 → 30 > 20? ✅ → include
Step 4 → 40 → 40 > 20? ✅ → include

New array: [30, 40]

*/

// Example 2: Using index
let items1 = ["apple", "banana", "cherry"];
let filteredItems = items1.filter((item, idx) => idx % 2 === 0);
console.log(filteredItems); // [ 'apple', 'cherry' ]

/*
// filter() vs map()

| Feature            | `filter()`                          | `map()`                 |
| ------------------ | ----------------------------------- | ----------------------- |
| Returns array      |   Yes                               |   Yes                   |
| Number of elements | ≤ original                          | = original              |
| Use case           | Keep elements that pass a condition | Transform every element |

*/

// reduce() is a JavaScript array method used to reduce an array to a single value (number, string, object, array, etc.) by applying a function to each element.

// “Creating a single value from an array — reducing a large array into one single value.”

/*
Syntax:

array.reduce((accumulator, currentValue, index, array) => {
  return updatedAccumulator;
}, initialValue);  // here initialValue is treated as the accumulator.

- Key terms
- Accumulator (acc) → stores the result after each iteration
- Current value (curr) → current element of the array
- Initial value → starting value of the accumulator

*/

// Example 1: Sum of numbers

let nums1 = [10, 20, 30];
let total = nums1.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(total); // 60

/*
How reduce() works internally (visual)

Initial accumulator = 0

Step 1 → acc = 0  + 10 = 10
Step 2 → acc = 10 + 20 = 30
Step 3 → acc = 30 + 30 = 60

Final result = 60

*/

// Example 2: Without initial value

let values1 = [5, 10, 15];
let result1 = values1.reduce((acc, curr) => acc + curr);
console.log(result1); // 30

// First element becomes the accumulator
// Loop starts from second element

// Example 3: Reduce to an object
let fruits2 = ["apple", "banana", "apple"];
let count = fruits2.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {}); 
console.log(count); // { apple: 2, banana: 1 }


let arr6 = [1, 2, 3, 4, 5, 6];
let ans = arr6.reduce(function (accumulator, val){
  return accumulator + val;
}, 0);      
console.log(ans); // 21

/*
map(), filter(), reduce() mental model

| Method     | Result                 |
| ---------- | ---------------------- |
| `map()`    | Transform → new array  |
| `filter()` | Select → smaller array |
| `reduce()` | Combine → single value |

*/

// find() is a JavaScript array method used to return the first element that satisfies a given condition. If no element matches the condition, it returns undefined. It does not modify the original array.
/*

// Important points
- Returns only the first match
- Returns one element, not an array
- Stops once found (more efficient than filter)
- Returns undefined if not found
- Does not change original array

Syntax:  

array.find((element, index, array) => {
  return condition; // true or false
});

find() vs filter()

| Feature     | `find()`         | `filter()`       |
| ----------- | ---------------- | ---------------- |
| Return type | Single value     | Array            |
| Stops early |   Yes            |  No              |
| When to use | Need first match | Need all matches |

*/

let arr7 = [1, 2, 3, 1, 4, 5, 6];
let ans1 = arr7.find(function(val){
  return val === 1;
})
console.log(ans1); // 1

// Example 1: Basic usage
let number = [5, 102, 8, 130, 44];
let answer = number.find(num => num > 100);
console.log(answer); // 102

/*
How find() works internally (visual)
Array: [5, 102, 8, 130, 44]

Check 5   → 5 > 100 ❌
Check 12  → 102 > 100 ✅ → STOP

Returned value: 102

*/

// Example 2: Finding an object
let users = [
  {id: 1, name: "Aman"},
  { id: 2, name: "Rohit"}
];
let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Rohit' }

// Example 3
let arrAman = [
  { id: 1, key: 1},
  { id: 2, key: 2},
  { id: 3, key: 1}
];
let value = arrAman.find(function (val){
  return val.key === 1;
});
console.log(value); // { id: 1, key: 1 }


// some() is a JavaScript array method used to check whether at least one element in an array satisfies a given condition.It returns a boolean value (true or false) and does not modify the original array.

/*

Important points
- Returns true if any one element matches
- Returns false if none match
- Stops early once condition is met
- Does not modify the array

Syntax:

array.some((element, index, array) => {
  return condition; // true or false
});

*/

let arr8 = [10, 30, 32, 90];
let any = arr8.some(function(val){
  return val > 85;
});
console.log(any); // true


// Example 1: Basic usage 
let numbers4 = [3, 5, 8, 10];
let hasEven = numbers4.some(num => num % 2 === 0);
console.log(hasEven); // true
/*
How some() works internally (visual)

numbers4: [3, 5, 8, 10]

Check 3  → even? ❌
Check 5  → even? ❌
Check 8  → even? ✅ → STOP

Result: true

some() vs every()

| Feature     | `some()`          | `every()`        |
| ----------- | ----------------- | ---------------- |
| Condition   | At least one true | All must be true |
| Stops early |    Yes            |  Yes             |
| Return      | Boolean           | Boolean          |

*/

// Example 2: With objects

let users1 = [
  {name: "Aman", age: 17},
  { name: "Rohit", age: 22}
];
let hasAdult = users1.some(user1 => user1.age >= 18);
console.log(hasAdult); // true


// every() is a JavaScript array method used to check whether all elements in an array satisfy a given condition.It returns a boolean value (true or false) and does not modify the original array.

/*

Important points
- Returns true only if all elements pass
- Returns false if any one fails
- Stops early on first failure
- Does not modify the array

Syntax:

array.every((element, index, array) => {
  return condition; // true or false
});

every() vs some()

| Feature          | `every()`      | `some()`             |
| ---------------- | -------------- | -------------------- |
| Logic            | AND (all true) | OR (any true)        |
| Result true when | All match      | At least one matches |

*/

// Example 1: Basic usage
let numbers5 = [2, 4, 6, 8];
let allEven = numbers5.every(num => num % 2 === 0);

console.log(allEven); // true

/*

Array: [2, 4, 6, 8]

Check 2  → even? ✅
Check 4  → even? ✅
Check 6  → even? ✅
Check 8  → even? ✅

Result: true

*/

// Example 2: When condition fails
let values2 = [2, 4, 5, 8];
let ajay = values2.every(v => v % 2 === 0);
console.log(ajay); // false

/*
Check 2 → ✅
Check 4 → ✅
Check 5 → ❌ → STOP

Result: false

*/


// Destructuring , spread operator 
// Destructuring allows you to extract values from arrays or objects and store them in variables in a single line.

// Array Destructuring
let colors2 = ["red", "blue", "green"];
let [first, second] = colors2;
console.log(first); // "red"
console.log(second); // "blue"

// Skip values
let nums9 = [10, 20, 30];

let [, , third] = nums9;
console.log(third); // 30

// Object Destructuring
let user1 = {
  name: "Ajay",
  age: 22,
  city: "Delhi"
};

let { name, age } = user1;

console.log(name); // "Ajay"
console.log(age);  // 22

// Rename variables
let { name: username, city: location } = user1;

console.log(username); // "Aman"
console.log(location); // "Delhi"

// Spread Operator (...) => The spread operator is used to expand elements of an array or object. it will help to create a copy of an array.

// Spread with Arrays
let arr11 = [1, 2, 3];
let arr10 = [...arr11, 4, 5];

console.log(arr10); // [1, 2, 3, 4, 5]

// Copy array
let original1 = [10, 20];
let copy1 = [...original1];

console.log(copy1); // [ 10, 20 ]

// Spread with Objects
let user2 = { name: "Aman", age: 22 };

let updatedUser = { ...user2, city: "Delhi" };

console.log(updatedUser); // { name: "Aman", age: 22, city: "Delhi" }


// Destructuring + Spread together
let numbers6 = [1, 2, 3, 4];

let [first1, ...rest] = numbers6;

console.log(first1); // 1
console.log(rest);  // [2, 3, 4]


/*

Key Differences (Quick Table)

| Feature | Destructuring  | Spread               |
| ------- | -------------- | -------------------- |
| Purpose | Extract values | Expand / copy values |
| Symbol  | `{ }` or `[ ]` | `...`                |
| Returns | Variables      | New array/object     |

Mental Model:
Destructuring → “Take values out”
Spread → “Spread values in”

*/

// create a copy of an array
let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr13 = [...arr12];  // here create a copy of an array.
console.log(arr13); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

arr13.pop();
console.log(arr13); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(arr12); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

 
// Practice
// Use .map() to square each number:
let arr14 = [1, 2, 3, 4];
let newarr1 = arr14.map(function(val){
  return val * val;
});
console.log(newarr1); // [ 1, 4, 9, 16 ]

// Use .filter() to keep numbers greater than 10:
let arr15 = [5, 12, 8, 20, 3];
let answer1 = arr15.filter((val) => {
  return val > 10;
});
console.log(answer1); // [ 12, 20 ]

let raj = arr15.filter(val => val > 10);
console.log(raj); // [ 12, 20 ]

// Use .find() to get the first number less than 10;
let arr16 = [12, 15, 3, 8, 20];

let dilip = arr16.find(function (val) {
  return val < 10;
});
console.log(dilip); // 3

// Use .some() to check if any student has scored below 35;
let arr17 = [45, 60, 28, 90];
let rajan = arr17.some(function(val){
  return val < 35;
})
console.log(rajan); // true

// Use .every() to check if all numbers are even;
let arr18 = [2, 4, 6, 8, 10];
let vineet = arr18.every(function(val) {
  return val % 2 === 0;
})
console.log(vineet); // true

// Destructure this array to get firstName and lastName
let fullName = ["Aman", "Pandit"];
let [firstName, lastName] = fullName;
console.log(firstName); // Aman
console.log(lastName); // Pandit

// Merfe two arrays using spread operator:
let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c); // [ 1, 2, 3, 4 ]

// Add "India" to the start of this array using spread:
let countries = ["USA", "UK"];
countries = ["India", ...countries];
console.log(countries); // [ 'India', 'USA', 'UK' ]

// Clone this array properly (not by reference):

let arr19 = [1, 2, 3];
let arr20 = [...arr19];
console.log(arr20); // [ 1, 2, 3 ]

// Common Confusions:

// splice vs slice: If you use splice, it modifies the original array. On the other hand, slice returns a new array based on the condition you apply, without changing the original array.
// splice changes the original array, whereas slice creates and returns a new array.

// map vs forEach: When you use forEach, you iterate over each element of an array and execute a function, but return is not available—it does not create a new array. In scenarios where you want to create a new array based on the existing elements, you should use map. It iterates over each element and returns a value, which is collected into a new array.
// forEach is used to iterate over an array without returning a new array, while map is used to create a new array by returning a value for each element.

// problem with .sort()

[100, 20, 3].sort(); // [ 100, 20, 3 ] -> "100", "20", "3" (wrong)
[100, 20, 3].sort(); // [100, 20, 3] ❌

// Explanation (corrected):
// By default, sort() converts elements to strings and compares them in lexicographical (dictionary) order, not numerical order. So the numbers are compared as "100", "20", and "3", which results in an incorrect numeric sort.

// Correct way to sort numbers:
let aman = [100, 20, 3].sort((a, b) => a - b); // [3, 20, 100]  // (a -b) => ascending order.

console.log(aman); // [ 3, 20, 100 ]
// One-line summary:
// Array.sort() sorts values as strings by default, so for numeric sorting, you must provide a compare function.

// If the elements of an array are characters or strings, you can sort them directly using the .sort() method. However, for numeric values, .sort() does not work correctly unless you provide a compare function.

// Character Array
const chars = ['d', 'a', 'c', 'b'];
chars.sort();

console.log(chars); // ['a', 'b', 'c', 'd']

// String Array
const fruits3 = ['banana', 'apple', 'mango'];
fruits3.sort();

console.log(fruits3); // ['apple', 'banana', 'mango']

// Numeric Array (Wrong without compare function)
const numbers7 = [100, 20, 3];
numbers7.sort();

console.log(numbers7); // [100, 20, 3] ❌

// Numeric Array (Correct way)
numbers7.sort((a, b) => a - b);

console.log(numbers7); // [3, 20, 100] ✅

// Summary => .sort() works directly for strings and characters because they are compared lexicographically, but numbers require a compare function for correct sorting.


