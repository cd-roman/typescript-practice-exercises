//////////////////////// DECORATORS ////////////////////////

// Decorators are a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.

// Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Joey";

  constructor() {
    console.log("Creating a person object");
  }
}

const pers = new Person();

console.log(pers);

// Decorator Factory

// Decorator factories are functions that return the expression that will be called by the decorator at runtime.

function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger2("LOGGING - PERSON")
class Person2 {
  name = "Joey";

  constructor() {
    console.log("Creating a person object");
  }
}

// We can also use decorators to access DOM elements
function Logger3(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h2")!.textContent = p.name;
    }
  };
}

// We can add multiple decorators to a class
@Logger
@WithTemplate("<h2>My Person Object</h2>", "app")
class Person3 {
  name = "Joey";

  constructor() {
    console.log("Creating a person object");
  }
}

// The creation of the decorators is done from top to bottom, but the execution of the actual decorator functions happen from bottom to top.

// Property Decorators
// Property decorators are used to add metadata to class properties.

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

// Accessor Decorators
// Accessor decorators are used to add metadata to accessors of a class.

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method Decorators
// Method decorators are used to add metadata to class methods.

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter Decorators
// Parameter decorators are used to add metadata to parameters of a class method.

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// Decorators are executed when the class is defined, not when the class is instantiated.

// Example: Autobind Decorator

// We can use decorators to bind methods to the class instance automatically.

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  message = "This works!";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

// Validation with Decorators

// We can use decorators to validate the input of a class method.

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
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
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
