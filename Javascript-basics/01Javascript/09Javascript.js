// Array Methods Examples

// ==============================================
// 1. push() - Adds elements to the end of an array
// ==============================================

// Definition: Adds one or more elements to the end of an array and returns the new length
const fruits = ['apple', 'banana'];
console.log('1. push() Examples:');
console.log('Original array:', fruits);

// Example 1: Basic push
const pushResult1 = fruits.push('orange');
console.log('After push("orange"):', fruits, 'New length:', pushResult1);

// Example 2: Multiple elements
const pushResult2 = fruits.push('grape', 'mango');
console.log('After multiple pushes:', fruits);

// Example 3: Pushing array (creates nested array)
const pushResult3 = fruits.push(['berries', 'kiwi']);
console.log('After pushing array:', fruits);

// Example 4: Dynamic pushing with loop
const numbersArray = [1, 2];
for (let i = 3; i <= 5; i++) {
    numbersArray.push(i);
}
console.log('After loop pushing:', numbersArray);

// Example 5: Pushing objects
const userList = [{name: 'John'}, {name: 'Jane'}];
userList.push({name: 'Bob'});
console.log('After pushing object:', userList);

/*
Output:

1. push() Examples:
Original array: [ 'apple', 'banana' ]
After push("orange"): [ 'apple', 'banana', 'orange' ] New length: 3
After multiple pushes: [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
After pushing array: [
  'apple',
  'banana',
  'orange',
  'grape',
  'mango',
  [ 'berries', 'kiwi' ]
]
After loop pushing: [ 1, 2, 3, 4, 5 ]
After pushing object: [ { name: 'John' }, { name: 'Jane' }, { name: 'Bob' } ]

*/

// ==============================================
// 2. pop() - Removes last element from array
// ==============================================

// Definition: Removes the last element from an array and returns that element
const colors = ['red', 'green', 'blue', 'yellow'];
console.log('\n2. pop() Examples:');
console.log('Original array:', colors);

// Example 1: Basic pop
const poppedColor = colors.pop();
console.log('Popped element:', poppedColor, 'Remaining:', colors);

// Example 2: Multiple pops
colors.pop();
colors.pop();
console.log('After multiple pops:', colors);

// Example 3: Pop from empty array
const emptyArray = [];
const result = emptyArray.pop();
console.log('Pop from empty array:', result);

// Example 4: Using pop in function
function getAndRemoveLast(arr) {
    return arr.pop();
}
const testArray = [10, 20, 30];
console.log('Function result:', getAndRemoveLast(testArray), 'Array after:', testArray);

// Example 5: Stack implementation using pop/push
const stack = [];
stack.push('task1');
stack.push('task2');
const completedTask = stack.pop();
console.log('Stack - Completed:', completedTask, 'Remaining tasks:', stack);

/*
Output:

2. pop() Examples:
Original array: [ 'red', 'green', 'blue', 'yellow' ]
Popped element: yellow Remaining: [ 'red', 'green', 'blue' ]
After multiple pops: [ 'red' ]
Pop from empty array: undefined
Function result: 30 Array after: [ 10, 20 ]
Stack - Completed: task2 Remaining tasks: [ 'task1' ]

*/

// ==============================================
// 3. shift() - Removes first element from array
// ==============================================

// Definition: Removes the first element from an array and returns that element
const animals = ['cat', 'dog', 'elephant', 'giraffe'];
console.log('\n3. shift() Examples:');
console.log('Original array:', animals);

// Example 1: Basic shift
const firstAnimal = animals.shift();
console.log('Shifted element:', firstAnimal, 'Remaining:', animals);

// Example 2: Queue implementation (FIFO)
const queue = ['person1', 'person2', 'person3'];
const servedPerson = queue.shift();
console.log('Queue - Served:', servedPerson, 'Waiting:', queue);

// Example 3: Multiple shifts
animals.shift();
console.log('After second shift:', animals);

// Example 4: Shift with while loop
const taskQueue = ['taskA', 'taskB', 'taskC'];
while (taskQueue.length > 0) {
    const currentTask = taskQueue.shift();
    console.log('Processing:', currentTask);
}
console.log('All tasks processed');

