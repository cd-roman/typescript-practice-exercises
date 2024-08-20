////////////////////////// UNKNOWN TYPE //////////////////////////
// Unknown type is a type that we don't know what it is yet. It is a type-safe counterpart of any.
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// In order to assign a value to a variable with unknown type, we need to check the type of the value first.
// Otherwise, we will get an error.
if (typeof userInput === "string") {
    userName = userInput; // "Max"
}
////////////////////////// NEVER TYPE //////////////////////////
// Never type is a type that represents the type of values that never occur.
// It is used when we know that a function will never return a value or void.
// It is useful when we want to throw an error message and stop the execution of the program.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// Calling this function will stop the execution of the program and throw an error message.
generateError("An error occurred!", 500); // { message: 'An error occurred!', errorCode: 500 }
