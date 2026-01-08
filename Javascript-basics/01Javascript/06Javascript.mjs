console.log("----------------- Function ------------------");
// What is a Function in JavaScript?
// A function is a reusable block of code designed to perform a specific task. Instead of writing the same logic again and again, you write it once inside a function and call it whenever needed.

// A function is a set of statements that takes input, processes it, and optionally returns an output.

// Why Do We Need Function Definitions?
// A function definition specifies the function’s name, parameters, and the code to be executed when the function is called.

/*

// 1. Function Declarations, Expressions, and Arrow Functions
// Function Declaration => A function defined using the function keyword with a name. It is hoisted completely, meaning it can be called before it is defined.

function add(a, b) {
  return a + b;
}

// Function Expression => A function assigned to a variable.It is not hoisted like declarations (variable hoisting rules apply).

const add = function (a, b) {
  return a + b;
};

// Arrow Function => A shorter syntax for function expressions introduced in ES6. Arrow functions do not have their own this, arguments, or prototype. (fat arrow function  ()=> {} )

const add = (a, b) => a + b;


// 2. Parameters vs Arguments
// Parameters => Variables listed in the function definition that receive values.

function greet(name) {  // name → parameter
  console.log(name);
}

// Arguments => Actual values passed to the function when it is called.
greet("Sanskar"); // "Sanskar" → argument


// 3. Default, Rest, and Spread Parameters
// Default Parameters => Provide default values if no argument is passed.
function greet(name = "Guest") {
  return name;
}

// Rest Parameters (...) => Collects multiple arguments into an array.

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

// When there are many arguments, we have to create the same number of parameters. To avoid this, we use rest. If ... is used in a function’s parameter list, it is called the rest operator, and if it is used with arrays or objects, it is called the spread operator.

// Spread Operator (...) => Expands an array or object into individual elements.

const arr = [1, 2, 3];
console.log(...arr); // 1 2 3


// 4. Return Values and Early Returns
// Return Value => The value a function sends back to where it was called.

function add(a, b) {
  return a + b;
}

// Early Return => Exits the function before reaching the end, often used for validation.

function checkAge(age) {
  if (age < 18) return "Underage";
  return "Adult";
}

// 5. First-Class Functions => basically function will be treated as value.
// In JavaScript, functions are first-class citizens, meaning they can:
// 1. Be assigned to variables
// 2. Be passed as arguments
// 3. Be returned from other functions

const sayHello = function () {
  return "Hello";
};

function greet(fn) {
  return fn();
}

// 6. Higher-Order Function 
// A higher-order function is a function that: Takes another function as an argument(accept function as a parameter.) OR Returns a function

function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

// Examples: map, filter, reduce

// 7. Pure vs Impure Function
// Pure Function => A function that: Always returns the same output for the same input. Does not modify external state (no side effects) or external values. 

function add(a, b) {
  return a + b;
}

// Impure Function => A function that: Depends on or modifies external state or values.

let count = 0;
function increment() {
  count++;
}

// 8. Closures and Lexical Scoping
// Lexical Scoping => Functions can access variables defined in their outer scope.

let x = 10;
function outer() {
  console.log(x);
}

// Closure => A closure is created when a function remembers and accesses variables from its lexical scope, even after the outer function has finished execution.

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// 9. IIFE (Immediately Invoked Function Expression)
// A function that is executed immediately after it is defined. Used to avoid polluting the global scope.

(function () {
  console.log("IIFE executed");
})();


// 10. Hoisting Difference: Declaration vs Expression
// Function Declaration Hoisting => Fully hoisted (can be called before definition).

hello();
function hello() {
  console.log("Hi");
}

// Function Expression Hoisting => Not hoisted as a function.
Only the variable is hoisted (initialized as undefined).

hello(); //  Error
const hello = function () {
  console.log("Hi");
};

// Summary Table

| Topic                | Key Point              |
| -------------------- | ---------------------- |
| Function Declaration | Fully hoisted          |
| Function Expression  | Variable hoisting only |
| Arrow Function       | No own `this`          |
| Parameters           | Defined in function    |
| Arguments            | Passed during call     |
| Rest                 | Collects values        |
| Spread               | Expands values         |
| Pure Function        | No side effects        |
| Closure              | Remembers outer scope  |
| IIFE                 | Executes immediately   |

*/

function abcd(v) {
  return 12 + v;
}
let val = abcd(23);
// console.log(val); // 35

// First class function => function will be passed as argument.
function aman(val){
  val(); // hey 
}
aman(function () {
  console.log("hey");
})


// --------------------- Basic Examples ------------------
// 1. Default Parameters => Purpose: Default values avoid undefined values and simplify function calls.
function createUserProfile(username, email, role = 'user', isActive = true) {
  return {
    username,
    email,
    role,
    isActive,
    createdAt: new Date()
  };
}

// Usage 
const user1 = createUserProfile('dilip', 'dilip@gmail.com');
const user2 = createUserProfile('admin', 'admin@gmail.com', 'admin', false);
console.log(user1);
console.log(user2);

// 2. Rest Parameters
function calculateTotalPrice(orderId, ...prices){
  const total = prices.reduce((sum, price) => sum + price, 0);
  return { orderId, total, itemCount: prices.length };
}

// Usage
const orderSummary = calculateTotalPrice('ORD12345', 120, 45.5, 89.99, 15);
console.log(orderSummary); // { orderId: 'ORD12345', total: 270.49, itemCount: 4 }


// 3. Spread Parameters
const defaultConfig = {
  theme: 'light',
  notifications: true,
  autoSave: true
};
function mergeUserConfig(userConfig) {
  return { ...defaultConfig, ...userConfig };
}
// Usage
const mycustomConfig = mergeUserConfig({ theme: 'dark', autoSave: false });
console.log(mycustomConfig); // { theme: 'dark', notifications: true, autoSave: false }

// 4. Return Values & Early Returns => Purpose: Early returns simplify nested if statements and make functions cleaner.

function validateLoginInput(username, password) {
  if (!username || !password) {
    return { success: false, error: 'Username and password are required' };
  }
  if (password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters' };
  }

  return { success: true, message: 'Validation passed' };

}

// Usage
console.log(validateLoginInput('ajay', '123')); // { success: false, error: 'Password must be at least 6 characters' }

console.log(validateLoginInput('vijay', 'password123')); // { success: true, message: 'Validation passed' }

/*

// First-Class Functions => Purpose: Functions can be passed around like variables in modern JS.

function fetch(url, callback) {
  // simulate API request
  setTimeout(() => {
    const data = { userId: 1, name: 'Vikram' };
    callback(data);
  }, 1000)
}

// Usage
fetchData('/api/users/1', (response) => {
  console.log('Fetched data:', response);
});
// ReferenceError: fetchData is not defined

*/

// 6. Higher-Order Function => Purpose: Higher-order functions enable dynamic behavior, like customized logging.
function createLogger(prefix) {
    return function(message) {
       console.log(`[${prefix}] ${message}`);
    };
}

// Usage
const infoLogger = createLogger('INFO');
const errorLogger = createLogger('ERROR');

infoLogger('Server started'); // [INFO] Server started
errorLogger('Database connection failed'); // [ERROR] Database connection failed


// 7. Pure vs Impure Function => Pure functions are predictable and easier to test; impure functions are sometimes necessary for state updates.

// Pure function: calculates discounted price.
function calculateDiscount(price, discountRate) {
  return price - price * discountRate;
}
console.log(calculateDiscount(100, 0.2)); // 80

// Impure function: modifies global state.

let totalRevenue = 0;
function addRevenue(amount) {
  totalRevenue += amount; // modifies external variable
  return totalRevenue;
}
console.log(addRevenue(50)); // 50
console.log(addRevenue(25)); // 75


// 8. Closures & Lexical Scoping => Purpose: Closures encapsulate private data safely.
function createCounter(initialValue = 0) {
  let count = initialValue;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}
// Usage 
const counterA = createCounter(5);
console.log(counterA.increment()); // 6
console.log(counterA.increment()); // 7
console.log(counterA.getValue());  // 7
console.log(counterA.decrement()); // 6
console.log(counterA.decrement()); // 5
console.log(counterA.getValue()); // 5


// 9. IIFE (Immediately Invoked Function Expression) => Purpose: Avoid polluting global scope while initializing values.

const appConfig = (function() {
  const environment = 'production';
  const version = '1.0.0';
  return {
    environment,
    version
  };
})();
console.log(appConfig); // { environment: 'production', version: '1.0.0' }

// 10. Hoisting Difference: Declaration vs Expression => Purpose: Understanding hoisting prevents runtime errors.

// Function Declaration (hoisted)
console.log(addNumbers(3, 4)); // 7
function addNumbers(a, b) {
  return a + b;
}

// Function Expression (not hoisted)
try {
  console.log(subtractNumbers(10, 5)); // Error
} catch (error) {
  console.error(error.message); // Cannot access 'subtractNumbers' before initialization
}
const subtractNumbers = function(a, b) {
  return a - b;
};

 

// --------------------- Advanced Examples ------------------

// 1. Default Parameters - Configuration Manager

/*
 Production-ready Configuration Manager with Default Parameters
 Handles application configuration with sensible defaults and validation
*/
function initializeApplicationConfiguration(
    databaseConfig = {
        host: 'localhost',
        port: 5432,
        database: 'production_db',
        username: 'admin',
        password: 'securepassword123',
        poolSize: 10,
        timeout: 30000
    },
    serverConfig = {
        port: 8080,
        environment: 'production',
        corsOrigins: ['https://company.com'],
        rateLimit: 100,
        timeout: 60000
    },
    featureFlags = {
        enableCache: true,
        enableLogging: true,
        enableMetrics: false,
        maintenanceMode: false
    }
) {
    // Input validation with early returns
    if (typeof databaseConfig !== 'object' || databaseConfig === null) {
        throw new Error('Invalid database configuration: must be an object');
    }

    if (typeof serverConfig !== 'object' || serverConfig === null) {
        throw new Error('Invalid server configuration: must be an object');
    }

    // Merge defaults with provided configurations
    const finalDatabaseConfig = {
        host: 'localhost',
        port: 5432,
        database: 'production_db',
        username: 'admin',
        password: 'securepassword123',
        poolSize: 10,
        timeout: 30000,
        ...databaseConfig,
        ssl: databaseConfig.ssl !== undefined ? databaseConfig.ssl : true
    };

    const finalServerConfig = {
        port: 8080,
        environment: 'production',
        corsOrigins: ['https://company.com'],
        rateLimit: 100,
        timeout: 60000,
        ...serverConfig,
        securityHeaders: serverConfig.securityHeaders !== undefined ? serverConfig.securityHeaders : true
    };

    const finalFeatureFlags = {
        enableCache: true,
        enableLogging: true,
        enableMetrics: false,
        maintenanceMode: false,
        ...featureFlags
    };

    // Create comprehensive configuration object
    const applicationConfig = {
        version: '1.0.0',
        initializedAt: new Date().toISOString(),
        database: finalDatabaseConfig,
        server: finalServerConfig,
        features: finalFeatureFlags,
        metadata: {
            configHash: generateConfigHash(finalDatabaseConfig, finalServerConfig),
            environment: process.env.NODE_ENV || 'production'
        }
    };

    console.log('Application configuration initialized successfully');
    return applicationConfig;
}

