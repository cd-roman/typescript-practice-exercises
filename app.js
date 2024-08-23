"use strict";
console.log("app.ts successfully compiled");
//////////////////////// GENERICS ////////////////////////
// Generics are a way to make components reusable, by allowing them to work with any data type.
// Example 1: Built-in Generics
// Array is a built-in generic type in TypeScript
const names = []; // same as const names: string[] = [];
// Promise is also a built-in generic type in TypeScript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then((data) => {
    console.log(data.split(" "));
});
// Example 2: Creating a Generic Function
// The T and U are placeholders for the types that will be passed to the function when it is called
// To specify the type of the argument, we can use constraints with extends keyword
// In this example, the constraints specify that both types passed to the function must be objects
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// Now we can call the function with any type of object
const mergedObj = merge({ name: "Max" }, { age: 30 });
const mergedObj2 = merge({ name: "Joey", hobbies: ["Sports"] }, { age: 32 });
console.log(mergedObj.name); // Output: Max
console.log(mergedObj.age); // Output: 30
console.log(mergedObj2.name); // Output: Joey
function countAndDescribe(element) {
    let description = "No value";
    if (element.length === 1) {
        description = "Got 1 element.";
    }
    else if (element.length > 1) {
        description = `Got ${element.length} elements.`;
    }
    return [element, description];
}
console.log(countAndDescribe("Hi there!")); // Output: ["Hi there!", "Got 9 elements."]
// Example 4: Creating a Generic function with "keyof" constraint
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Max" }, "name")); // Output: Value: Max
// Example 5: Generic Classes
// Important to note, that it perfectly works with primitive values: number, string, boolean, but not with objects
// In order to use objects, we need to store the reference to the object, not the object itself
// In this example, we create a generic class that can store any type of data
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
// Then we can create instances of the class with different types of data
// For example, we can create an instance that stores strings
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Joey");
textStorage.addItem("Monica");
textStorage.removeItem("Max");
console.log(textStorage.getItems()); // Output: ["Joey"]
// We can also create an instance that stores numbers or both strings and numbers
const numberStorage = new DataStorage();
