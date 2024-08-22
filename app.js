"use strict";
console.log("app.ts successfully compiled");
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
console.log(e1);
////////////////////////// Type Guards //////////////////////////
// Type guards allow us to check the type of a variable at runtime.
function add(a, b) {
    // Type guard
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// We can use a "in" keyword to check if a property exists in an object.
// The "in" keyword is accessible in the JavaScript runtime.
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    // Type guard
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    // Type guard
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
// Type guard using instanceof for classes
// instanceof is a JavaScript feature that allows us to check if an object is an instance of a class.
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // Type guard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving with speed: " + speed);
}
const horse = { type: "horse", runningSpeed: 15 };
moveAnimal(horse);
moveAnimal({ type: "bird", flyingSpeed: 10 });
////////////////////////// Type Casting //////////////////////////
// Type casting allows us to tell TypeScript that a certain value is of a certain type.
// Example 1
const paragraph = document.querySelector("p");
const paragraphId = document.getElementById("message-output");
// Type casting
const userInputElement = (document.getElementById("user-input"));
userInputElement.value = "Hi there!";
// Alternative syntax
const userInputElement2 = document.getElementById("user-input");
userInputElement2.value = "Hi there!";
// Exclamation mark (!) tells TypeScript that the element will never be null.