// Helper function
function generateConfigHash(dbConfig, serverConfig) {
    return Buffer.from(JSON.stringify({ dbConfig, serverConfig })).toString('base64').slice(0, 16);
}

// Usage Example
const customConfig = initializeApplicationConfiguration(
    {
        host: 'cluster.company.com',
        port: 6432,
        database: 'user_management',
        username: 'app_user',
        password: process.env.DB_PASSWORD,
        poolSize: 20
    },
    {
        port: 443,
        environment: 'staging',
        corsOrigins: ['https://staging.company.com', 'https://dev.company.com'],
        rateLimit: 500
    },
    {
        enableMetrics: true,
        enableDebug: false
    }
);

console.log('Configuration Output:', {
    databaseHost: customConfig.database.host,
    serverPort: customConfig.server.port,
    featureFlags: customConfig.features
});

/*
Output:

Application configuration initialized successfully
Configuration Output: {
  databaseHost: 'cluster.company.com',
  serverPort: 443,
  featureFlags: {
    enableCache: true,
    enableLogging: true,
    enableMetrics: true,
    maintenanceMode: false,
    enableDebug: false
  }
}

*/

// 2. Rest Parameters - Analytics Event Aggregator

/*
 Analytics Event Aggregator using Rest Parameters
 Collects and processes multiple analytics events with comprehensive metadata
*/
function processAnalyticsEvents(primaryEvent, ...secondaryEvents) {
    // Early return for invalid primary event
    if (!primaryEvent || typeof primaryEvent !== 'object') {
        return {
            success: false,
            error: 'Invalid primary event provided',
            processedEvents: 0,
            timestamp: new Date().toISOString()
        };
    }

    const allEvents = [primaryEvent, ...secondaryEvents];
    const processingResults = [];
    const failedEvents = [];

    // Process each event
    allEvents.forEach((event, index) => {
        try {
            const validationResult = validateAnalyticsEvent(event, index === 0);
            
            if (validationResult.valid) {
                const processedEvent = enhanceEventData(event, index);
                processingResults.push({
                    eventId: processedEvent.eventId,
                    status: 'processed',
                    timestamp: processedEvent.processedAt
                });
                
                // Simulate sending to analytics service
                sendToAnalyticsService(processedEvent);
            } else {
                failedEvents.push({
                    eventIndex: index,
                    error: validationResult.error,
                    timestamp: new Date().toISOString()
                });
            }
        } catch (error) {
            failedEvents.push({
                eventIndex: index,
                error: error.message,
                timestamp: new Date().toISOString()
            });
        }
    });

    const result = {
        success: failedEvents.length === 0,
        totalEvents: allEvents.length,
        processed: processingResults.length,
        failed: failedEvents.length,
        processingResults: processingResults,
        errors: failedEvents,
        batchId: generateBatchId(),
        summary: {
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            eventsPerSecond: allEvents.length / 1 // Simplified calculation
        }
    };

    console.log(`Analytics processing complete: ${result.processed}/${result.totalEvents} events successful`);
    return result;
}

function validateAnalyticsEvent(event, isPrimary) {
    const requiredFields = ['eventType', 'userId', 'timestamp'];
    const missingFields = requiredFields.filter(field => !event[field]);
    
    if (missingFields.length > 0) {
        return {
            valid: false,
            error: `Missing required fields: ${missingFields.join(', ')}`
        };
    }

    if (isPrimary && !event.sessionId) {
        return {
            valid: false,
            error: 'Primary event requires sessionId'
        };
    }

    return { valid: true };
}

function enhanceEventData(event, index) {
    return {
        ...event,
        eventId: `evt_${Date.now()}_${index}`,
        processedAt: new Date().toISOString(),
        metadata: {
            ...event.metadata,
            processingNode: 'analytics-server-1',
            version: '2.1.0'
        }
    };
}

function sendToAnalyticsService(event) {
    // Simulate API call
    console.log(`Sending event ${event.eventId} to analytics service`);
    return true;
}

