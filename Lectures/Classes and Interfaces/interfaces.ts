////////////////////////// INTERFACES //////////////////////////

// Interface is a custom type that we can use to define the shape of an object
// We don't initialize the object, we just define the shape of the object here
interface PersonInt {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: PersonInt;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am"); // Hi there - I am Max

// We can also use interfaces with classes when we want to enforce a class to have certain properties and methods

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class PersonCl implements Greetable {
  name: string;
  age = 30;
  occupation = "Software Developer";

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user2: Greetable;

user2 = new PersonCl("Max");

user2.greet("Hi there - I am"); // Hi there - I am Max

// Classes can implement multiple interfaces
// For example, when creating a class that should have both properties and methods from different interfaces, like this:
// class PersonCl implements Greetable, AnotherInterface, AndAnotherInterface {}

// We can also use readonly properties in interfaces
interface Named {
  readonly name: string;
}

// We can inherit from other interfaces when creating interfaces
interface GreatableExt extends Named {
  greet(phrase: string): void;
}

// This can be useful when we want to create a new interface that extends another interface and adds some new properties or methods
// For example, in some cases, we might want to create Named objects that can also be greeted

// Important to know, that classes can inherit only from one class, but they can implement multiple interfaces

// Interfaces can also be used to describe function types

// This is how we can define a function type using a type alias
// type AddFn = (a: number, b: number) => number;

// This is how we can define a function type using an interface
interface AddFn {
  // We define parameters in the parentheses and the return type after the colon
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(2, 5)); // 7

// Optional Parameters and Properties //

// We can make properties and methods optional in interfaces by adding a question mark after the property or method name
interface NamedOpt {
  readonly name: string;
  outputName?: string;

  greet?(phrase: string): void;
}

// We can also make properties optional in classes
class PersonOpt implements NamedOpt {
  name: string;
  outputName?: string;
  age = 30;

  constructor(n: string, outputName?: string) {
    this.name = n;
    if (this.outputName) {
      this.outputName = outputName;
    }
  }
}

let user3: NamedOpt;

user3 = new PersonOpt("Max");
console.log(user3);
