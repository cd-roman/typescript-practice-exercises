"use strict";
console.log("app.ts successfully compiled");
// Private vs Protected properties
// The private keyword makes the property only accessible within the class
// The protected keyword makes the property accessible within the class and any class that inherits from it
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const engineering = new Department("d1", "Engineering");
engineering.addEmployee("Max");
engineering.addEmployee("Manu");
// Inheritance example
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it = new ITDepartment("d2", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
console.log(it);
console.log(it.admins);
// Getters and Setters
class AccountingDepartment extends Department {
    // Getters allow you to access a property like a method, even though it's a private property
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    // Setters allow you to set a property like a method
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
AccountingDepartment.fiscalYear = 2024;
// Static methods and properties
// Static methods and properties are accessed directly on the class itself, not on an instance of the class
// They are useful for utility functions that don't need to be tied to a specific instance of the class
// We can call static methods and properties without creating an instance of the class
const employee1 = AccountingDepartment.createEmployee("Joey");
console.log(employee1);
console.log(AccountingDepartment.fiscalYear);
// Getters and Setters in action
const accounting = new AccountingDepartment("d3", []);
// Set the mostRecentReport property
accounting.mostRecentReport = "Annual Report";
// Get the mostRecentReport property
console.log(accounting.mostRecentReport);
// Abstract classes and methods
// Abstract classes are classes that can't be instantiated directly
// Abstract methods are methods that must be implemented in derived classes
// For example, we can create an abstract class called Vehicle with an abstract method called honk
class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
}
// And then create a class called Car that extends Vehicle and implements the honk method
class Car extends Vehicle {
    constructor() {
        super(4);
    }
    honk() {
        console.log("Car is honking");
    }
}
// We can't create an instance of Vehicle because it's an abstract class
// We can only create a class that extends Vehicle, and implement the abstract methods
// Only then can we create an instance of the derived class