// Example 5: Performance consideration
const largeArray = new Array(1000).fill('item');
console.time('shiftLargeArray');
largeArray.shift();
console.timeEnd('shiftLargeArray');

/*
Output:

3. shift() Examples:
Original array: [ 'cat', 'dog', 'elephant', 'giraffe' ]
Shifted element: cat Remaining: [ 'dog', 'elephant', 'giraffe' ]
Queue - Served: person1 Waiting: [ 'person2', 'person3' ]
After second shift: [ 'elephant', 'giraffe' ]
Processing: taskA
Processing: taskB
Processing: taskC
All tasks processed
shiftLargeArray: 0.08ms

*/

// ==============================================
// 4. unshift() - Adds elements to the beginning
// ==============================================

// Definition: Adds one or more elements to the beginning of an array
const vehicles = ['car', 'bike'];
console.log('\n4. unshift() Examples:');
console.log('Original array:', vehicles);

// Example 1: Basic unshift
const unshiftResult = vehicles.unshift('truck');
console.log('After unshift("truck"):', vehicles, 'New length:', unshiftResult);

// Example 2: Multiple elements
vehicles.unshift('plane', 'boat');
console.log('After multiple unshifts:', vehicles);

// Example 3: Priority queue implementation
const priorityQueue = ['normal task'];
priorityQueue.unshift('high priority task');
console.log('Priority queue:', priorityQueue);

// Example 4: Reversing array using unshift
const original = [1, 2, 3];
const reversed = [];
original.forEach(item => reversed.unshift(item));
console.log('Reversed array:', reversed);

// Example 5: Performance test
const testArr = [];
console.time('unshiftPerformance');
for (let i = 0; i < 1000; i++) {
    testArr.unshift(i);
}
console.timeEnd('unshiftPerformance');

/*
Output:

4. unshift() Examples:
Original array: [ 'car', 'bike' ]
After unshift("truck"): [ 'truck', 'car', 'bike' ] New length: 3
After multiple unshifts: [ 'plane', 'boat', 'truck', 'car', 'bike' ]
Priority queue: [ 'high priority task', 'normal task' ]
Reversed array: [ 3, 2, 1 ]
unshiftPerformance: 0.157ms

*/

// ==============================================
// 5. map() - Creates new array with transformed elements
// ==============================================

// Definition: Creates a new array with the results of calling a function on every element
const numbers = [1, 2, 3, 4, 5];
console.log('\n5. map() Examples:');
console.log('Original array:', numbers);

// Example 1: Double each number
const doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled);

// Example 2: Convert to objects
const objects = numbers.map((num, index) => ({ value: num, id: index }));
console.log('Array of objects:', objects);

// Example 3: Extract properties
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const names = users.map(user => user.name);
console.log('User names:', names);

// Example 4: Transform with index
const indexed = numbers.map((num, idx) => `Item ${idx + 1}: ${num}`);
console.log('Indexed items:', indexed);

// Example 5: Complex transformation
const prices = [100, 200, 300];
const discountedPrices = prices.map((price, index) => ({
    original: price,
    discounted: price * (1 - (index * 0.1)),
    savings: price * (index * 0.1)
}));
console.log('Discounted prices:', discountedPrices);

/*
Output:

5. map() Examples:
Original array: [ 1, 2, 3, 4, 5 ]
Doubled numbers: [ 2, 4, 6, 8, 10 ]
Array of objects: [
  { value: 1, id: 0 },
  { value: 2, id: 1 },
  { value: 3, id: 2 },
  { value: 4, id: 3 },
  { value: 5, id: 4 }
]
User names: [ 'Alice', 'Bob', 'Charlie' ]
Indexed items: [ 'Item 1: 1', 'Item 2: 2', 'Item 3: 3', 'Item 4: 4', 'Item 5: 5' ]
Discounted prices: [
  { original: 100, discounted: 100, savings: 0 },
  { original: 200, discounted: 180, savings: 20 },
  { original: 300, discounted: 240, savings: 60 }
]

*/

// ==============================================
// 6. filter() - Filters elements based on condition
// ==============================================

// Definition: Creates a new array with elements that pass a test
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('\n6. filter() Examples:');
console.log('Original array:', mixedNumbers);

