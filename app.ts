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
