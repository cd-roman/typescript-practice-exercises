"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("app.ts successfully compiled");
//////////////////////// DECORATORS ////////////////////////
// Decorators are a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
// Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Joey";
        console.log("Creating a person object");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
// Decorator Factory
// Decorator factories are functions that return the expression that will be called by the decorator at runtime.
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Joey";
        console.log("Creating a person object");
    }
};
Person2 = __decorate([
    Logger2("LOGGING - PERSON")
], Person2);
// We can also use decorators to access DOM elements
function Logger3(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h2").textContent = p.name;
        }
    };
}
// We can add multiple decorators to a class
let Person3 = class Person3 {
    constructor() {
        this.name = "Joey";
        console.log("Creating a person object");
    }
};
Person3 = __decorate([
    Logger,
    WithTemplate("<h2>My Person Object</h2>", "app")
], Person3);
// The creation of the decorators is done from top to bottom, but the execution of the actual decorator functions happen from bottom to top.
// Property Decorators
// Property decorators are used to add metadata to class properties.
function Log(target, propertyName) {
    console.log("Property decorator");
    console.log(target, propertyName);
}
// Accessor Decorators
// Accessor decorators are used to add metadata to accessors of a class.
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Method Decorators
// Method decorators are used to add metadata to class methods.
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Parameter Decorators
// Parameter decorators are used to add metadata to parameters of a class method.
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
// Decorators are executed when the class is defined, not when the class is instantiated.
// Example: Autobind Decorator
// We can use decorators to bind methods to the class instance automatically.
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input, please try again!");
        return;
    }
    console.log(createdCourse);
});