// Example 1: Filter even numbers
const evens = mixedNumbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evens);

// Example 2: Filter objects
const people = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 16 },
    { name: 'Smith', age: 30 }
];
const adults = people.filter(person => person.age >= 18);
console.log('Adults:', adults);

// Example 3: Filter by string length
const words = ['apple', 'banana', 'cat', 'elephant', 'dog'];
const longWords = words.filter(word => word.length > 4);
console.log('Long words:', longWords);

// Example 4: Multiple conditions
const products = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Phone', price: 500, inStock: false },
    { name: 'Tablet', price: 300, inStock: true }
];
const affordableInStock = products.filter(p => p.price < 800 && p.inStock);
console.log('Affordable in-stock products:', affordableInStock);

// Example 5: Remove falsy values
const mixedValues = [0, 1, false, 2, '', 3, null, undefined, 4];
const truthyValues = mixedValues.filter(Boolean);
console.log('Truthy values:', truthyValues);

/*
Output:

6. filter() Examples:
Original array: [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
Even numbers: [ 2, 4, 6, 8, 10 ]
Adults: [ { name: 'Jane', age: 25 }, { name: 'Smith', age: 30 } ]
Long words: [ 'apple', 'banana', 'elephant' ]
Affordable in-stock products: [ { name: 'Tablet', price: 300, inStock: true } ]
Truthy values: [ 1, 2, 3, 4 ]

*/

// ==============================================
// 7. reduce() - Reduces array to single value
// ==============================================

// Definition: Executes a reducer function on each element, resulting in a single output value
const reduceNumbers = [1, 2, 3, 4, 5];
console.log('\n7. reduce() Examples:');
console.log('Original array:', reduceNumbers);

// Example 1: Sum of numbers
const sum = reduceNumbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);

// Example 2: Find maximum
const max = reduceNumbers.reduce((acc, curr) => Math.max(acc, curr));
console.log('Maximum:', max);

// Example 3: Group by property
const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' },
    { type: 'vegetable', name: 'broccoli' }
];
const grouped = items.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item.name);
    return acc;
}, {});
console.log('Grouped items:', grouped);

// Example 4: Flatten array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log('Flattened array:', flattened);

// Example 5: Complex aggregation
const sales = [
    { product: 'A', amount: 100 },
    { product: 'B', amount: 200 },
    { product: 'A', amount: 150 },
    { product: 'C', amount: 300 }
];
const salesByProduct = sales.reduce((acc, sale) => {
    acc[sale.product] = (acc[sale.product] || 0) + sale.amount;
    return acc;
}, {});
console.log('Sales by product:', salesByProduct);

/*
Output:

7. reduce() Examples:
Original array: [ 1, 2, 3, 4, 5 ]
Sum: 15
Maximum: 5
Grouped items: { fruit: [ 'apple', 'banana' ], vegetable: [ 'carrot', 'broccoli' ] }
Flattened array: [ 1, 2, 3, 4, 5, 6 ]
Sales by product: { A: 250, B: 200, C: 300 }

*/

// ==============================================
// 8. forEach() - Executes function for each element
// ==============================================

// Definition: Executes a provided function once for each array element
const forEachArray = ['a', 'b', 'c', 'd'];
console.log('\n8. forEach() Examples:');
console.log('Original array:', forEachArray);

// Example 1: Basic iteration
console.log('Iterating with forEach:');
forEachArray.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

// Example 2: DOM manipulation simulation
const domElements = ['div1', 'div2', 'div3'];
const simulatedDOM = {};
domElements.forEach(id => {
    simulatedDOM[id] = { innerHTML: `Content for ${id}` };
});
console.log('Simulated DOM:', simulatedDOM);

// Example 3: Side effects
const sideEffectArray = [1, 2, 3];
const results = [];
sideEffectArray.forEach(num => results.push(num * 2));
console.log('Results from side effects:', results);

// Example 4: Cannot break forEach
const breakTest = [1, 2, 3, 4, 5];
console.log('Trying to break forEach:');
breakTest.forEach(num => {
    if (num === 3) return; // This doesn't break the loop
    console.log(num);
});

