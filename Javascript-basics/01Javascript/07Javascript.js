// closures => A function that returns another function, and the returned function always uses (remembers) a variable from its parent function.

// clousre example
function sanskar() {
  let a = 32;
  return function(){
    console.log(a);
  }
}
sanskar()(); // 32 // Call the returned function immediately
const innerFunction = sanskar();
innerFunction(); // 32  // Store the returned function and call it


// lexecal scoping  => physical position ka scope kaha tak hai.
// Lexical Scoping ⇒ The scope of a variable is determined by the physical (written) position of the code, meaning where the variable is defined in the source file decides where it can be accessed.
function abcd() {
  // 'a' is a local variable of function abcd
  // It will be captured by inner functions via closure
  let a = 32;

  function defg() {
    // 'b' is a local variable of function defg
    // It is also captured by the returned function (closure)
    let b = 13;

    // Returning an inner function creates a CLOSURE
    // This function "remembers" variables 'a' and 'b'
    return function ghij() {
      // 'c' is local to ghij
      // It is created fresh on every invocation of ghij
      let c = 14;

      // Accessing variables from:
      // - ghij's own scope → c
      // - defg's scope     → b
      // - abcd's scope     → a
      // This lookup chain is called the LEXICAL SCOPE CHAIN
      console.log(a, b, c);
    };
  }

  // defg() is executed here
  // It returns the inner function ghij
  // Even after defg finishes execution, 'b' is preserved in memory
  return defg();
}

// abcd() executes and returns the function ghij
// The returned function still has access to 'a' and 'b'
// Calling it executes ghij and logs all three values
abcd()(); // Output: 32 13 14

/*

- Key Concepts Highlighted
- Lexical Scoping: Functions access variables based on where they are defined, not where they are called.
- Closure: ghij forms a closure over variables a and b, keeping them alive even after abcd and defg finish execution.
- Memory Behavior: JavaScript keeps a and b in memory because ghij still references them.

*/


// IIFE (Immediately Invoked Function Expression) ⇒ A function that is defined and executed immediately after it is created, without needing to be called separately.
// An IIFE is a function expression that runs immediately after its definition and helps in encapsulating scope.
(function(){
  console.log("IIFE executed immediately");
})(); // <-- call 


// Function Declaration Hoisting  

ajay();
function ajay() {
  console.log("Hi Bro");
}

// Function Expression Hoisting

// hello(); //  Error: ReferenceError: Cannot access 'hello' before initialization
const hello = function () {
  console.log("Hi");
};

// Practice 

// What is the difference between function declaration and expression in terms of hoisting ?
// Function declarations are fully hoisted, while function expressions are hoisted only as variables, not as functions.

// Function Declaration 
sayHello();

function sayHello() {
  console.log("Hello");
}

// Hoisting Behavior => Fully hoisted, Both function name and its body are moved to the top of the scope. You can call the function before its definition

// Behind the scenes
function sayHello() {
  console.log("Hello");
}

sayHello();

// Function Expression 

// Hoisting Behavior => Not hoisted as a function, Treated like a variable. Depends on var, let, or const

// sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function () {
  console.log("Hi");
};

// What does the ... operator mean in parameter?
// The ... operator in function parameters is called the rest operator.
// Meaning => It collects multiple arguments passed to a function and stores them in a single array.
// Rest → collects values into an array (in parameters)
// Spread → expands values (in function calls or arrays)
function xyza(a, b, c, ...val) {
  console.log(val);
}

xyza(1, 2, 34, 4, 5, 6, 7, 8); // [ 4, 5, 6, 7, 8 ]

// Use rest parameter to accept any number of scores and return the total.

function getScore(...scores){
  let total = 0;
  scores.forEach(function(val){
    total = total + val;
  });
  return total;
}
console.log(getScore(10, 12, 14, 18)); // 54

function totalScore(...scores) {
  return scores.reduce((sum, score) => sum + score, 0);
}

// Examples usage
console.log(totalScore(10, 12, 14, 18)); // 54

// Fix function using early return
function checkAge(age){
  if (age < 18) return "Too young"; 
  return ("Allowed"); 
}
console.log(checkAge(23)); // Allowed

// Can you assign a function to a variable and then call it ? show how.
let a = function(){
}
a();

// Pass a function into another function and execute it inside.
// Higher order function.
function pqrs(val){
    val();  // hello
}
pqrs(function(){
  console.log('hello')
})

// Find Higher order function => map
let q = [1, 2, 3]
let doubled = q.map(function (x) {
  return x * 2;
})
console.log(doubled); // [ 2, 4, 6 ]
console.log(q); // [ 1, 2, 3 ]

/*

Definition of map()
map() is a JavaScript array method that creates a new array by applying a given function to each element of an existing array without modifying the original array.

Syntax:

array.map((element, index, array) => {
  return newValue;
});

- Key Points
- Returns a new array
- Original array remains unchanged
- Used for data transformation
- Executes the callback once for each element

*/

const numbers = [4, 5, 6];
const squared = numbers.map(n => n * n);
console.log(squared); // [ 16, 25, 36 ]

// Use map() when you need to transform data, not when you just want to loop or perform side effects.


let total = 0;
function addToTotal(num) {
  total += num;
}
// here addToTotal() this is impure function.

// What is closure ? When it is created?

// A closure is formed when a function remembers and can access variables from its outer (lexical) scope, even after the outer function has finished executing.
// In simple words: a function + its surrounding scope = closure

// When is a Closure Created? => A closure is created at the time a function is defined, not when it is executed.
// A closure is a function that retains access to its lexical scope even when executed outside that scope.
function outer(){
  let count = 50;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}