function generateBatchId() {
    return `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Usage Example
const primaryEvent = {
    eventType: 'user_registration',
    userId: 'user_123456',
    sessionId: 'sess_789012',
    timestamp: new Date().toISOString(),
    properties: {
        plan: 'premium',
        source: 'web'
    }
};

const secondaryEvent1 = {
    eventType: 'page_view',
    userId: 'user_123456',
    timestamp: new Date().toISOString(),
    properties: {
        page: '/dashboard',
        duration: 45
    }
};

const secondaryEvent2 = {
    eventType: 'button_click',
    userId: 'user_123456',
    timestamp: new Date().toISOString(),
    properties: {
        element: 'signup_button',
        location: 'header'
    }
};

const processingResult = processAnalyticsEvents(primaryEvent, secondaryEvent1, secondaryEvent2);
console.log('Processing Result:', processingResult);

/*

Sending event evt_1767899996266_0 to analytics service
Sending event evt_1767899996266_1 to analytics service
Sending event evt_1767899996266_2 to analytics service
Analytics processing complete: 3/3 events successful
Processing Result: {
  success: true,
  totalEvents: 3,
  processed: 3,
  failed: 0,
  processingResults: [
    {
      eventId: 'evt_1767899996266_0',
      status: 'processed',
      timestamp: '2026-01-08T19:19:56.266Z'
    },
    {
      eventId: 'evt_1767899996266_1',
      status: 'processed',
      timestamp: '2026-01-08T19:19:56.266Z'
    },
    {
      eventId: 'evt_1767899996266_2',
      status: 'processed',
      timestamp: '2026-01-08T19:19:56.266Z'
    }
  ],
  errors: [],
  batchId: 'batch_1767899996266_8ggsff0fb',
  summary: {
    startTime: '2026-01-08T19:19:56.266Z',
    endTime: '2026-01-08T19:19:56.266Z',
    eventsPerSecond: 3
  }
}

*/

// 3. Spread Operator - Data Transformation Pipeline
/*
 Data Transformation Pipeline using Spread Operator
 Transforms and merges multiple data sources with conflict resolution
*/
function transformCustomerData(primaryCustomerRecord, ...additionalDataSources) {
    // Input validation with early returns
    if (!primaryCustomerRecord || typeof primaryCustomerRecord !== 'object') {
        return {
            success: false,
            error: 'Invalid primary customer record',
            transformedData: null,
            warnings: ['No data processed due to invalid input']
        };
    }

    if (!primaryCustomerRecord.customerId) {
        return {
            success: false,
            error: 'Primary record missing customerId',
            transformedData: null,
            warnings: ['Customer ID is required for processing']
        };
    }

    const transformationLog = [];
    let mergedCustomerData = { ...primaryCustomerRecord };

    // Add transformation metadata
    mergedCustomerData = {
        ...mergedCustomerData,
        _metadata: {
            originalSource: 'primary',
            transformationVersion: '3.2.1',
            processedAt: new Date().toISOString(),
            dataSourcesProcessed: 1 + additionalDataSources.length
        }
    };

    transformationLog.push('Primary customer record processed');

    // Process additional data sources
    additionalDataSources.forEach((dataSource, index) => {
        if (dataSource && typeof dataSource === 'object') {
            const sourceId = dataSource.sourceId || `source_${index + 2}`;
            
            try {
                // Conflict resolution strategy
                const resolvedData = resolveDataConflicts(mergedCustomerData, dataSource);
                mergedCustomerData = {
                    ...mergedCustomerData,
                    ...resolvedData.mergedFields,
                    _metadata: {
                        ...mergedCustomerData._metadata,
                        mergedSources: [
                            ...(mergedCustomerData._metadata.mergedSources || []),
                            {
                                sourceId: sourceId,
                                mergedAt: new Date().toISOString(),
                                conflictsResolved: resolvedData.conflictCount
                            }
                        ]
                    }
                };

                transformationLog.push(`Successfully merged ${sourceId} with ${resolvedData.conflictCount} conflicts resolved`);
            } catch (error) {
                transformationLog.push(`Failed to merge ${sourceId}: ${error.message}`);
            }
        }
    });

    // Final data validation
    const validationResult = validateTransformedData(mergedCustomerData);
    if (!validationResult.valid) {
        return {
            success: false,
            error: 'Data validation failed',
            transformedData: null,
            warnings: validationResult.errors,
            log: transformationLog
        };
    }

    // Clean up internal metadata for final output
    const { _metadata, ...finalData } = mergedCustomerData;

    return {
        success: true,
        transformedData: finalData,
        metadata: _metadata,
        warnings: validationResult.warnings,
        log: transformationLog,
        summary: {
            totalSources: 1 + additionalDataSources.length,
            successfulMerges: transformationLog.filter(log => log.includes('Successfully merged')).length,
            customerId: finalData.customerId,
            finalRecordCount: Object.keys(finalData).length
        }
    };
}

function resolveDataConflicts(primaryData, newData) {
    const mergedFields = { ...newData };
    let conflictCount = 0;

    // Conflict resolution logic
    Object.keys(newData).forEach(key => {
        if (primaryData[key] !== undefined && primaryData[key] !== newData[key]) {
            conflictCount++;
            // Prefer newer non-null data, but keep primary data for critical fields
            if (['customerId', 'email', 'ssn'].includes(key)) {
                mergedFields[key] = primaryData[key]; // Keep primary value for critical fields
            } else if (newData[key] !== null && newData[key] !== '') {
                mergedFields[key] = newData[key]; // Prefer new non-empty data
            }
        }
    });

    return { mergedFields, conflictCount };
}

function validateTransformedData(data) {
    const errors = [];
    const warnings = [];

    // Required field validation
    if (!data.customerId) errors.push('Missing customerId');
    if (!data.email) warnings.push('Missing email address');
    if (!data.lastName) warnings.push('Missing last name');

    // Data type validation
    if (data.age && (typeof data.age !== 'number' || data.age < 0 || data.age > 150)) {
        errors.push('Invalid age value');
    }

    return {
        valid: errors.length === 0,
        errors,
        warnings
    };
}

// Usage Example
const primaryRecord = {
    customerId: 'cust_001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 35,
    segment: 'premium'
};

const crmData = {
    sourceId: 'crm_system',
    phone: '+1-555-0123',
    company: 'Tech Corp',
    segment: 'enterprise' // Conflict with primary
};

const billingData = {
    sourceId: 'billing_system',
    billingAddress: '123 Main St',
    currency: 'USD',
    lifetimeValue: 15000
};

const result = transformCustomerData(primaryRecord, crmData, billingData);
console.log('Transformation Result:', result);

/*

Transformation Result: {
  success: true,
  transformedData: {
    customerId: 'cust_001',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 35,
    segment: 'enterprise',
    sourceId: 'billing_system',
    phone: '+1-555-0123',
    company: 'Tech Corp',
    billingAddress: '123 Main St',
    currency: 'USD',
    lifetimeValue: 15000
  },
  metadata: {
    originalSource: 'primary',
    transformationVersion: '3.2.1',
    processedAt: '2026-01-08T19:21:33.219Z',
    dataSourcesProcessed: 3,
    mergedSources: [ [Object], [Object] ]
  },
  warnings: [],
  log: [
    'Primary customer record processed',
    'Successfully merged crm_system with 1 conflicts resolved',
    'Successfully merged billing_system with 1 conflicts resolved'
  ],
  summary: {
    totalSources: 3,
    successfulMerges: 2,
    customerId: 'cust_001',
    finalRecordCount: 12
  }
}

*/


// 4. Return Values & Early Returns - Authentication Service

/*
 Comprehensive Authentication Service with Early Returns
 Handles user authentication with multiple validation layers
*/
function authenticateUser(credentials, sessionContext, securityConfig = {}) {
    // Early return for missing credentials
    if (!credentials || typeof credentials !== 'object') {
        return {
            authenticated: false,
            error: 'INVALID_CREDENTIALS_FORMAT',
            message: 'Credentials must be provided as an object',
            statusCode: 400,
            timestamp: new Date().toISOString()
        };
    }

    // Early return for missing required fields
    const { username, password, token } = credentials;
    if (!username && !token) {
        return {
            authenticated: false,
            error: 'MISSING_AUTH_METHOD',
            message: 'Either username/password or token must be provided',
            statusCode: 400,
            timestamp: new Date().toISOString()
        };
    }

    // Early return for system maintenance
    if (securityConfig.maintenanceMode) {
        return {
            authenticated: false,
            error: 'SYSTEM_MAINTENANCE',
            message: 'Authentication service is currently under maintenance',
            statusCode: 503,
            timestamp: new Date().toISOString(),
            retryAfter: securityConfig.maintenanceEndTime || '30 minutes'
        };
    }

    // Early return for rate limiting
    if (sessionContext?.rateLimitExceeded) {
        return {
            authenticated: false,
            error: 'RATE_LIMIT_EXCEEDED',
            message: 'Too many authentication attempts',
            statusCode: 429,
            timestamp: new Date().toISOString(),
            retryAfter: '15 minutes'
        };
    }

    // Token-based authentication flow
    if (token) {
        return handleTokenAuthentication(token, sessionContext, securityConfig);
    }

    // Username/password authentication flow
    return handlePasswordAuthentication(username, password, sessionContext, securityConfig);
}

function handleTokenAuthentication(token, sessionContext, securityConfig) {
    // Early return for invalid token format
    if (typeof token !== 'string' || token.length < 10) {
        return {
            authenticated: false,
            error: 'INVALID_TOKEN_FORMAT',
            message: 'Token must be a valid string',
            statusCode: 400,
            timestamp: new Date().toISOString()
        };
    }

    // Token validation logic
    const tokenValidation = validateJWTToken(token, securityConfig.jwtSecret);
    if (!tokenValidation.valid) {
        return {
            authenticated: false,
            error: 'INVALID_TOKEN',
            message: tokenValidation.error,
            statusCode: 401,
            timestamp: new Date().toISOString()
        };
    }

    // Check token expiration
    if (tokenValidation.expiresAt < Date.now()) {
        return {
            authenticated: false,
            error: 'TOKEN_EXPIRED',
            message: 'Authentication token has expired',
            statusCode: 401,
            timestamp: new Date().toISOString(),
            renewalToken: tokenValidation.canRenew ? generateRenewalToken(token) : null
        };
    }

    // Successful token authentication
    const userSession = createUserSession(tokenValidation.payload, sessionContext);
    
    return {
        authenticated: true,
        user: {
            id: tokenValidation.payload.userId,
            username: tokenValidation.payload.username,
            roles: tokenValidation.payload.roles || ['user'],
            permissions: tokenValidation.payload.permissions || ['read']
        },
        session: userSession,
        token: {
            type: 'Bearer',
            expiresIn: tokenValidation.expiresIn,
            renewalAvailable: tokenValidation.canRenew
        },
        statusCode: 200,
        timestamp: new Date().toISOString()
    };
}

function handlePasswordAuthentication(username, password, sessionContext, securityConfig) {
    // Early return for missing username or password
    if (!username || !password) {
        return {
            authenticated: false,
            error: 'MISSING_CREDENTIALS',
            message: 'Both username and password are required',
            statusCode: 400,
            timestamp: new Date().toISOString()
        };
    }

    // Validate credentials against database
    const user = validateUserCredentials(username, password);
    if (!user) {
        return {
            authenticated: false,
            error: 'INVALID_CREDENTIALS',
            message: 'Invalid username or password',
            statusCode: 401,
            timestamp: new Date().toISOString(),
            attemptsRemaining: sessionContext?.attemptsRemaining || 3
        };
    }

    // Check if account is locked
    if (user.accountLocked) {
        return {
            authenticated: false,
            error: 'ACCOUNT_LOCKED',
            message: 'Account is temporarily locked due to suspicious activity',
            statusCode: 423,
            timestamp: new Date().toISOString(),
            unlockTime: user.unlockTime
        };
    }

    // Check if password needs rotation
    if (user.passwordExpired) {
        return {
            authenticated: false,
            error: 'PASSWORD_EXPIRED',
            message: 'Password has expired and needs to be changed',
            statusCode: 401,
            timestamp: new Date().toISOString(),
            requiresPasswordChange: true,
            temporaryToken: generatePasswordChangeToken(user.id)
        };
    }

    // Successful password authentication
    const authToken = generateAuthToken(user, securityConfig);
    const userSession = createUserSession(user, sessionContext);

    return {
        authenticated: true,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            roles: user.roles,
            permissions: user.permissions,
            lastLogin: user.lastLogin
        },
        session: userSession,
        token: {
            type: 'Bearer',
            value: authToken.token,
            expiresIn: authToken.expiresIn,
            refreshToken: authToken.refreshToken
        },
        statusCode: 200,
        timestamp: new Date().toISOString(),
        warnings: user.passwordExpiresSoon ? ['Password will expire soon'] : []
    };
}

// Helper functions (simplified for example)
function validateJWTToken(token, secret) {
    // Simplified JWT validation
    return {
        valid: token.startsWith('valid_'),
        payload: { userId: 'user_123', username: 'john.doe', roles: ['user'] },
        expiresAt: Date.now() + 3600000,
        expiresIn: 3600,
        canRenew: true,
        error: token.startsWith('valid_') ? null : 'Invalid token signature'
    };
}

function validateUserCredentials(username, password) {
    // Simplified credential validation
    if (username === 'john.doe' && password === 'securepassword') {
        return {
            id: 'user_123',
            username: 'john.doe',
            email: 'john.doe@example.com',
            roles: ['user', 'admin'],
            permissions: ['read', 'write', 'delete'],
            lastLogin: new Date().toISOString(),
            passwordExpired: false,
            passwordExpiresSoon: false,
            accountLocked: false
        };
    }
    return null;
}

function generateAuthToken(user, securityConfig) {
    return {
        token: `valid_${user.id}_${Date.now()}`,
        expiresIn: securityConfig.tokenExpiry || 3600,
        refreshToken: `refresh_${user.id}_${Date.now()}`
    };
}

function createUserSession(userData, sessionContext) {
    return {
        sessionId: `sess_${Date.now()}_${userData.id}`,
        userId: userData.id,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        ipAddress: sessionContext?.ipAddress || 'unknown',
        userAgent: sessionContext?.userAgent || 'unknown'
    };
}

function generatePasswordChangeToken(userId) {
    return `pwd_change_${userId}_${Date.now()}`;
}

function generateRenewalToken(token) {
    return `renew_${token}_${Date.now()}`;
}

// Usage Examples
const credentials1 = {
    username: 'john.doe',
    password: 'securepassword'
};

const sessionContext1 = {
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    attemptsRemaining: 5
};

const authResult1 = authenticateUser(credentials1, sessionContext1);
console.log('Password Auth Result:', authResult1);

const credentials2 = {
    token: 'valid_user_123_1234567890'
};

const authResult2 = authenticateUser(credentials2, sessionContext1);
console.log('Token Auth Result:', authResult2);

const invalidCredentials = {
    username: 'john.doe'
};

const authResult3 = authenticateUser(invalidCredentials, sessionContext1);
console.log('Invalid Auth Result:', authResult3);

/*

Password Auth Result: {
  authenticated: true,
  user: {
    id: 'user_123',
    username: 'john.doe',
    email: 'john.doe@example.com',
    roles: [ 'user', 'admin' ],
    permissions: [ 'read', 'write', 'delete' ],
    lastLogin: '2026-01-08T19:22:56.245Z'
  },
  session: {
    sessionId: 'sess_1767900176245_user_123',
    userId: 'user_123',
    createdAt: '2026-01-08T19:22:56.245Z',
    expiresAt: '2026-01-09T19:22:56.245Z',
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  },
  token: {
    type: 'Bearer',
    value: 'valid_user_123_1767900176245',
    expiresIn: 3600,
    refreshToken: 'refresh_user_123_1767900176245'
  },
  statusCode: 200,
  timestamp: '2026-01-08T19:22:56.245Z',
  warnings: []
}
Token Auth Result: {
  authenticated: true,
  user: {
    id: 'user_123',
    username: 'john.doe',
    roles: [ 'user' ],
    permissions: [ 'read' ]
  },
  session: {
    sessionId: 'sess_1767900176245_undefined',
    userId: undefined,
    createdAt: '2026-01-08T19:22:56.245Z',
    expiresAt: '2026-01-09T19:22:56.245Z',
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  },
  token: { type: 'Bearer', expiresIn: 3600, renewalAvailable: true },
  statusCode: 200,
  timestamp: '2026-01-08T19:22:56.245Z'
}
Invalid Auth Result: {
  authenticated: false,
  error: 'MISSING_CREDENTIALS',
  message: 'Both username and password are required',
  statusCode: 400,
  timestamp: '2026-01-08T19:22:56.246Z'
}

*/


// 5. First-Class Functions - Payment Processing Pipeline

/*
 Payment Processing Pipeline using First-Class Functions
 Demonstrates functions as values that can be passed as arguments
*/
function createPaymentProcessor(validationRules, paymentMethods, postProcessingHooks) {
    // Input validation
    if (!Array.isArray(validationRules) || validationRules.length === 0) {
        throw new Error('Validation rules must be a non-empty array');
    }
    
    if (typeof paymentMethods !== 'object' || Object.keys(paymentMethods).length === 0) {
        throw new Error('Payment methods must be an object with at least one method');
    }

    // Return a payment processor function
    return async function processPayment(paymentRequest, context = {}) {
        const processingLog = [];
        const startTime = Date.now();
        
        // Add to processing log
        const logStep = (step, details) => {
            processingLog.push({
                step,
                timestamp: new Date().toISOString(),
                details,
                duration: Date.now() - startTime
            });
        };

        logStep('start', 'Payment processing initiated');

        try {
            // Validate payment request
            logStep('validation', 'Starting validation phase');
            const validationResult = await executeValidationPipeline(validationRules, paymentRequest, context);
            
            if (!validationResult.valid) {
                logStep('validation_failed', validationResult.errors);
                return {
                    success: false,
                    error: 'PAYMENT_VALIDATION_FAILED',
                    errors: validationResult.errors,
                    paymentId: paymentRequest.paymentId,
                    timestamp: new Date().toISOString(),
                    processingLog
                };
            }

            logStep('validation_success', 'All validation rules passed');

            // Execute payment
            logStep('payment_execution', 'Starting payment execution');
            const paymentMethod = paymentMethods[paymentRequest.paymentMethod];
            if (!paymentMethod) {
                throw new Error(`Unsupported payment method: ${paymentRequest.paymentMethod}`);
            }

            const paymentResult = await paymentMethod(paymentRequest, context);
            logStep('payment_completed', `Payment executed with status: ${paymentResult.status}`);

            // Execute post-processing hooks
            logStep('post_processing', 'Starting post-processing hooks');
            const postProcessingResults = await executePostProcessingHooks(
                postProcessingHooks, 
                paymentRequest, 
                paymentResult, 
                context
            );

            logStep('completed', 'Payment processing completed successfully');

            return {
                success: true,
                paymentId: paymentRequest.paymentId,
                transactionId: paymentResult.transactionId,
                amount: paymentRequest.amount,
                currency: paymentRequest.currency,
                status: paymentResult.status,
                timestamp: new Date().toISOString(),
                processingTime: Date.now() - startTime,
                processingLog,
                postProcessing: postProcessingResults
            };

        } catch (error) {
            logStep('error', `Payment processing failed: ${error.message}`);
            return {
                success: false,
                error: 'PAYMENT_PROCESSING_ERROR',
                message: error.message,
                paymentId: paymentRequest.paymentId,
                timestamp: new Date().toISOString(),
                processingTime: Date.now() - startTime,
                processingLog
            };
        }
    };
}

// First-class validation functions
const amountValidation = async (paymentRequest, context) => {
    if (paymentRequest.amount <= 0) {
        return { valid: false, error: 'Amount must be greater than zero' };
    }
    if (paymentRequest.amount > 100000) { // $100,000 limit
        return { valid: false, error: 'Amount exceeds maximum limit' };
    }
    return { valid: true };
};

const currencyValidation = async (paymentRequest, context) => {
    const supportedCurrencies = ['USD', 'EUR', 'GBP', 'CAD'];
    if (!supportedCurrencies.includes(paymentRequest.currency)) {
        return { valid: false, error: `Unsupported currency: ${paymentRequest.currency}` };
    }
    return { valid: true };
};

const fraudDetection = async (paymentRequest, context) => {
    // Simulate fraud check
    if (paymentRequest.amount > 5000 && context.user?.riskLevel === 'high') {
        return { valid: false, error: 'Potential fraud detected' };
    }
    return { valid: true };
};

// First-class payment method functions
const creditCardProcessor = async (paymentRequest, context) => {
    // Simulate credit card processing
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (paymentRequest.cardNumber === '4111111111111111') { // Test card
        return {
            transactionId: `cc_${Date.now()}`,
            status: 'completed',
            gateway: 'stripe',
            authorizationCode: `auth_${Math.random().toString(36).substr(2, 8)}`
        };
    }
    
    throw new Error('Credit card processing failed');
};

const paypalProcessor = async (paymentRequest, context) => {
    // Simulate PayPal processing
    await new Promise(resolve => setTimeout(resolve, 150));
    
    return {
        transactionId: `pp_${Date.now()}`,
        status: 'completed',
        gateway: 'paypal',
        payerId: `payer_${Math.random().toString(36).substr(2, 8)}`
    };
};

// First-class post-processing functions
const emailNotification = async (paymentRequest, paymentResult, context) => {
    // Simulate email sending
    console.log(`Sending payment confirmation email for ${paymentRequest.paymentId}`);
    return { emailSent: true, recipient: context.user?.email };
};

const databaseUpdate = async (paymentRequest, paymentResult, context) => {
    // Simulate database update
    console.log(`Updating payment record for ${paymentRequest.paymentId}`);
    return { databaseUpdated: true, recordId: paymentResult.transactionId };
};

const analyticsTracking = async (paymentRequest, paymentResult, context) => {
    // Simulate analytics tracking
    console.log(`Tracking payment event: ${paymentRequest.paymentId}`);
    return { tracked: true, event: 'payment_completed' };
};

// Helper functions
async function executeValidationPipeline(validationRules, paymentRequest, context) {
    const errors = [];
    
    for (const rule of validationRules) {
        const result = await rule(paymentRequest, context);
        if (!result.valid) {
            errors.push(result.error);
        }
    }
    
    return {
        valid: errors.length === 0,
        errors: errors
    };
}

async function executePostProcessingHooks(hooks, paymentRequest, paymentResult, context) {
    const results = {};
    
    for (const [hookName, hookFunction] of Object.entries(hooks)) {
        try {
            results[hookName] = await hookFunction(paymentRequest, paymentResult, context);
        } catch (error) {
            results[hookName] = { error: error.message };
        }
    }
    
    return results;
}

// Usage Example
const validationRules = [amountValidation, currencyValidation, fraudDetection];
const paymentMethods = { credit_card: creditCardProcessor, paypal: paypalProcessor };
const postProcessingHooks = { emailNotification, databaseUpdate, analyticsTracking };

const paymentProcessor = createPaymentProcessor(validationRules, paymentMethods, postProcessingHooks);

// Example payment request
const paymentRequest = {
    paymentId: 'pay_123456',
    amount: 99.99,
    currency: 'USD',
    paymentMethod: 'credit_card',
    cardNumber: '4111111111111111',
    expirationDate: '12/25',
    cvv: '123'
};

const context = {
    user: {
        id: 'user_123',
        email: 'customer@example.com',
        riskLevel: 'low'
    },
    ipAddress: '192.168.1.100'
};

// Execute payment
paymentProcessor(paymentRequest, context).then(result => {
    console.log('Payment Result:', JSON.stringify(result, null, 2));
});

/*

Sending payment confirmation email for pay_123456
Updating payment record for pay_123456
Tracking payment event: pay_123456
Payment Result: {
  "success": true,
  "paymentId": "pay_123456",
  "transactionId": "cc_1767900360000",
  "amount": 99.99,
  "currency": "USD",
  "status": "completed",
  "timestamp": "2026-01-08T19:26:00.001Z",
  "processingTime": 103,
  "processingLog": [
    {
      "step": "start",
      "timestamp": "2026-01-08T19:25:59.898Z",
      "details": "Payment processing initiated",
      "duration": 0
    },
    {
      "step": "validation",
      "timestamp": "2026-01-08T19:25:59.898Z",
      "details": "Starting validation phase",
      "duration": 0
    },
    {
      "step": "validation_success",
      "timestamp": "2026-01-08T19:25:59.898Z",
      "details": "All validation rules passed",
      "duration": 0
    },
    {
      "step": "payment_execution",
      "timestamp": "2026-01-08T19:25:59.898Z",
      "details": "Starting payment execution",
      "duration": 0
    },
    {
      "step": "payment_completed",
      "timestamp": "2026-01-08T19:26:00.000Z",
      "details": "Payment executed with status: completed",
      "duration": 102
    },
    {
      "step": "post_processing",
      "timestamp": "2026-01-08T19:26:00.000Z",
      "details": "Starting post-processing hooks",
      "duration": 102
    },
    {
      "step": "completed",
      "timestamp": "2026-01-08T19:26:00.001Z",
      "details": "Payment processing completed successfully",
      "duration": 103
    }
  ],
  "postProcessing": {
    "emailNotification": {
      "emailSent": true,
      "recipient": "customer@example.com"
    },
    "databaseUpdate": {
      "databaseUpdated": true,
      "recordId": "cc_1767900360000"
    },
    "analyticsTracking": {
      "tracked": true,
      "event": "payment_completed"
    }
  }
}

*/

// 6. Higher-Order Function - API Rate Limiter Factory
/*
 Higher-Order Function Factory for API Rate Limiting
 Creates rate-limited versions of API functions with different strategies
*/
function createRateLimitManager(rateLimitConfig = {}) {
    const defaultConfig = {
        strategy: 'sliding_window', // 'fixed_window', 'token_bucket', 'sliding_window'
        storage: 'memory', // 'memory', 'redis', 'database'
        maxRequests: 100,
        timeWindow: 60000, // 1 minute in milliseconds
        blockDuration: 300000, // 5 minutes block after limit exceeded
        ...rateLimitConfig
    };

    // Strategy implementations as first-class functions
    const strategies = {
        fixed_window: createFixedWindowStrategy(defaultConfig),
        sliding_window: createSlidingWindowStrategy(defaultConfig),
        token_bucket: createTokenBucketStrategy(defaultConfig)
    };

    // Higher-order function that returns a rate-limited function
    return function rateLimitWrapper(apiFunction, customConfig = {}) {
        const config = { ...defaultConfig, ...customConfig };
        const strategy = strategies[config.strategy];
        
        if (!strategy) {
            throw new Error(`Unsupported rate limit strategy: ${config.strategy}`);
        }

        // Return a new rate-limited function
        return async function rateLimitedFunction(identifier, ...args) {
            const limitCheck = await strategy.checkLimit(identifier);
            
            if (!limitCheck.allowed) {
                throw new Error(`Rate limit exceeded for ${identifier}. ${limitCheck.remainingTime ? `Retry after ${limitCheck.remainingTime}ms` : 'Try again later'}`);
            }

            try {
                // Update usage count
                await strategy.recordRequest(identifier);
                
                // Execute the original function
                const result = await apiFunction(...args);
                
                return {
                    ...result,
                    rateLimit: {
                        remaining: limitCheck.remaining - 1,
                        resetTime: limitCheck.resetTime,
                        limit: config.maxRequests
                    }
                };
            } catch (error) {
                // Re-throw the error
                throw error;
            }
        };
    };
}

// Strategy implementations
function createFixedWindowStrategy(config) {
    const windows = new Map(); // In production, this would be Redis or database
    
    return {
        async checkLimit(identifier) {
            const now = Date.now();
            const windowStart = Math.floor(now / config.timeWindow) * config.timeWindow;
            const windowKey = `${identifier}_${windowStart}`;
            
            const windowData = windows.get(windowKey) || { count: 0, startTime: windowStart };
            
            const remaining = Math.max(0, config.maxRequests - windowData.count);
            const resetTime = windowStart + config.timeWindow;
            const remainingTime = resetTime - now;
            
            return {
                allowed: windowData.count < config.maxRequests,
                remaining,
                resetTime,
                remainingTime
            };
        },
        
        async recordRequest(identifier) {
            const now = Date.now();
            const windowStart = Math.floor(now / config.timeWindow) * config.timeWindow;
            const windowKey = `${identifier}_${windowStart}`;
            
            const windowData = windows.get(windowKey) || { count: 0, startTime: windowStart };
            windowData.count++;
            windows.set(windowKey, windowData);
            
            // Clean up old windows (in production, use TTL)
            cleanupOldWindows(windows, config.timeWindow * 2);
        }
    };
}

function createSlidingWindowStrategy(config) {
    const requests = new Map(); // In production, this would be Redis or database
    
    return {
        async checkLimit(identifier) {
            const now = Date.now();
            const userRequests = requests.get(identifier) || [];
            
            // Remove requests outside the current window
            const windowStart = now - config.timeWindow;
            const recentRequests = userRequests.filter(time => time > windowStart);
            requests.set(identifier, recentRequests);
            
            const remaining = Math.max(0, config.maxRequests - recentRequests.length);
            const oldestRequest = recentRequests[0] || now;
            const resetTime = oldestRequest + config.timeWindow;
            const remainingTime = resetTime - now;
            
            return {
                allowed: recentRequests.length < config.maxRequests,
                remaining,
                resetTime,
                remainingTime
            };
        },
        
        async recordRequest(identifier) {
            const now = Date.now();
            const userRequests = requests.get(identifier) || [];
            userRequests.push(now);
            requests.set(identifier, userRequests);
        }
    };
}

function createTokenBucketStrategy(config) {
    const buckets = new Map(); // In production, this would be Redis or database
    
    return {
        async checkLimit(identifier) {
            const now = Date.now();
            let bucket = buckets.get(identifier);
            
            if (!bucket) {
                bucket = {
                    tokens: config.maxRequests,
                    lastRefill: now
                };
                buckets.set(identifier, bucket);
            }
            
            // Refill tokens based on time elapsed
            const timeElapsed = now - bucket.lastRefill;
            const tokensToAdd = Math.floor(timeElapsed / (config.timeWindow / config.maxRequests));
            
            if (tokensToAdd > 0) {
                bucket.tokens = Math.min(config.maxRequests, bucket.tokens + tokensToAdd);
                bucket.lastRefill = now;
            }
            
            const allowed = bucket.tokens >= 1;
            const remaining = bucket.tokens;
            const resetTime = now + (config.timeWindow / config.maxRequests);
            const remainingTime = resetTime - now;
            
            return {
                allowed,
                remaining,
                resetTime,
                remainingTime
            };
        },
        
        async recordRequest(identifier) {
            const bucket = buckets.get(identifier);
            if (bucket && bucket.tokens > 0) {
                bucket.tokens--;
            }
        }
    };
}

function cleanupOldWindows(windows, maxAge) {
    const now = Date.now();
    for (const [key, value] of windows.entries()) {
        if (now - value.startTime > maxAge) {
            windows.delete(key);
        }
    }
}

// Example API functions to be rate-limited
async function fetchUserData(userId) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 50));
    return {
        userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
        lastLogin: new Date().toISOString()
    };
}

async function updateUserProfile(userId, profileData) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
        userId,
        ...profileData,
        updatedAt: new Date().toISOString(),
        status: 'updated'
    };
}

async function placeOrder(orderData) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 200));
    return {
        orderId: `order_${Date.now()}`,
        ...orderData,
        status: 'processed',
        total: orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };
}

// Usage Example
const rateLimitManager = createRateLimitManager({
    strategy: 'sliding_window',
    maxRequests: 5,
    timeWindow: 60000 // 1 minute
});

// Create rate-limited versions of API functions
const limitedUserFetch = rateLimitManager(fetchUserData, { maxRequests: 10 });
const limitedProfileUpdate = rateLimitManager(updateUserProfile, { maxRequests: 3 });
const limitedOrderPlacement = rateLimitManager(placeOrder, { maxRequests: 2 });

// Simulate multiple API calls
async function simulateUserActivity() {
    const userId = 'user_123';
    
    try {
        // These should succeed
        const user1 = await limitedUserFetch(userId, 'user_1');
        const user2 = await limitedUserFetch(userId, 'user_2');
        const update1 = await limitedProfileUpdate(userId, { name: 'John Updated' });
        
        // This might hit the limit depending on timing
        const order = await limitedOrderPlacement(userId, {
            items: [{ productId: 'prod_1', price: 29.99, quantity: 2 }]
        });
        
        console.log('All operations completed successfully');
    } catch (error) {
        console.error('Operation failed:', error.message);
    }
}

simulateUserActivity();

/*

All operations completed successfully

*/

// 7. Pure Function - Financial Calculator

/*
 Pure Function for Financial Calculations
 Same inputs always produce same outputs, no side effects
*/
function calculateLoanAmortization(loanDetails) {
    // Input validation
    if (!loanDetails || typeof loanDetails !== 'object') {
        throw new Error('Loan details must be provided as an object');
    }
    
    const { principal, annualRate, loanTermYears, paymentFrequency = 'monthly' } = loanDetails;
    
    // Validate numerical inputs
    if (typeof principal !== 'number' || principal <= 0) {
        throw new Error('Principal must be a positive number');
    }
    
    if (typeof annualRate !== 'number' || annualRate < 0 || annualRate > 1) {
        throw new Error('Annual rate must be between 0 and 1');
    }
    
    if (typeof loanTermYears !== 'number' || loanTermYears <= 0) {
        throw new Error('Loan term must be a positive number');
    }
    
    // Calculate payment schedule (pure calculations)
    const frequencyMultiplier = getFrequencyMultiplier(paymentFrequency);
    const numberOfPayments = loanTermYears * frequencyMultiplier;
    const periodicRate = annualRate / frequencyMultiplier;
    
    // Calculate periodic payment using amortization formula
    const periodicPayment = calculatePeriodicPayment(principal, periodicRate, numberOfPayments);
    
    // Generate amortization schedule
    const amortizationSchedule = generateSchedule(principal, periodicRate, numberOfPayments, periodicPayment);
    
    // Calculate totals (pure calculations)
    const totalPayments = amortizationSchedule.reduce((total, payment) => total + payment.payment, 0);
    const totalInterest = amortizationSchedule.reduce((total, payment) => total + payment.interest, 0);
    
    return {
        loanSummary: {
            principal,
            annualRate,
            loanTermYears,
            paymentFrequency,
            numberOfPayments,
            periodicPayment: roundToCent(periodicPayment),
            totalPayments: roundToCent(totalPayments),
            totalInterest: roundToCent(totalInterest),
            interestToPrincipalRatio: roundToCent(totalInterest / principal)
        },
        amortizationSchedule,
        calculatedAt: new Date().toISOString(),
        calculationId: generateCalculationHash(loanDetails)
    };
}

// Pure helper functions
function getFrequencyMultiplier(frequency) {
    const multipliers = {
        monthly: 12,
        biweekly: 26,
        weekly: 52,
        daily: 365
    };
    return multipliers[frequency] || 12;
}

function calculatePeriodicPayment(principal, periodicRate, numberOfPayments) {
    if (periodicRate === 0) {
        return principal / numberOfPayments;
    }
    
    const discountFactor = (1 - Math.pow(1 + periodicRate, -numberOfPayments)) / periodicRate;
    return principal / discountFactor;
}

function generateSchedule(principal, periodicRate, numberOfPayments, periodicPayment) {
    let balance = principal;
    const schedule = [];
    
    for (let paymentNumber = 1; paymentNumber <= numberOfPayments; paymentNumber++) {
        const interest = balance * periodicRate;
        const principalPayment = periodicPayment - interest;
        
        // Handle final payment adjustment
        const finalPayment = paymentNumber === numberOfPayments;
        const actualPrincipalPayment = finalPayment ? balance : principalPayment;
        const actualPayment = finalPayment ? balance + interest : periodicPayment;
        
        schedule.push({
            paymentNumber,
            payment: roundToCent(actualPayment),
            principal: roundToCent(actualPrincipalPayment),
            interest: roundToCent(interest),
            balance: roundToCent(finalPayment ? 0 : balance - actualPrincipalPayment)
        });
        
        balance -= actualPrincipalPayment;
    }
    
    return schedule;
}

function roundToCent(amount) {
    return Math.round(amount * 100) / 100;
}

function generateCalculationHash(loanDetails) {
    // Create a deterministic hash based on input parameters
    const inputString = JSON.stringify(loanDetails);
    let hash = 0;
    
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    
    return `calc_${Math.abs(hash).toString(36)}`;
}

// Pure function for interest calculation
function calculateCompoundInterest(principal, annualRate, years, compoundFrequency = 'annually') {
    const frequencies = {
        annually: 1,
        semiannually: 2,
        quarterly: 4,
        monthly: 12,
        daily: 365
    };
    
    const n = frequencies[compoundFrequency] || 1;
    const rate = annualRate / n;
    const periods = years * n;
    
    const amount = principal * Math.pow(1 + rate, periods);
    const interest = amount - principal;
    
    return {
        principal: roundToCent(principal),
        annualRate,
        years,
        compoundFrequency,
        futureValue: roundToCent(amount),
        totalInterest: roundToCent(interest),
        effectiveAnnualRate: Math.pow(1 + rate, n) - 1
    };
}

// Usage Examples
const loanDetails1 = {
    principal: 200000,
    annualRate: 0.05, // 5%
    loanTermYears: 30,
    paymentFrequency: 'monthly'
};

const loanDetails2 = {
    principal: 200000,
    annualRate: 0.05,
    loanTermYears: 30,
    paymentFrequency: 'monthly'
};

// Same inputs produce same outputs (pure function)
const amortization1 = calculateLoanAmortization(loanDetails1);
const amortization2 = calculateLoanAmortization(loanDetails2);

console.log('Amortization Schedule 1:', amortization1.loanSummary);
console.log('Amortization Schedule 2:', amortization2.loanSummary);
console.log('Results are identical:', 
    JSON.stringify(amortization1.loanSummary) === JSON.stringify(amortization2.loanSummary));

// Compound interest calculation
const investment = calculateCompoundInterest(10000, 0.07, 10, 'monthly');
console.log('Investment Growth:', investment);

/*

Amortization Schedule 1: {
  principal: 200000,
  annualRate: 0.05,
  loanTermYears: 30,
  paymentFrequency: 'monthly',
  numberOfPayments: 360,
  periodicPayment: 1073.64,
  totalPayments: 386510.4,
  totalInterest: 186511.64,
  interestToPrincipalRatio: 0.93
}
Amortization Schedule 2: {
  principal: 200000,
  annualRate: 0.05,
  loanTermYears: 30,
  paymentFrequency: 'monthly',
  numberOfPayments: 360,
  periodicPayment: 1073.64,
  totalPayments: 386510.4,
  totalInterest: 186511.64,
  interestToPrincipalRatio: 0.93
}
Results are identical: true
Investment Growth: {
  principal: 10000,
  annualRate: 0.07,
  years: 10,
  compoundFrequency: 'monthly',
  futureValue: 20096.61,
  totalInterest: 10096.61,
  effectiveAnnualRate: 0.0722900808562359
}

*/


// 9. Closures and Lexical Scoping - Cache Manager
/*
 Cache Manager using Closures and Lexical Scoping
 Demonstrates private state preservation through closure scope
*/
function createCacheManager(cacheConfig = {}) {
    // Private state preserved through closure
    const config = {
        maxSize: cacheConfig.maxSize || 100,
        defaultTTL: cacheConfig.defaultTTL || 300000, // 5 minutes
        cleanupInterval: cacheConfig.cleanupInterval || 60000, // 1 minute
        ...cacheConfig
    };

    // Private cache storage - inaccessible from outside
    const cacheStore = new Map();
    const accessLog = [];
    let hitCount = 0;
    let missCount = 0;
    let sizeLimit = config.maxSize;

    // Private helper functions - only accessible within this closure
    const generateCacheKey = (key) => {
        if (typeof key === 'object') {
            return JSON.stringify(key);
        }
        return String(key);
    };

    const isExpired = (cacheEntry) => {
        return Date.now() > cacheEntry.expiresAt;
    };

    const cleanupExpired = () => {
        const now = Date.now();
        let cleanedCount = 0;
        
        for (const [key, entry] of cacheStore.entries()) {
            if (isExpired(entry)) {
                cacheStore.delete(key);
                cleanedCount++;
            }
        }
        
        if (cleanedCount > 0) {
            console.log(`Cleaned ${cleanedCount} expired cache entries`);
        }
    };

    const enforceSizeLimit = () => {
        if (cacheStore.size <= sizeLimit) return;
        
        // Remove oldest entries when over limit
        const entries = Array.from(cacheStore.entries());
        const sortedByAccess = entries.sort((a, b) => a[1].lastAccessed - b[1].lastAccessed);
        
        const toRemove = sortedByAccess.slice(0, cacheStore.size - sizeLimit);
        toRemove.forEach(([key]) => cacheStore.delete(key));
        
        console.log(`Enforced size limit: removed ${toRemove.length} entries`);
    };

    const logAccess = (key, type, details = {}) => {
        accessLog.push({
            timestamp: new Date().toISOString(),
            key,
            type,
            ...details
        });
        
        // Keep only last 1000 log entries
        if (accessLog.length > 1000) {
            accessLog.splice(0, accessLog.length - 1000);
        }
    };

    // Start cleanup interval
    const cleanupIntervalId = setInterval(cleanupExpired, config.cleanupInterval);

    // Public API returned from closure
    return {
        // Store value in cache
        set(key, value, ttl = config.defaultTTL) {
            const cacheKey = generateCacheKey(key);
            const now = Date.now();
            
            const cacheEntry = {
                value: JSON.parse(JSON.stringify(value)), // Deep clone
                storedAt: now,
                expiresAt: now + ttl,
                lastAccessed: now,
                accessCount: 0
            };
            
            cacheStore.set(cacheKey, cacheEntry);
            logAccess(cacheKey, 'SET', { ttl });
            
            enforceSizeLimit();
            
            return true;
        },
        
        // Retrieve value from cache
        get(key) {
            const cacheKey = generateCacheKey(key);
            const cacheEntry = cacheStore.get(cacheKey);
            
            if (!cacheEntry) {
                missCount++;
                logAccess(cacheKey, 'MISS');
                return null;
            }
            
            if (isExpired(cacheEntry)) {
                cacheStore.delete(cacheKey);
                missCount++;
                logAccess(cacheKey, 'EXPIRED');
                return null;
            }
            
            // Update access info
            cacheEntry.lastAccessed = Date.now();
            cacheEntry.accessCount++;
            hitCount++;
            
            logAccess(cacheKey, 'HIT', { accessCount: cacheEntry.accessCount });
            
            return JSON.parse(JSON.stringify(cacheEntry.value)); // Return clone
        },
        
        // Check if key exists and is valid
        has(key) {
            const cacheKey = generateCacheKey(key);
            const cacheEntry = cacheStore.get(cacheKey);
            
            if (!cacheEntry) return false;
            if (isExpired(cacheEntry)) {
                cacheStore.delete(cacheKey);
                return false;
            }
            
            return true;
        },
        
        // Delete specific key from cache
        delete(key) {
            const cacheKey = generateCacheKey(key);
            const existed = cacheStore.delete(cacheKey);
            
            if (existed) {
                logAccess(cacheKey, 'DELETE');
            }
            
            return existed;
        },
        
        // Clear entire cache
        clear() {
            const size = cacheStore.size;
            cacheStore.clear();
            logAccess('*', 'CLEAR', { clearedEntries: size });
            return size;
        },
        
        // Get cache statistics (public method accessing private state)
        getStats() {
            const now = Date.now();
            const validEntries = Array.from(cacheStore.values())
                .filter(entry => !isExpired(entry));
            
            return {
                totalEntries: cacheStore.size,
                validEntries: validEntries.length,
                hitCount,
                missCount,
                hitRate: hitCount + missCount > 0 ? hitCount / (hitCount + missCount) : 0,
                memoryUsage: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB',
                oldestEntry: validEntries.length > 0 ? 
                    Math.min(...validEntries.map(e => e.storedAt)) : null,
                accessLogSize: accessLog.length
            };
        },
        
        // Get cache keys (for debugging)
        keys() {
            return Array.from(cacheStore.keys());
        },
        
        // Update cache configuration
        updateConfig(newConfig) {
            Object.assign(config, newConfig);
            if (newConfig.maxSize !== undefined) {
                sizeLimit = newConfig.maxSize;
                enforceSizeLimit();
            }
            return config;
        },
        
        // Manual cleanup
        cleanup() {
            cleanupExpired();
            enforceSizeLimit();
            return this.getStats();
        },
        
        // Destroy cache manager and cleanup intervals
        destroy() {
            clearInterval(cleanupIntervalId);
            cacheStore.clear();
            console.log('Cache manager destroyed');
        }
    };
}

// Usage Example
const cacheManager = createCacheManager({
    maxSize: 50,
    defaultTTL: 60000, // 1 minute
    cleanupInterval: 30000 // 30 seconds
});

// Demonstrate closure preserving private state
function demonstrateClosure() {
    const userCache = createCacheManager({
        maxSize: 10,
        defaultTTL: 30000
    });
    
    // Store some data
    userCache.set('user:123', {
        id: 123,
        name: 'John Doe',
        email: 'john@example.com',
        preferences: { theme: 'dark', notifications: true }
    }, 60000); // 1 minute TTL
    
    userCache.set('user:456', {
        id: 456,
        name: 'Jane Smith',
        email: 'jane@example.com',
        preferences: { theme: 'light', notifications: false }
    });
    
    // Demonstrate cache hits and misses
    console.log('First get (should hit):', userCache.get('user:123') !== null);
    console.log('Non-existent key (should miss):', userCache.get('user:999') === null);
    
    // Wait for expiration
    setTimeout(() => {
        console.log('After delay (might expire):', userCache.get('user:456') !== null);
        console.log('Cache stats:', userCache.getStats());
    }, 35000);
    
    return userCache;
}

// Complex example with multiple cache managers
function demonstrateMultipleClosures() {
    const sessionCache = createCacheManager({
        maxSize: 1000,
        defaultTTL: 1800000, // 30 minutes
        name: 'session'
    });
    
    const apiCache = createCacheManager({
        maxSize: 500,
        defaultTTL: 300000, // 5 minutes
        name: 'api'
    });
    
    const configCache = createCacheManager({
        maxSize: 100,
        defaultTTL: 3600000, // 1 hour
        name: 'config'
    });
    
    // Each cache manager maintains its own private state through closures
    sessionCache.set('session:abc', { userId: 123, expires: Date.now() + 1800000 });
    apiCache.set('/api/users/123', { id: 123, name: 'John' });
    configCache.set('app:settings', { theme: 'dark', language: 'en' });
    
    console.log('Session cache size:', sessionCache.getStats().totalEntries);
    console.log('API cache size:', apiCache.getStats().totalEntries);
    console.log('Config cache size:', configCache.getStats().totalEntries);
    
    return { sessionCache, apiCache, configCache };
}

// Run demonstrations
const userCache = demonstrateClosure();
const caches = demonstrateMultipleClosures();

// Show that each cache maintains separate state
console.log('\n--- Separate Cache States ---');
console.log('User cache has user:123:', userCache.has('user:123'));
console.log('API cache has user:123:', caches.apiCache.has('user:123')); // Should be false



// 10. IIFE (Immediately Invoked Function Expression) - Module Initialization

/*
 IIFE Module Pattern for Application Initialization
 Creates isolated scope and executes immediately
*/

// Configuration Module IIFE
const ConfigManager = (function() {
    // Private variables - only accessible within this IIFE
    let configData = {};
    let isInitialized = false;
    const configChangeListeners = [];
    const validationRules = {};
    
    // Private helper functions
    const validateConfig = (config) => {
        const errors = [];
        
        if (!config.app) {
            errors.push('Missing app configuration');
        }
        
        if (!config.database) {
            errors.push('Missing database configuration');
        }
        
        if (config.database && !config.database.host) {
            errors.push('Database host is required');
        }
        
        // Custom validation rules
        Object.keys(validationRules).forEach(key => {
            if (config[key] !== undefined) {
                const rule = validationRules[key];
                if (!rule.validate(config[key])) {
                    errors.push(`Validation failed for ${key}: ${rule.message}`);
                }
            }
        });
        
        return errors;
    };
    
    const notifyConfigChange = (oldConfig, newConfig) => {
        configChangeListeners.forEach(listener => {
            try {
                listener(oldConfig, newConfig);
            } catch (error) {
                console.error('Config change listener error:', error);
            }
        });
    };
    
    const deepClone = (obj) => {
        return JSON.parse(JSON.stringify(obj));
    };
    
    // Public API returned by IIFE
    return {
        // Initialize configuration
        initialize(defaultConfig = {}) {
            if (isInitialized) {
                throw new Error('ConfigManager already initialized');
            }
            
            const initialConfig = {
                app: {
                    name: 'My Application',
                    version: '1.0.0',
                    environment: process.env.NODE_ENV || 'development'
                },
                database: {
                    host: 'localhost',
                    port: 5432,
                    database: 'app_db',
                    username: 'admin'
                },
                api: {
                    timeout: 30000,
                    retryAttempts: 3
                },
                ...defaultConfig
            };
            
            const validationErrors = validateConfig(initialConfig);
            if (validationErrors.length > 0) {
                throw new Error(`Configuration validation failed: ${validationErrors.join(', ')}`);
            }
            
            configData = deepClone(initialConfig);
            isInitialized = true;
            
            console.log('ConfigManager initialized successfully');
            return configData;
        },
        
        // Get configuration value
        get(keyPath, defaultValue = undefined) {
            if (!isInitialized) {
                throw new Error('ConfigManager not initialized');
            }
            
            const keys = keyPath.split('.');
            let value = configData;
            
            for (const key of keys) {
                if (value === undefined || value === null) {
                    return defaultValue;
                }
                value = value[key];
            }
            
            return value !== undefined ? value : defaultValue;
        },
        
        // Set configuration value
        set(keyPath, value) {
            if (!isInitialized) {
                throw new Error('ConfigManager not initialized');
            }
            
            const keys = keyPath.split('.');
            const oldConfig = deepClone(configData);
            let current = configData;
            
            for (let i = 0; i < keys.length - 1; i++) {
                if (current[keys[i]] === undefined || typeof current[keys[i]] !== 'object') {
                    current[keys[i]] = {};
                }
                current = current[keys[i]];
            }
            
            current[keys[keys.length - 1]] = value;
            
            // Validate and notify
            const validationErrors = validateConfig(configData);
            if (validationErrors.length > 0) {
                // Revert changes
                configData = oldConfig;
                throw new Error(`Configuration validation failed: ${validationErrors.join(', ')}`);
            }
            
            notifyConfigChange(oldConfig, configData);
            return true;
        },
        
        // Add validation rule
        addValidationRule(keyPath, validateFn, message) {
            validationRules[keyPath] = { validate: validateFn, message };
        },
        
        // Register config change listener
        onConfigChange(listener) {
            if (typeof listener !== 'function') {
                throw new Error('Listener must be a function');
            }
            configChangeListeners.push(listener);
        },
        
        // Get entire config (read-only)
        getAll() {
            return deepClone(configData);
        },
        
        // Reset to initial state
        reset() {
            configData = {};
            isInitialized = false;
            configChangeListeners.length = 0;
            console.log('ConfigManager reset');
        },
        
        // Get initialization status
        getInitializationStatus() {
            return isInitialized;
        }
    };
})();

// Logger Module IIFE with dependencies
const Logger = (function(configManager) {
    // Private state
    const logLevels = {
        ERROR: 0,
        WARN: 1,
        INFO: 2,
        DEBUG: 3
    };
    
    let currentLogLevel = logLevels.INFO;
    const logHistory = [];
    const maxHistorySize = 1000;
    
    // Initialize from config
    const initializeFromConfig = () => {
        try {
            const configLevel = configManager.get('logging.level', 'INFO').toUpperCase();
            currentLogLevel = logLevels[configLevel] || logLevels.INFO;
        } catch (error) {
            console.error('Failed to initialize logger from config:', error);
        }
    };
    
    // Private helper function
    const shouldLog = (level) => {
        return level <= currentLogLevel;
    };
    
    const addToHistory = (entry) => {
        logHistory.push(entry);
        if (logHistory.length > maxHistorySize) {
            logHistory.shift(); // Remove oldest entry
        }
    };
    
    const formatMessage = (level, message, meta) => {
        return {
            timestamp: new Date().toISOString(),
            level: Object.keys(logLevels).find(key => logLevels[key] === level),
            message,
            meta: meta || {},
            pid: process.pid
        };
    };
    
    // Public API
    return {
        setLevel(level) {
            if (typeof level === 'string') {
                level = logLevels[level.toUpperCase()];
            }
            
            if (level !== undefined) {
                currentLogLevel = level;
            }
        },
        
        error(message, meta) {
            if (shouldLog(logLevels.ERROR)) {
                const entry = formatMessage(logLevels.ERROR, message, meta);
                addToHistory(entry);
                console.error(entry);
                return entry;
            }
        },
        
        warn(message, meta) {
            if (shouldLog(logLevels.WARN)) {
                const entry = formatMessage(logLevels.WARN, message, meta);
                addToHistory(entry);
                console.warn(entry);
                return entry;
            }
        },
        
        info(message, meta) {
            if (shouldLog(logLevels.INFO)) {
                const entry = formatMessage(logLevels.INFO, message, meta);
                addToHistory(entry);
                console.info(entry);
                return entry;
            }
        },
        
        debug(message, meta) {
            if (shouldLog(logLevels.DEBUG)) {
                const entry = formatMessage(logLevels.DEBUG, message, meta);
                addToHistory(entry);
                console.debug(entry);
                return entry;
            }
        },
        
        getHistory() {
            return [...logHistory];
        },
        
        clearHistory() {
            logHistory.length = 0;
        }
    };
})(ConfigManager); // ConfigManager injected as dependency

// Application Bootstrap IIFE
(function(configManager, logger) {
    console.log('Application bootstrapping...');
    
    try {
        // Initialize configuration
        const config = configManager.initialize({
            app: {
                name: 'Production App',
                version: '2.0.0',
                environment: 'production'
            },
            database: {
                host: 'db.company.com',
                port: 5432,
                database: 'production_db',
                username: 'prod_user',
                password: process.env.DB_PASSWORD
            },
            logging: {
                level: 'INFO'
            }
        });
        
        // Set up configuration validation
        configManager.addValidationRule('app.name', (name) => {
            return typeof name === 'string' && name.length > 0;
        }, 'App name must be a non-empty string');
        
        configManager.addValidationRule('database.port', (port) => {
            return typeof port === 'number' && port > 0 && port < 65536;
        }, 'Database port must be a valid port number');
        
        // Set up config change listeners
        configManager.onConfigChange((oldConfig, newConfig) => {
            logger.info('Configuration changed', {
                oldAppName: oldConfig.app.name,
                newAppName: newConfig.app.name
            });
        });
        
        // Initialize logger from config
        logger.setLevel(configManager.get('logging.level'));
        
        // Log startup information
        logger.info('Application initialized successfully', {
            appName: config.app.name,
            environment: config.app.environment,
            databaseHost: config.database.host
        });
        
        // Demonstrate configuration updates
        setTimeout(() => {
            try {
                configManager.set('app.name', 'Updated Production App');
                logger.info('App name updated');
            } catch (error) {
                logger.error('Failed to update app name', { error: error.message });
            }
        }, 1000);
        
        console.log('Application bootstrap completed');
        
    } catch (error) {
        console.error('Application bootstrap failed:', error);
        // In real app, might process.exit(1) here
    }
})(ConfigManager, Logger);

// Usage examples after bootstrap
console.log('\n--- Testing ConfigManager and Logger ---');

// These will work after the IIFE has executed
try {
    const dbHost = ConfigManager.get('database.host');
    console.log('Database host:', dbHost);
    
    Logger.info('Test message from outside IIFE');
    
    // Try to update config
    ConfigManager.set('api.timeout', 60000);
    console.log('Updated API timeout');
    
} catch (error) {
    console.error('Error using modules:', error.message);
}

// Demonstrate that internal state is protected
console.log('ConfigManager internal state inaccessible:', 
    ConfigManager.configData === undefined); // Should be undefined

 
// 11. Hoisting Difference - Declaration vs Expression
    
/*
 Demonstration of Hoisting Differences between Function Declarations and Expressions
 ES6 Module Compatible Version
*/

console.log('=== Hoisting Demonstration (ES6 Module Compatible) ===');

// Function Declaration - gets hoisted completely
console.log('1. Function Declaration Hoisting:');

// This works because function declarations are hoisted
try {
    const result = calculateTotalDeclared([10, 20, 30]);
    console.log('Result from hoisted function:', result);
} catch (error) {
    console.log('Error with hoisted function:', error.message);
}

// Function Declaration (hoisted to top)
function calculateTotalDeclared(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
    }
    
    return numbers.reduce((total, num) => {
        if (typeof num !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return total + num;
    }, 0);
}

// Function Expression - only the variable is hoisted, but not initialized in ES6 modules
console.log('\n2. Function Expression Hoisting:');

// In ES6 modules, we can't access variables before initialization due to TDZ
// So we'll demonstrate the concept differently
const calculateTotalExpressed = function(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
    }
    
    return numbers.reduce((total, num) => {
        if (typeof num !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return total + num;
    }, 0);
};

// This works because we're after the function expression definition
try {
    const result = calculateTotalExpressed([10, 20, 30]);
    console.log('Result from function expression:', result);
} catch (error) {
    console.log('Error with function expression:', error.message);
}

// Let's demonstrate the concept safely using separate functions
function demonstrateFunctionHoisting() {
    console.log('\n3. Safe Hoisting Demonstration Inside Function:');
    
    // This works because function declarations are hoisted within function scope
    const result1 = innerHoistedFunction([1, 2, 3]);
    console.log('Inner hoisted function result:', result1);
    
    function innerHoistedFunction(nums) {
        return nums.reduce((a, b) => a + b, 0);
    }
    
    // This would fail if uncommented - function expression not hoisted
    // const result2 = innerExpressionFunction([1, 2, 3]);
    
    const innerExpressionFunction = function(nums) {
        return nums.reduce((a, b) => a + b, 0);
    };
    
    // This works because it's after the declaration
    const result2 = innerExpressionFunction([1, 2, 3]);
    console.log('Inner expression function result:', result2);
    
    return { result1, result2 };
}

demonstrateFunctionHoisting();

// Arrow Function Expression
console.log('\n4. Arrow Function Hoisting:');

const calculateTotalArrow = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
    }
    
    return numbers.reduce((total, num) => {
        if (typeof num !== 'number') {
            throw new Error('Array must contain only numbers');
        }
        return total + num;
    }, 0);
};

try {
    const result = calculateTotalArrow([10, 20, 30]);
    console.log('Result from arrow function:', result);
} catch (error) {
    console.log('Error with arrow function:', error.message);
}

// Variable Hoisting Differences
console.log('\n5. Variable Hoisting Differences:');

function demonstrateVariableHoisting() {
    console.log('var variable before declaration:', typeof hoistedVar); // undefined
    
    // Try-catch to demonstrate let/const behavior
    try {
        // This will throw in strict mode/ES6 modules
        console.log('let variable before declaration:', typeof hoistedLet);
    } catch (error) {
        console.log('Cannot access let before initialization (Temporal Dead Zone)');
    }
    
    var hoistedVar = 'I am hoisted with var';
    let hoistedLet = 'I am not accessible before declaration';
    const hoistedConst = 'I am also not accessible before declaration';
    
    console.log('var after declaration:', hoistedVar);
    console.log('let after declaration:', hoistedLet);
    console.log('const after declaration:', hoistedConst);
}

demonstrateVariableHoisting();

// Block scope demonstration
console.log('\n6. Block Scope Hoisting:');

function demonstrateBlockScope() {
    console.log('Before block - var exists:', typeof blockVar); // undefined
    
    if (true) {
        console.log('Inside block - var before declaration:', typeof blockVar); // undefined
        
        // Cannot access let/const here due to TDZ
        try {
            console.log('Inside block - let before declaration:', typeof blockLet);
        } catch {
            console.log('Cannot access let in TDZ');
        }
        
        var blockVar = 'Function-scoped var';
        let blockLet = 'Block-scoped let';
        const blockConst = 'Block-scoped const';
        
        console.log('Inside block - var:', blockVar);
        console.log('Inside block - let:', blockLet);
        console.log('Inside block - const:', blockConst);
    }
    
    console.log('After block - var still exists:', blockVar);
    // blockLet is not accessible here (block-scoped)
    console.log('After block - let is not accessible outside block');
}

demonstrateBlockScope();

// Production example with proper hoisting awareness
console.log('\n7. Production Code with Hoisting Best Practices:');

class APIProcessor {
    constructor(config) {
        // Always initialize properties first
        this.config = config;
        this.requestCount = 0;
        this.cache = new Map();
        
        // Method declarations (hoisted within class)
        this.processRequest = this.processRequest.bind(this);
    }
    
    // Method (behaves like a function declaration within class)
    validateEndpoint(endpoint) {
        return endpoint && typeof endpoint === 'string' && endpoint.startsWith('/');
    }
    
    // Another method - can call validateEndpoint even if "defined after"
    processRequest(endpoint, data) {
        if (!this.validateEndpoint(endpoint)) {
            throw new Error(`Invalid endpoint: ${endpoint}`);
        }
        
        this.requestCount++;
        console.log(`Processing request #${this.requestCount} to ${endpoint}`);
        
        // Simulate processing
        return {
            success: true,
            endpoint,
            timestamp: new Date().toISOString(),
            requestId: `req_${this.requestCount}`
        };
    }
}