// Example 5: Async operations simulation
const asyncItems = ['task1', 'task2', 'task3'];
console.log('Simulating async operations:');
asyncItems.forEach(async (item, index) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log(`Completed ${item} at index ${index}`);
});

/*
Output:

8. forEach() Examples:
Original array: [ 'a', 'b', 'c', 'd' ]
Iterating with forEach:
Index 0: a
Index 1: b
Index 2: c
Index 3: d
Simulated DOM: {
  div1: { innerHTML: 'Content for div1' },
  div2: { innerHTML: 'Content for div2' },
  div3: { innerHTML: 'Content for div3' }
}
Results from side effects: [ 2, 4, 6 ]
Trying to break forEach:
1
2
4
5
Simulating async operations:

*/

// ==============================================
// 9. find() - Finds first element that satisfies condition
// ==============================================

// Definition: Returns the first element that satisfies the provided testing function
const findArray = [5, 12, 8, 130, 44];
console.log('\n9. find() Examples:');
console.log('Original array:', findArray);

// Example 1: Find first large number
const found = findArray.find(num => num > 10);
console.log('First number > 10:', found);

// Example 2: Find object by property
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];
const result1 = inventory.find(item => item.name === 'cherries');
console.log('Found item:', result1);

// Example 3: Find with complex condition
const usersFind = [
    { id: 1, name: 'John', active: true },
    { id: 2, name: 'Jane', active: false },
    { id: 3, name: 'Doe', active: true }
];
const activeUser = usersFind.find(user => user.active && user.id > 1);
console.log('First active user with id > 1:', activeUser);

// Example 4: Find undefined when not found
const notFound = findArray.find(num => num > 200);
console.log('Search for > 200:', notFound);

// Example 5: Find last occurrence (using reverse)
const duplicates = [1, 2, 3, 2, 1];
const lastTwo = [...duplicates].reverse().find(num => num === 2);
console.log('Last occurrence of 2:', lastTwo);

/*
Output:

9. find() Examples:
Original array: [ 5, 12, 8, 130, 44 ]
First number > 10: 12
Found item: { name: 'cherries', quantity: 5 }
First active user with id > 1: { id: 3, name: 'Doe', active: true }
Search for > 200: undefined
Last occurrence of 2: 2

*/

// ==============================================
// 10. findIndex() - Finds index of first matching element
// ==============================================

// Definition: Returns the index of the first element that satisfies the testing function
const findIndexArray = [5, 12, 8, 130, 44];
console.log('\n10. findIndex() Examples:');
console.log('Original array:', findIndexArray);

// Example 1: Find index of first large number
const index = findIndexArray.findIndex(num => num > 10);
console.log('Index of first number > 10:', index);

// Example 2: Find index in object array
const peopleIndex = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const bobIndex = peopleIndex.findIndex(person => person.name === 'Bob');
console.log('Index of Bob:', bobIndex);

// Example 3: Returns -1 when not found
const notFoundIndex = findIndexArray.findIndex(num => num > 200);
console.log('Index of number > 200:', notFoundIndex);

// Example 4: Using findIndex to remove element
const removeArray = [10, 20, 30, 40, 50];
const indexToRemove = removeArray.findIndex(num => num === 30);
if (indexToRemove !== -1) {
    removeArray.splice(indexToRemove, 1);
}
console.log('After removing 30:', removeArray);

// Example 5: Find first prime number index
const numbersForPrime = [4, 6, 8, 7, 9, 10];
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};
const primeIndex = numbersForPrime.findIndex(isPrime);
console.log('Index of first prime:', primeIndex);

/*
Output:

10. findIndex() Examples:
Original array: [ 5, 12, 8, 130, 44 ]
Index of first number > 10: 1
Index of Bob: 1
Index of number > 200: -1
After removing 30: [ 10, 20, 40, 50 ]
Index of first prime: 3

*/

// ==============================================
// 11. includes() - Checks if array contains value
// ==============================================

// Definition: Determines whether an array includes a certain value
const includesArray = [1, 2, 3, 4, 5];
console.log('\n11. includes() Examples:');
console.log('Original array:', includesArray);

// Example 1: Basic includes check
const hasThree = includesArray.includes(3);
console.log('Includes 3:', hasThree);

