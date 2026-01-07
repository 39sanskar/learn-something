console.log("-------------- Loops ------------");
// Loops help us repeat code without rewriting it.

// 1 1 1 1 1 1 1 1 1 1  // here repetation of the 1
// 1  2  3  4  5  6  7  8  9  // here repetation of the print.

// kaha se jana hai -> kaha tak jana hai -> kaise jaana hai => for loop will be apply 

// kaha se jaana hai hai -> kab rukna hai -> kaise jaana hai => while loop will be apply (when the number of iterations is not known beforehand)

// From where to start → where to end → how to move  
// ⇒ for loop is used  
// Example: 1–40, 20–30, etc.

// From where to start → condition to stop → how to move  
// ⇒ while loop is used  
// (when the number of iterations is not known beforehand)

/*

// For Loop  => A for loop is used when: you know start, you know end, you know step/increment. 

for (initialization; condition; increment/decrement) {
  // code to be executed
}

// While Loop => You know when to stop. But you don’t know in advance how many times the loop will run.

while (condition) {
  // code to be executed
}


//  Key Difference (Syntax Level)

| Loop Type | Initialization | Condition   | Increment        |
| --------- | -------------- | ----------- | ---------------- |
| for       | Inside loop    | Inside loop | Inside loop      |
| while     | Outside loop   | Inside loop | Inside loop body |

*/

// 1. Iterating Over an Array (Most Common Use)
const users = ["Aman", "Ravi", "Neha", "Priya"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// 2. Processing API Data (Backend / Frontend)
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 250 },
  { id: 3, price: 400 }
];
let totalPrice = 0;
for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}

let totalId = 0;
for (let z = 0; z < products.length; z++) {
  totalId += products[z].id;
}
console.log(totalId); // 6
console.log(totalPrice); // 750

// 3. Validating User Input (Backend Logic)

const inputs = ["email", "", "password"];
let isValid = true;

for (let i = 0; i < inputs.length; i++) {
  if (!inputs[i]) {
    isValid = false;
    break; // stop early (performance optimization)
  } 
}
console.log(isValid);

// 4. Working with Database Records (Node.js / MongoDB)

// Simulated DB response
const Users = [
  { name: "Aman", isActive: true },
  { name: "Riya", isActive: false },
  { name: "Karan", isActive: true },
  { name: "Dilip", isActive: false },
  { name: "Ajay", isActive: false },
  { name: "Vaibhav", isActive: true }
];

const activeUsers = [];
const inactiveUsers = [];

// Segregate users based on active status
for (let index = 0; index < Users.length; index++) {
  const User = Users[index];

  if (User.isActive === true) {
    activeUsers.push(User);
  } else {
    inactiveUsers.push(User);
  }
}

// Structured logging (industry standard)
console.log({
  activeUsers,
  inactiveUsers,
});


// 5. Retry Logic (Very Common in Backend Systems)
const MAX_RETRIES = 3;

for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
  const success = Math.random() > 0.7;

  if (success) {
    console.log("Operation successful");
    break;
  }
  console.log(`Retry attempt ${attempt}`);
}

/*
// A while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true.

// While loop syntax
start
while(end){
  // code 
  change 
}

*/

// 1. Retry Logic (API / Database / Payment Gateway), Purpose: Fault tolerance
// Used in: payment systems, microservices, network calls
const MAX_ATTEMPTS = 3;
let attempt = 1;
let isSuccess = false;

while (!isSuccess && attempt <= MAX_ATTEMPTS) {
  try {
    console.log(`Attempt ${attempt}: Calling external service`);

    const response = Math.random() > 0.6; // simulated API call
    if (!response) throw new Error("Service unavailable");

    isSuccess = true;
    console.lop("Service call successful");
  } catch (error) {
    console.log(`Attempt ${attempt} failed`);
    attempt++;
  }
}


// 2. Processing a Job Queue (Background Worker). Purpose => Background processing
// Used in: cron jobs, message queues, worker services
const jobQueue = ["job1", "job2", "job3"];

while (jobQueue.length > 0) {
  const job = jobQueue.shift();
  console.log(`Processing ${job}`);
}


// 3. Polling Until a System Is Ready
// Used in: container startups, health checks, deployments
const MAX_CHECKS = 5;
let checkCount = 1;
let isServiceReady = false;

while (!isServiceReady && checkCount <= MAX_CHECKS) {
  console.log(`Checking service status (Attempt ${checkCount})`);

  isServiceReady = Math.random() > 0.7; // simulated health check

  if (!isServiceReady) {
    checkCount++;
  }
  
  if (!isServiceReady) {
    console.log("Service did not become ready");
  }
}


/*

// A do–while loop is a control flow statement that executes the loop body at least once, and then repeats execution as long as the given condition remains true.

do {
  // code to be executed
} while (condition);


| Loop Type | Condition Check | Minimum Execution |
| --------- | --------------- | ----------------- |
| for       | Before loop     | 0 times           |
| while     | Before loop     | 0 times           |
| do–while  | After loop      | **1 time**        |

// A do–while loop ensures at least one execution of the loop body by checking the condition after execution.

*/

/**
 * Database connection retry logic
 * - First connection attempt is mandatory
 * - Retries are limited
 * - Prevents infinite loops
*/

const MAX_CONNECTION_ATTEMPTS = 4;
let currentAttempt = 1;
let isConnected = false;

