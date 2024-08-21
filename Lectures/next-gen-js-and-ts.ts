////////////////////////// NEXT-GENERATION JS AND TS //////////////////////////

// Arrow functions

const add = (a: number, b: number) => a + b;

const printOutput = (output: string | number) => console.log(output);

printOutput(add(5, 2)); // 7

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// Default function parameters

const addDefault = (a: number, b: number = 1) => a + b;

printOutput(addDefault(10)); // 11

// Spread operator

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

console.log(activeHobbies); // ["Hiking", "Sports", "Cooking"]

// Spread operator with objects

const person = {
  name: "Max",
  age: 30,
};

// Using the spread operator to create a new object with the same properties, not a reference
const copiedPerson = { ...person };

console.log(copiedPerson); // { name: "Max", age: 30 }

// It allows to change the properties of the new object without affecting the original object
copiedPerson.name = "Anna";

console.log(copiedPerson); // { name: "Anna", age: 30 }
console.log(person); // { name: "Max", age: 30 }

// Rest parameters

const addRest = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumbers = addRest(5, 10, 2, 3.7);
console.log(addedNumbers); // 20.7

// Array destructuring

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2); // Sports Cooking

// Object destructuring

const { name: userName, age } = person;

console.log(userName, age); // Max 30