// Example 2: Includes with fromIndex
const hasThreeFromIndex2 = includesArray.includes(3, 3);
console.log('Includes 3 from index 3:', hasThreeFromIndex2);

// Example 3: String array includes
const fruitsInclude = ['apple', 'banana', 'orange'];
const hasBanana = fruitsInclude.includes('banana');
console.log('Includes banana:', hasBanana);

// Example 4: Case sensitivity
const caseSensitive = ['Apple', 'Banana'];
const hasApple = caseSensitive.includes('apple');
console.log('Case sensitive check for "apple":', hasApple);

// Example 5: Using includes for validation
const validOptions = ['yes', 'no', 'maybe'];
const userInput = 'yes';
const isValid = validOptions.includes(userInput.toLowerCase());
console.log(`Is "${userInput}" valid?`, isValid);

/*
Output:


11. includes() Examples:
Original array: [ 1, 2, 3, 4, 5 ]
Includes 3: true
Includes 3 from index 3: false
Includes banana: true
Case sensitive check for "apple": false
Is "yes" valid? true

*/

// ==============================================
// 12. indexOf() - Finds first index of element
// ==============================================

// Definition: Returns the first index at which a given element can be found
const indexOfArray = ['apple', 'banana', 'orange', 'banana'];
console.log('\n12. indexOf() Examples:');
console.log('Original array:', indexOfArray);

// Example 1: Basic indexOf
const bananaIndex = indexOfArray.indexOf('banana');
console.log('First index of banana:', bananaIndex);

// Example 2: indexOf with fromIndex
const secondBananaIndex = indexOfArray.indexOf('banana', 2);
console.log('Index of banana from index 2:', secondBananaIndex);

// Example 3: Element not found
const mangoIndex = indexOfArray.indexOf('mango');
console.log('Index of mango:', mangoIndex);

// Example 4: Using indexOf to check uniqueness
const hasDuplicates = (arr) => {
    return arr.some((item, index) => arr.indexOf(item) !== index);
};
const uniqueArray = [1, 2, 3];
const duplicateArray = [1, 2, 2, 3];
console.log('Has duplicates - uniqueArray:', hasDuplicates(uniqueArray));
console.log('Has duplicates - duplicateArray:', hasDuplicates(duplicateArray));

// Example 5: Remove all occurrences
const removeAll = (arr, value) => {
    let index;
    while ((index = arr.indexOf(value)) !== -1) {
        arr.splice(index, 1);
    }
    return arr;
};
const testRemove = ['a', 'b', 'c', 'a', 'b'];
console.log('After removing all "a":', removeAll([...testRemove], 'a'));

/*
Output:

12. indexOf() Examples:
Original array: [ 'apple', 'banana', 'orange', 'banana' ]
First index of banana: 1
Index of banana from index 2: 3
Index of mango: -1
Has duplicates - uniqueArray: false
Has duplicates - duplicateArray: true
After removing all "a": [ 'b', 'c', 'b' ]

*/

// ==============================================
// 13. sort() - Sorts array elements
// ==============================================

// Definition: Sorts the elements of an array (in place)
const sortArray = [3, 1, 4, 1, 5, 9, 2, 6];
console.log('\n13. sort() Examples:');
console.log('Original array:', sortArray);

// Example 1: Default sort (lexicographical)
const defaultSort = [...sortArray].sort();
console.log('Default sort:', defaultSort);

// Example 2: Numerical sort
const numericalSort = [...sortArray].sort((a, b) => a - b);
console.log('Numerical sort (ascending):', numericalSort);

// Example 3: Descending sort
const descendingSort = [...sortArray].sort((a, b) => b - a);
console.log('Numerical sort (descending):', descendingSort);

// Example 4: Object array sort
const peopleSort = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];
const sortedByAge = [...peopleSort].sort((a, b) => a.age - b.age);
console.log('Sorted by age:', sortedByAge);

// Example 5: String sort with locale
const internationalNames = ['Zoe', 'Åsa', 'Östen', 'Élodie'];
const sortedNames = [...internationalNames].sort((a, b) => 
    a.localeCompare(b, 'en', { sensitivity: 'base' })
);
console.log('Locale-sorted names:', sortedNames);

