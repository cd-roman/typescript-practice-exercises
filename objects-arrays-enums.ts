////////////////////////// OBJECTS //////////////////////////

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "Joey",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
// };
const person = {
  name: "Joey",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

console.log(person); // { name: 'Joey', age: 30 }
console.log(person.name); // Joey
console.log(person.hobbies); // [ 'Sports', 'Cooking' ]

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  // We can use string methods, because TypeScript knows that the array contains strings
  console.log(hobby.toUpperCase());
  // SPORTS
  // COOKING
}

////////////////////////// TUPLES //////////////////////////

// Tuple is a fixed-length array with fixed types
// For example, a tuple with 2 elements, the first one is a number and the second one is a string

const personWithTuple: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: "Joey",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "actor"],
};

// There is an exception when we push a new element to a tuple
personWithTuple.role.push("admin"); // This is allowed in TypeScript, but it's not recommended
console.log(personWithTuple.role); // [ 2, 'actor', 'admin' ]

// However, we can't push a new element with a different type
// So, when we need a type that is fixed in length and fixed in types, we should use tuple

////////////////////////// ENUMS //////////////////////////

// Enums allow us to define a set of named constants

// We can define an enum like this
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// By default, the values of the enum are numbers, starting from 0
// But we can assign values to the enum like this
// enum Role {
//   ADMIN = 5,
//   READ_ONLY, // 6
//   AUTHOR, // 7
// }

// We can also assign string values to the enum if needed
// enum Role {
//   ADMIN = "ADMIN",
//   READ_ONLY = "READ_ONLY",
//   AUTHOR = "AUTHOR",
// }

// Then, we can use it like this
const personWithEnum = {
  name: "Joey",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (personWithEnum.role === Role.ADMIN) {
  console.log(`${personWithEnum.name} is admin`);
}