const counter = outer(); // closure is created here (here counter is a function.)
counter(); // 51
counter(); // 52

// 1 Data Privacy (Encapsulation)
function createUser() {
  let password = "secret123";
  return {
    checkPassword(input) {
      return input === password;
    }
  };
}
const user = createUser();
console.log(user.checkPassword("secret123"));  // true

// 2 Function Factory
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


// 3 Private State with Module Pattern
const cart = (function () {
  let items = [];

  return {
    add(...item) {
      items.push(...item);
    },
    getItems(){
      return [...items];
    }
  };
})();
cart.add('Laptop', 'Mobile', 'Books', 'XYZ');
console.log(cart.getItems()); // [ 'Laptop', 'Mobile', 'Books', 'XYZ' ]

// 4 Memoization (Performance Optimization)
function memoizedSquare() {
  const cache = {};

  return function (n) {
    if (cache[n]) return cache[n];
    cache[n] = n * n;
    return cache[n];
  };
}

const square = memoizedSquare();
console.log(square(5)); // 25 
console.log(square(5)); // 25

// 5 Event Handler with State
function createClickTracker() {
  let count = 0;

  return function () {
    count++;
    console.log(`Clicked ${count} times`);
  }
}
const handleClick = createClickTracker();
console.log(handleClick()); // Clicked 1 times
console.log(handleClick()); // Clicked 2 times

// 6 setTimeout + Closure (Classic Interview Trap)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} // 1 2 3

// 7 Currying using Closures
function calculate(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(calculate(1)(2)(3)); // 6

// 8 Once Function (Run Only One Time)
function once(fn) {
  let executed = false;

  return function(...args) {
    if (!executed) {
      executed = true;
      return fn(...args);
    }
  };
}
const init = once(() => console.log("Initialization"));
init(); // runs // Initialization
init(); // ignored

// 9 Custom Iterator using Closure
function createIterator(arr) {
  let index = 0;

  return function() {
    return index < arr.length ? arr[index++] : null;
  };
}

const next = createIterator([10, 20, 30]);
console.log(next()); // 10
console.log(next()); // 20
console.log(next()); // 30
console.log(next()); // null

// 10 Rate Limiting (Throttle-like Behavior)
function rateLimit(fn , delay) {
  let lastCall = 0;  // stored in closure

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
const log = rateLimit(() => console.log("Called"), 2000);
log();
log();
// lastCall is a private variable
// It lives inside the closure and remembers its value between calls
// delay is the minimum time gap allowed between executions
// Execution Flow
// const log = rateLimit(() => console.log("Called"), 2000);


// What is the use of IIFE? Name one real -world use case.
// IIFE is used to execute code immediately and create private scope to avoid global variable conflicts.
/*

- Uses of IIFE
- Avoid polluting the global scope
- Create private variables (data hiding)
- Execute setup/initialization code once
- Implement the module pattern

*/

const feature = (function () {
  const isEnabled = true;

  if (isEnabled) {
    console.log("Feature enabled");
  }
})(); // Feature enabled

(function () {
  let temp = "internal";
  console.log("Third-party script loaded");
})();


let dogu = (function() {
  let score = 0;
  return {
    getScore: function () {
      console.log(score);
    },
    setScore: function (val) {
      score = val;
    }
  }
})();

console.log(dogu.getScore()); // 0
console.log(dogu.setScore(20)); // sel the value of score
console.log(dogu.getScore()); // 20

// BMI Calculator
function bmiCalculator(weight, height) {
  const bmi = weight / (height * height);

  if (bmi < 18.5) return `BMI: ${bmi.toFixed(2)} (Underweight)`;
  if (bmi < 25) return `BMI: ${bmi.toFixed(2)} (Normal)`;
  if (bmi < 30) return `BMI: ${bmi.toFixed(2)} (Overweight)`;
  return `BMI: ${bmi.toFixed(2)} (Obese)`;
}

// Example usage
console.log(bmiCalculator(70, 1.75));

// Dynamic Discount Calculator
function createDiscountCalculator() {
  let price = 0;
  let discount = 0;

  function calculate() {
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    return {
      price,
      discount,
      discountAmount: discountAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2)
    };

  }

  return {
    setPrice(value) {
      if (value <= 0) throw new Error("Invalid price");
      price = value;
      return calculate();
    },
    setDiscount(value) {
      if (value < 0 || value >100) throw new Error("Invalid discount");
      discount = value;
      return calculate();
    }
  };
}

const calculator = createDiscountCalculator();

console.log(calculator.setPrice(1000));
// { price: 1000, discount: 0, discountAmount: "0.00", finalPrice: "1000.00" }

console.log(calculator.setDiscount(20));
// { price: 1000, discount: 20, discountAmount: "200.00", finalPrice: "800.00" }

console.log(calculator.setDiscount(30));
// { price: 1000, discount: 30, discountAmount: "300.00", finalPrice: "700.00" }



// - Create private variables (data hiding) - using IIFE
(function (){
  const password = "secret password";
  console.log(password);
})();
// console.log(password); // ReferenceError: password is not defined // cannot access outside 

// in the below code you will not use fat arrow function
const obj = {
  value: 42,
  regular: function () { return this.value; },
  arrow: () => this.value
};
console.log(obj); // { value: 42, regular: [Function: regular], arrow: [Function: arrow] }
// if you use arrow function here then this keyword will loose the value.

// if you use function keyword then Hosting will perform and you can call it before the declaration of it. Or if you use const, var, let you can not call the function beefore cerating it.
// closure => closure always use a some variable inside the returning function.  