/*
Output:

13. sort() Examples:
Original array: [
  3, 1, 4, 1,
  5, 9, 2, 6
]
Default sort: [
  1, 1, 2, 3,
  4, 5, 6, 9
]
Numerical sort (ascending): [
  1, 1, 2, 3,
  4, 5, 6, 9
]
Numerical sort (descending): [
  9, 6, 5, 4,
  3, 2, 1, 1
]
Sorted by age: [
  { name: 'Jane', age: 25 },
  { name: 'John', age: 30 },
  { name: 'Doe', age: 35 }
]
Locale-sorted names: [ 'Åsa', 'Élodie', 'Östen', 'Zoe' ]

*/

// ==============================================
// 14. concat() - Merges arrays
// ==============================================

// Definition: Merges two or more arrays into a new array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log('\n14. concat() Examples:');
console.log('Array 1:', array1);
console.log('Array 2:', array2);

// Example 1: Basic concat
const concatenated = array1.concat(array2);
console.log('Concatenated array:', concatenated);

// Example 2: Multiple arrays
const array3 = [7, 8, 9];
const multiConcat = array1.concat(array2, array3);
console.log('Multiple concatenation:', multiConcat);

// Example 3: Concat with values
const withValues = array1.concat(10, 11, 12);
console.log('Concat with values:', withValues);

// Example 4: Nested arrays (shallow)
const nested1 = [[1]];
const nested2 = [[2]];
const nestedConcat = nested1.concat(nested2);
nestedConcat[0][0] = 999;
console.log('Nested concat (shallow):', nestedConcat, 'Original:', nested1);

// Example 5: Creating copies
const originalArray = [1, 2, 3];
const copyArray = originalArray.concat();
copyArray.push(4);
console.log('Original:', originalArray, 'Copy:', copyArray);

/*
Output:

14. concat() Examples:
Array 1: [ 1, 2, 3 ]
Array 2: [ 4, 5, 6 ]
Concatenated array: [ 1, 2, 3, 4, 5, 6 ]
Multiple concatenation: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
Concat with values: [ 1, 2, 3, 10, 11, 12 ]
Nested concat (shallow): [ [ 999 ], [ 2 ] ] Original: [ [ 999 ] ]
Original: [ 1, 2, 3 ] Copy: [ 1, 2, 3, 4 ]

*/

// ==============================================
// 15. slice() - Extracts portion of array
// ==============================================

// Definition: Returns a shallow copy of a portion of an array
const sliceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('\n15. slice() Examples:');
console.log('Original array:', sliceArray);

// Example 1: Basic slice
const slice1 = sliceArray.slice(2, 5);
console.log('slice(2, 5):', slice1);

// Example 2: Slice from start index
const slice2 = sliceArray.slice(5);
console.log('slice(5):', slice2);

// Example 3: Negative indices
const slice3 = sliceArray.slice(-3);
console.log('slice(-3):', slice3);

// Example 4: Copy entire array
const copy = sliceArray.slice();
console.log('Shallow copy:', copy, 'Same reference?', copy === sliceArray);

// Example 5: Extract middle portion
function getMiddle(arr) {
    const start = Math.floor(arr.length / 4);
    const end = Math.floor(3 * arr.length / 4);
    return arr.slice(start, end);
}
console.log('Middle portion:', getMiddle(sliceArray));

/*
Output:

15. slice() Examples:
Original array: [
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
slice(2, 5): [ 2, 3, 4 ]
slice(5): [ 5, 6, 7, 8, 9 ]
slice(-3): [ 7, 8, 9 ]
Shallow copy: [
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
] Same reference? false
Middle portion: [ 2, 3, 4, 5, 6 ]

*/

// ==============================================
// 16. splice() - Adds/removes elements at specific position
// ==============================================

// Definition: Changes the contents of an array by removing/replacing elements
console.log('\n16. splice() Examples:');

// Example 1: Remove elements
const spliceArray1 = [1, 2, 3, 4, 5];
const removed1 = spliceArray1.splice(2, 2);
console.log('After splice(2, 2):', spliceArray1, 'Removed:', removed1);

