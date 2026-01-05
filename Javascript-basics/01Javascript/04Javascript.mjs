console.log( " ------------- Control Flow ------------");

// if => The if statement is a conditional control structure that executes a block of code only when a specified condition evaluates to true.

// else if => The else if statement allows you to check multiple conditions sequentially. It runs only if all previous conditions were false and its own condition is true.

// else => The else statement provides a default execution path. It runs only when none of the preceding conditions are true.

// switch => The switch statement evaluates a single expression and executes code blocks based on matching values (cases).It is an alternative to multiple if-else if-else statements when comparing one variable against several discrete values.

// Example

function handleRequest({ isAuthenticated, role, requestsPerMinute }) {
  if (!isAuthenticated) {
    return {
      status: 401,
      action: "REJECT",
      message: "Authentication required"
    };
  }
  else if (requestsPerMinute > 1000) {
    return {
      status: 429,
      action: "BLOCK",
      message: "Too many requests"
    };
  }
  else if (role == "admin") {
    return {
      status: 200,
      action: "ALLOW",
      message: "Admin request allowed"
    };
  }
  else if (requestsPerMinute > 200) {
    return {
      status: 429,
      action: "THROTTLE",
      message: "Rate limit exceeded"
    };
  }
  else {
    return {
      status: 200,
      action: "ALLOW",
      message: "Request allowed"
    };
  }
}
// ================= FUNCTION ACCESS =================

const result = handleRequest({
  isAuthenticated: true,
  role: "user",
  requestsPerMinute: 150
});

console.log(result.status);   // 200
console.log(result.action);   // "ALLOW"
console.log(result.message);  // "Request allowed"

// Scenario: E-Commerce Order Status

function handleOrderStatus(status) {
  switch (status) {
    case "pending":
      return {
        code: 102,
        action: "WAIT",
        message: "Order is pending. Please wait."
      };

    case "processing":
      return {
        code: 103,
        action: "IN_PROGRESS",
        message: "Order is being processed."
      };

    case "shipped":
      return {
        code: 200,
        action: "TRACK",
        message: "Order has been shipped. Track your package."
      };

    case "delivered":
      return {
        code: 200,
        action: "RECEIVED",
        message: "Order delivered successfully. Enjoy!"
      };

    case "canceled":
      return {
        code: 410,
        action: "CANCEL",
        message: "Order has been canceled."
      };

    default:
      return {
        code: 400,
        action: "UNKNOWN",
        message: "Unknown order status."
      };
  }
}

const orderResult = handleOrderStatus("shipped");

console.log(orderResult.code);    // 200
console.log(orderResult.action);  // TRACK
console.log(orderResult.message); // Order has been shipped. Track your package.
/*
- Why I didn’t use break in my E-Commerce Order Status example
- Key point:
- Each case has a return statement
- return immediately exits the function, so JavaScript never continues to the next case

*/

// Example 
let x = 2;
switch (x) {
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");  
} // Output: Two, Three (bug if break is missing so next case is easilt run. make sure after complete the case must be apply break.)

// When do you need break? - You need break only if you don’t return or throw inside the case

let status = "pending";

switch (status) {
  case "pending":
    console.log("Pending");
    // break is needed here
  case "processing":
    console.log("Processing"); // This will also run if no break
  default:
    console.log("Default");
}
/*

// Output if no break:
Pending
Processing
Default

*/

// How switch normally works
const value = "a"; // set the value to test

switch(value) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  default:
    console.log("Default");
}

/*

- break prevents “fall-through”
- Without break, execution continues to the next case even if the previous case matched

*/

// Example: Backend – API Validation and Auth Logic – Role Based Access

import readline from "readline";

// --------- Business Logic ---------

// Backend – API Validation
function validateUserAge(age) {
  if (typeof age !== "number" || Number.isNaN(age)) {
    return {
      success: false,
      message: "Age must be a number"
    };
  } else if (age < 18) {
    return {
      success: false,
      message: "User must be at least 18 years old"
    };
  } else {
    return {
      success: true,
      message: "User is eligible"
    };
  }
}

// Auth Logic – Role Based Access
function getDashboardAccess(role) {
  if (role === "admin") {
    return "Full access granted";
  } else if (role === "moderator") {
    return "Limited admin access granted";
  } else if (role === "user") {
    return "User dashboard access granted";
  } else {
    return "Access denied";
  }
}

// Frontend – UI State Handling

function getButtonLabel(isLoading, isError) {
  if (isLoading) {
    return "Loading...";
  }
  else if (isError) {
    return "Try Again";
  }
  else {
    return "Submit";
  }
}

// --------- Readline Setup ---------

// rl is a ReadLine interface object created using Node.js’s readline module. It provides a way to read input from the terminal (stdin) and write output to the terminal (stdout). 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// --------- User Input Flow ---------

rl.question("Enter your age: ", (ageInput) => {
  const age = Number(ageInput);
  const ageResult = validateUserAge(age);
  console.log(ageResult.message);

  rl.question("Enter your role: ", (roleInput) => {
    const role = roleInput.trim().toLowerCase();
    const roleResult = getDashboardAccess(role);
    console.log(roleResult);

    rl.question("Enter UI state (loading/error/idle): ", (stateInput) => {
      const state = stateInput.trim().toLowerCase();
      const labelresult = getButtonLabel(state === "loading", state === "error");

      console.log(labelresult);

      rl.close(); // close once at the end // remember the poistion of the rl.close();

    });
  });
});
