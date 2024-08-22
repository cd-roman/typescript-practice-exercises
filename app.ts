console.log("app.ts successfully compiled");

////////////////////////// Intersection Types //////////////////////////

// Intersection types allow us to combine multiple types into one.

// Example 1
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

// Example 2

type Combinable = string | number;
type Numeric = number | boolean;

// Intersection type
type Universal = Combinable & Numeric;

////////////////////////// Type Guards //////////////////////////

// Type guards allow us to check the type of a variable at runtime.

function add(a: Combinable, b: Combinable) {
  // Type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

// We can use a "in" keyword to check if a property exists in an object.
// The "in" keyword is accessible in the JavaScript runtime.

function printEmployeeInformation(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // Type guard
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

////////////////////////// Discriminated Unions //////////////////////////

// Discriminated unions allow us to add a common property to each object in a union type.

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

const horse: Animal = { type: "horse", runningSpeed: 15 };
moveAnimal(horse);

moveAnimal({ type: "bird", flyingSpeed: 10 });

////////////////////////// Type Casting //////////////////////////

// Type casting allows us to tell TypeScript that a certain value is of a certain type.

// Example 1
const paragraph = document.querySelector("p");

const paragraphId = document.getElementById("message-output");

// Type casting
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);
userInputElement.value = "Hi there!";

// Alternative syntax
const userInputElement2 = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement2.value = "Hi there!";

// Exclamation mark (!) tells TypeScript that the element will never be null.

////////////////////////// Index Properties //////////////////////////

// Index properties allow us to create objects with dynamic keys.

interface ErrorContainer {
  // We can use strings, numbers, or symbols as keys.
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