// Example 2: Insert elements
const spliceArray2 = [1, 2, 3, 4, 5];
spliceArray2.splice(2, 0, 'a', 'b');
console.log('After insert at index 2:', spliceArray2);

// Example 3: Replace elements
const spliceArray3 = [1, 2, 3, 4, 5];
const replaced = spliceArray3.splice(1, 2, 'x', 'y');
console.log('After replace:', spliceArray3, 'Replaced:', replaced);

// Example 4: Remove from end
const spliceArray4 = [1, 2, 3, 4, 5];
const fromEnd = spliceArray4.splice(-2, 1);
console.log('Remove from end:', spliceArray4, 'Removed:', fromEnd);

// Example 5: Complex manipulation
const data = ['Jan', 'March', 'April', 'June'];
data.splice(1, 0, 'Feb'); // Insert at index 1
data.splice(4, 1, 'May'); // Replace at index 4
console.log('Final data:', data);

/*
Output:

16. splice() Examples:
After splice(2, 2): [ 1, 2, 5 ] Removed: [ 3, 4 ]
After insert at index 2: [
  1, 2, 'a', 'b',
  3, 4, 5
]
After replace: [ 1, 'x', 'y', 4, 5 ] Replaced: [ 2, 3 ]
Remove from end: [ 1, 2, 3, 5 ] Removed: [ 4 ]
Final data: [ 'Jan', 'Feb', 'March', 'April', 'May' ]

*/

// ==============================================
// 17. some() - Tests if any element passes test
// ==============================================

// Definition: Tests whether at least one element passes the test
const someArray = [1, 2, 3, 4, 5];
console.log('\n17. some() Examples:');
console.log('Original array:', someArray);

// Example 1: Check for even numbers
const hasEven = someArray.some(num => num % 2 === 0);
console.log('Has even number?', hasEven);

// Example 2: Check object property
const productsSome = [
    { name: 'A', inStock: false },
    { name: 'B', inStock: true },
    { name: 'C', inStock: false }
];
const hasStock = productsSome.some(product => product.inStock);
console.log('Has product in stock?', hasStock);

// Example 3: Validation check
const userInputs = ['', 'John', ''];
const hasValidInput = userInputs.some(input => input.trim() !== '');
console.log('Has valid input?', hasValidInput);

// Example 4: Complex condition
const temperatures = [20, 25, 30, 35, 40];
const hasExtremeTemp = temperatures.some(temp => temp < 10 || temp > 35);
console.log('Has extreme temperature?', hasExtremeTemp);

// Example 5: Using with findIndex
const mixedData = [1, 'hello', 3, 'world'];
const hasString = mixedData.some(item => typeof item === 'string');
console.log('Has string?', hasString);

/*
Output:

17. some() Examples:
Original array: [ 1, 2, 3, 4, 5 ]
Has even number? true
Has product in stock? true
Has valid input? true
Has extreme temperature? true
Has string? true

*/

// ==============================================
// 18. every() - Tests if all elements pass test
// ==============================================

// Definition: Tests whether all elements pass the test
const everyArray = [2, 4, 6, 8, 10];
console.log('\n18. every() Examples:');
console.log('Original array:', everyArray);

// Example 1: Check if all even
const allEven = everyArray.every(num => num % 2 === 0);
console.log('All numbers even?', allEven);

// Example 2: Form validation
const formData = [
    { field: 'name', value: 'John', valid: true },
    { field: 'email', value: 'john@example.com', valid: true },
    { field: 'age', value: '25', valid: true }
];
const allValid = formData.every(field => field.valid);
console.log('All form fields valid?', allValid);

// Example 3: Array of arrays validation
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const allArraysValid = matrix.every(row => Array.isArray(row) && row.length === 3);
console.log('All rows valid?', allArraysValid);

// Example 4: Range validation
const scores = [85, 90, 78, 92, 88];
const allPassing = scores.every(score => score >= 60);
console.log('All scores passing?', allPassing);

// Example 5: Empty array behavior
const emptyCheck = [].every(num => num > 0);
console.log('Every on empty array:', emptyCheck); // true (vacuous truth)