// Usage
const processor = new APIProcessor({ timeout: 5000 });
try {
    const result = processor.processRequest('/api/users', { action: 'get' });
    console.log('API Processor result:', result);
} catch (error) {
    console.error('API Processor error:', error.message);
}

// Module pattern with hoisting awareness
console.log('\n8. Module Pattern with Safe Hoisting:');

const SafeModule = (function() {
    // Private variables (no hoisting issues in IIFE)
    let privateCounter = 0;
    const privateData = new Map();
    
    // Private function declarations (hoisted within IIFE)
    function validateInput(input) {
        return input !== null && input !== undefined;
    }
    
    function processData(data) {
        privateCounter++;
        privateData.set(privateCounter, data);
        return privateCounter;
    }
    
    // Public API
    return {
        addItem(data) {
            if (!validateInput(data)) {
                throw new Error('Invalid input data');
            }
            return processData(data);
        },
        
        getCount() {
            return privateCounter;
        },
        
        getItem(id) {
            return privateData.get(id);
        }
    };
})();

// Use the module
try {
    const id1 = SafeModule.addItem({ name: 'test', value: 123 });
    const id2 = SafeModule.addItem({ name: 'test2', value: 456 });
    console.log('SafeModule items added. Total count:', SafeModule.getCount());
    console.log('Item 1:', SafeModule.getItem(id1));
} catch (error) {
    console.error('SafeModule error:', error.message);
}