do {
  console.log(`DB connection attempt ${currentAttempt}`);

  try {
    // Simulated database connection
    isConnected = Math.random() > 0.6;

    if (!isConnected) {
      throw new Error("Database connection failed");
    }

    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Attempt ${currentAttempt} failed`);
  }

  currentAttempt++;
} while (!isConnected && currentAttempt <= MAX_CONNECTION_ATTEMPTS);

// Final fallback handling
if (!isConnected) {
  console.error("Application startup aborted: DB unavailable");
}

// break => break is a control statement used inside loops or switch statements to immediately terminate the execution of the loop or switch block, and transfer control to the statement following that block.

// Key Points: Stops the loop completely, Control moves outside the loop, Commonly used for early exit, error handling, or performance optimization

for (let i = 1; i < 5; i++) {
  console.log(i);
  if (i === 3){
    break;
  }
} // 1 2 3

// continue => continue is a control statement used inside loops to skip the current iteration and immediately move to the next iteration of the loop, without terminating the loop itself.

// Key Points: Skips remaining code in the current iteration, Loop continues with the next cycle, Used to ignore specific conditions without stopping the loop

for (let i = 1; i < 5; i++) {
  if (i === 3){ // go to the next instance
    continue;
  }
  console.log(i);
} // 1 2 4 (here 3 is not print, Skips remaining code in the current iteration)

// Questions:

// Q1. Print numbers from 1 to 5 using a for loop.
for (let i = 1; i <= 5; i++){
  // console.log(i)
} // 1 2 3 4 5

// Q2. Print numbers from 5 to 1 using a while loop.
let i = 5;
while(i>0){
  // console.log(i);
  i--;
} // 5 4 3 2 1

// Q3. Print even numbers from 1 to 6 using a for loop.
for (let i = 0; i <= 6; i++){
  if (i % 2 === 0){
    // console.log(i);
  }
} // 0 2 4 6

// Q4. Print odd numbers from 1 to 6 using a while loop.
let a = 1;
while(a <= 6){
  if (a%2 !== 0){
    // console.log(a);
  }
  a++;
} // 1 3 5 

// Q5. Print the  multiplication table of 5.
let table = 1;
while(table <= 50){
  if (table%5 === 0){
    // console.log(table);
  }
  table++;
} // 5 10 15 20 25 30 35 40 45 50

// using for loop.
for (let i = 1; i <= 10; i++) {
  // console.log(5 * i);
} // 5 10 15 20 25 30 35 40 45 50

for (let i = 1; i<51; i++){
  if (i % 5 === 0){
    // console.log(i);
  }
} // 5 10 15 20 25 30 35 40 45 50

for (let i = 1; i<= 10; i++){
  // console.log(`5 * ${i} = ${5 * i}`);
}


// Q6. Find the sum of the numbers from 1 to 100 using a loop.

/*

for (let i = 1; i <= 100; i++){
  let sum = 0;
  sum = sum + i;
};
console.log(sum);

- Problem(s)
- let sum = 0; is inside the loop.
- This resets sum to 0 on every iteration, so you are never accumulating.
- console.log(sum); is outside the loop.
- sum is not defined in that scope (because it was declared inside the loop).
- This will throw: ReferenceError: sum is not defined

*/

let sum = 0;
for (let i = 0; i <= 100; i++){
  // sum = sum + something(jo add karna hai.)
  sum = sum + i;
};
// console.log(sum); // 5050


// Another way
const N = 100; // last number
const add = (N * (N + 1)) / 2;
// console.log("Sum of numbers from 1 to 100: ", sum);

// Example for Dynamic Input
function sumUpTo(n) {
  return (n * (n + 1)) / 2;
}
// console.log(sumUpTo(50)); // 1275
// console.log(sumUpTo(100)); // 50505


// Q7. Print all numbers between 1 to 50 that are divisible by 3

for (let i = 1; i < 51; i++){
  if (i % 3 === 0){
    // console.log(i);
  };
} // 3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48


// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.
let count = 0
for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
  //  console.log(i) // 15, 30, 45, 60, 75, 90
    count++  // count = count + 1
  }
}
console.log("Count:", count);

// Q: Stop at First Multiple of 7. Write a loop from 1 to 100 that: Prints each number, Stops completely when it finds the first number divisible by 7

/*
// wrong
for (let i = 0; i < 101; i++){
  console.log(i); // 0
  if (i % 7 === 0){ // (0 % 7 === 0) =>  true
    break;
  }
} 

// correct
for (let i = 0; i < 101; i++){
  console.log(i); // 0 1 2 3 4 5 6 7
  if (i !== 0 && i % 7 === 0){ 
    break;
  }
}

*/

for (let i = 1; i <= 101; i++){
  // console.log(i); // 1 2 3 4 5 6 7
  if (i % 7 === 0){
    break;
  }
}

// Q: Skip Multiplies of 3 write a loop from 1 to 20 that, Skips numbers divisible by 3. Prints all others
// Use continue 
// Expected output:
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)

for (let i = 1; i <= 20; i++){
  if(i % 3 === 0) continue;
  // console.log(i); // 1 2 4 5 7 8 10 11 13 14 16 17 19 20
}

// Q: Print First 5 Odd Numbers Only loop from 1 to 100

let countvariable = 0
for(let i = 1; i <= 100; i++){
  if (i % 2 === 1){
    countvariable++;
    console.log(i);
  }

  if (countvariable == 5) break;
} // 1 3 5 7 9



// Q8. Ask the user for a number and print wheather each number from 1 to that number is even or odd.

// (e.g., "1 is odd", "2 is even", ...)

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin
})

rl.question("Give me a number: ", (input) => {
  const val = Number(input);

  if (Number.isNaN(val) || val <= 0){
    console.error("Please enter a valid positive number");
    rl.close();
    return;
  }

  for (let i = 1; i <= val; i++) {
    if (i % 2 === 0){
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }

  rl.close();
});