/*
Output:

18. every() Examples:
Original array: [ 2, 4, 6, 8, 10 ]
All numbers even? true
All form fields valid? true
All rows valid? true
All scores passing? true
Every on empty array: true

*/

// ==============================================
// 19. flat() - Flattens nested arrays
// ==============================================

// Definition: Creates a new array with all sub-array elements concatenated
const nestedForFlat = [1, [2, [3, [4]], 5]];
console.log('\n19. flat() Examples:');
console.log('Original nested array:', nestedForFlat);

// Example 1: Default flatten (depth 1)
const flat1 = nestedForFlat.flat();
console.log('flat() - depth 1:', flat1);

// Example 2: Specify depth
const flat2 = nestedForFlat.flat(2);
console.log('flat(2) - depth 2:', flat2);

// Example 3: Infinite depth
const flatInfinity = nestedForFlat.flat(Infinity);
console.log('flat(Infinity):', flatInfinity);

// Example 4: Mixed arrays
const mixedNested = [1, [2, 3], [4, [5, 6]], 7];
const flattenedMixed = mixedNested.flat();
console.log('Mixed flatten:', flattenedMixed);

// Example 5: Removing empty slots
const withHoles = [1, , 3, , 5];
const flattenedHoles = withHoles.flat();
console.log('Flatten with holes:', flattenedHoles);

/*
Output:

19. flat() Examples:
Original nested array: [ 1, [ 2, [ 3, [Array] ], 5 ] ]
flat() - depth 1: [ 1, 2, [ 3, [ 4 ] ], 5 ]
flat(2) - depth 2: [ 1, 2, 3, [ 4 ], 5 ]
flat(Infinity): [ 1, 2, 3, 4, 5 ]
Mixed flatten: [ 1, 2, 3, 4, [ 5, 6 ], 7 ]
Flatten with holes: [ 1, 3, 5 ]

*/

// ==============================================
// 20. flatMap() - Maps then flattens result
// ==============================================

// Definition: First maps each element, then flattens the result (depth 1)
const flatMapArray = [1, 2, 3, 4];
console.log('\n20. flatMap() Examples:');
console.log('Original array:', flatMapArray);

// Example 1: Basic flatMap
const doubledAndFlattened = flatMapArray.flatMap(num => [num, num * 2]);
console.log('Doubled and flattened:', doubledAndFlattened);

// Example 2: Split strings
const sentences = ['Hello world', 'JavaScript array methods'];
const wordsFlatMap = sentences.flatMap(sentence => sentence.split(' '));
console.log('Split words:', wordsFlatMap);

// Example 3: Filter and map combined
const numbersFlatMap = [1, 2, 3, 4, 5, 6];
const evenDoubled = numbersFlatMap.flatMap(num => 
    num % 2 === 0 ? [num * 2] : []
);
console.log('Even numbers doubled:', evenDoubled);

// Example 4: Working with nested arrays
const dataSets = [[1, 2], [3, 4], [5, 6]];
const processed = dataSets.flatMap(pair => 
    pair.map(num => num * 10)
);
console.log('Processed nested arrays:', processed);

// Example 5: Complex transformation
const inventoryFlatMap = [
    { name: 'apples', quantities: [1, 2, 3] },
    { name: 'bananas', quantities: [4, 5] }
];
const allQuantities = inventoryFlatMap.flatMap(item => 
    item.quantities.map(q => ({ product: item.name, quantity: q }))
);
console.log('Flattened inventory:', allQuantities);

/*
Output:

20. flatMap() Examples:
Original array: [ 1, 2, 3, 4 ]
Doubled and flattened: [
  1, 2, 2, 4,
  3, 6, 4, 8
]
Split words: [ 'Hello', 'world', 'JavaScript', 'array', 'methods' ]
Even numbers doubled: [ 4, 8, 12 ]
Processed nested arrays: [ 10, 20, 30, 40, 50, 60 ]
Flattened inventory: [
  { product: 'apples', quantity: 1 },
  { product: 'apples', quantity: 2 },
  { product: 'apples', quantity: 3 },
  { product: 'bananas', quantity: 4 },
  { product: 'bananas', quantity: 5 }
]
Completed task1 at index 0
Completed task2 at index 1
Completed task3 at index 2

*/