// Final summary for ES6 modules
console.log('\n=== ES6 Module Hoisting Summary ===');
console.log(' Function Declarations: Fully hoisted');
console.log(' Function Expressions: Cannot access before initialization (TDZ)');
console.log(' Arrow Functions: Cannot access before initialization (TDZ)');
console.log(' let/const: Cannot access before initialization (TDZ)');
console.log(' var: Still hoisted but less useful in modules');
console.log(' ES6 Best Practice: Always declare before use, use function declarations for hoisting benefits');


// 8. Impure Function - Session Management System

/*
 Impure Function - Session Management System
 Demonstrates side effects: modifies external state, uses current time, interacts with storage
*/
class SessionManager {
    constructor() {
        this.activeSessions = new Map();
        this.sessionTimeouts = new Map();
        this.accessLog = [];
        this.sessionCounter = 0;
    }
    
    // Impure function: modifies external state (this.activeSessions)
    createUserSession(userId, userData, ipAddress, userAgent) {
        // Side effect: Using current time (non-deterministic)
        const sessionStartTime = new Date();
        const sessionId = this.generateSessionId();
        
        // Side effect: Modifying external state
        const session = {
            sessionId,
            userId,
            userData: { ...userData },
            ipAddress,
            userAgent,
            startTime: sessionStartTime.toISOString(),
            lastAccess: sessionStartTime.toISOString(),
            accessCount: 1,
            isActive: true
        };
        
        this.activeSessions.set(sessionId, session);
        this.sessionCounter++;
        
        // Side effect: Writing to console
        console.log(`Session created: ${sessionId} for user: ${userId}`);
        
        // Side effect: Setting timeout (external interaction)
        this.setSessionTimeout(sessionId);
        
        // Side effect: Logging access
        this.logAccess(sessionId, 'SESSION_CREATE', ipAddress);
        
        return session;
    }
    
