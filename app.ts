console.log("app.ts successfully compiled");

//////////////////////// GENERICS ////////////////////////

// Generics are a way to make components reusable, by allowing them to work with any data type.

// Example 1: Built-in Generics

// Array is a built-in generic type in TypeScript
const names: Array<string> = []; // same as const names: string[] = [];

// Promise is also a built-in generic type in TypeScript
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  console.log(data.split(" "));
});

// Example 2: Creating a Generic Function

// The T and U are placeholders for the types that will be passed to the function when it is called

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// Now we can call the function with any type of object
const mergedObj = merge({ name: "Max" }, { age: 30 });
const mergedObj2 = merge({ name: "Joey", hobbies: ["Sports"] }, { age: 32 });

console.log(mergedObj.name); // Output: Max
console.log(mergedObj.age); // Output: 30
console.log(mergedObj2.name); // Output: Joey
