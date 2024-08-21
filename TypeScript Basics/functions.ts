////////////////////////// FUNCTION RETURN TYPES & "VOID" //////////////////////////

// Return type of a function

// By default, the return type of a function is "void" if it does not return anything
// If a function returns something, we can specify the return type of the function

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Void return type
// If a function does not return anything, we can specify the return type as "void"

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

////////////////////////// FUNCTIONS AS TYPES //////////////////////////

// Function types
// We can assign a function to a variable and specify the function type

let combineValues: (a: number, b: number) => number;

// Then we can assign a function to the variable with a function type
combineValues = add;

// And call the function using the variable
console.log(combineValues(8, 8)); // 16

////////////////////////// FUNCTION TYPES & CALLBACKS //////////////////////////

// We can specify a function type for a callback function
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

// And then we can pass a function to the callback parameter
addAndHandle(10, 20, (result) => {
  console.log(result);
});

// Example of a callback function
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