    // Impure function: modifies session state and uses current time
    accessSession(sessionId, action = 'ACCESS', additionalData = {}) {
        // Side effect: Reading from external state
        const session = this.activeSessions.get(sessionId);
        
        if (!session) {
            // Side effect: Throwing error (affects program flow)
            throw new Error(`Session ${sessionId} not found`);
        }
        
        if (!session.isActive) {
            throw new Error(`Session ${sessionId} is inactive`);
        }
        
        // Side effect: Modifying session state
        session.lastAccess = new Date().toISOString();
        session.accessCount++;
        
        // Side effect: Resetting timeout
        this.resetSessionTimeout(sessionId);
        
        // Side effect: Logging
        this.logAccess(sessionId, action, session.ipAddress, additionalData);
        
        // Side effect: Writing to console
        console.log(`Session accessed: ${sessionId}, action: ${action}`);
        
        return {
            ...session,
            currentTime: new Date().toISOString() // Non-deterministic output
        };
    }
    
    // Impure function: multiple side effects
    invalidateSession(sessionId, reason = 'MANUAL') {
        const session = this.activeSessions.get(sessionId);
        
        if (!session) {
            return { success: false, error: 'Session not found' };
        }
        
        // Side effect: Modifying state
        session.isActive = false;
        session.endTime = new Date().toISOString();
        session.invalidationReason = reason;
        
        // Side effect: Clearing timeout
        this.clearSessionTimeout(sessionId);
        
        // Side effect: Logging
        this.logAccess(sessionId, 'SESSION_INVALIDATE', session.ipAddress, { reason });
        
        console.log(`Session invalidated: ${sessionId}, reason: ${reason}`);
        
        return {
            success: true,
            sessionId,
            invalidatedAt: new Date().toISOString(),
            reason
        };
    }
    
    // Impure function: depends on external state (this.activeSessions)
    getSessionStatistics() {
        const now = new Date(); // Non-deterministic
        
        const activeSessions = Array.from(this.activeSessions.values())
            .filter(session => session.isActive);
        
        const totalAccesses = activeSessions.reduce((sum, session) => sum + session.accessCount, 0);
        const averageSessionDuration = this.calculateAverageDuration(activeSessions, now);
        
        // Result depends on current state and time
        return {
            totalActiveSessions: activeSessions.length,
            totalSessionsCreated: this.sessionCounter,
            totalAccesses,
            averageAccessPerSession: activeSessions.length > 0 ? 
                totalAccesses / activeSessions.length : 0,
            averageSessionDuration,
            busiestSession: this.findBusiestSession(activeSessions),
            reportGeneratedAt: now.toISOString() // Changes each call
        };
    }
    
    // Private methods with side effects
    setSessionTimeout(sessionId) {
        const timeoutId = setTimeout(() => {
            console.log(`Session timeout: ${sessionId}`);
            this.invalidateSession(sessionId, 'TIMEOUT');
        }, 30 * 60 * 1000); // 30 minutes
        
        this.sessionTimeouts.set(sessionId, timeoutId);
    }
    
    resetSessionTimeout(sessionId) {
        this.clearSessionTimeout(sessionId);
        this.setSessionTimeout(sessionId);
    }
    
    clearSessionTimeout(sessionId) {
        const timeoutId = this.sessionTimeouts.get(sessionId);
        if (timeoutId) {
            clearTimeout(timeoutId);
            this.sessionTimeouts.delete(sessionId);
        }
    }
    
    logAccess(sessionId, action, ipAddress, additionalData = {}) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            sessionId,
            action,
            ipAddress,
            ...additionalData
        };
        
        this.accessLog.push(logEntry);
        
        // Keep only last 1000 entries
        if (this.accessLog.length > 1000) {
            this.accessLog = this.accessLog.slice(-1000);
        }
    }
    
    generateSessionId() {
        // Non-deterministic: uses current time and random component
        return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    calculateAverageDuration(sessions, currentTime) {
        if (sessions.length === 0) return 0;
        
        const totalDuration = sessions.reduce((sum, session) => {
            const start = new Date(session.startTime);
            const duration = currentTime - start;
            return sum + duration;
        }, 0);
        
        return totalDuration / sessions.length;
    }
    
    findBusiestSession(sessions) {
        if (sessions.length === 0) return null;
        
        return sessions.reduce((busiest, session) => {
            return session.accessCount > busiest.accessCount ? session : busiest;
        });
    }
}

// Usage Example
const sessionManager = new SessionManager();

// Create sessions (impure - modifies external state)
const session1 = sessionManager.createUserSession(
    'user_123',
    { name: 'John Doe', role: 'admin', email: 'john@example.com' },
    '192.168.1.100',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
);

const session2 = sessionManager.createUserSession(
    'user_456',
    { name: 'Jane Smith', role: 'user', email: 'jane@example.com' },
    '192.168.1.101',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
);

// Access sessions (impure - modifies state and uses current time)
sessionManager.accessSession(session1.sessionId, 'LOGIN_ATTEMPT');
sessionManager.accessSession(session2.sessionId, 'PAGE_VIEW', { page: '/dashboard' });
sessionManager.accessSession(session1.sessionId, 'DATA_ACCESS', { resource: 'user_list' });

// Get statistics (impure - result depends on current state and time)
const stats1 = sessionManager.getSessionStatistics();
console.log('Initial Statistics:', stats1);

// Wait a bit and access again
setTimeout(() => {
    sessionManager.accessSession(session1.sessionId, 'LOGOUT');
    
    const stats2 = sessionManager.getSessionStatistics();
    console.log('Updated Statistics:', stats2);
    
    // Invalidate session
    const invalidationResult = sessionManager.invalidateSession(session1.sessionId, 'USER_LOGOUT');
    console.log('Invalidation Result:', invalidationResult);
    
    const finalStats = sessionManager.getSessionStatistics();
    console.log('Final Statistics:', finalStats);
}, 1000);


