// In order to use lodash or any other library with TypeScript, we need to install the library first,
// and then install the type definitions for the library

// For example, to install lodash, we need to run the following commands:
// npm install --save lodash
// npm install --save-dev @types/lodash

// Once done, we can import the library and use it in our code

import _ from "lodash";

console.log(_.shuffle([1, 2, 3, 4, 5]));

// In order to use global variables in TypeScript, we can use the declare keyword
// For example, to use the global variable GLOBAL_CONST in TypeScript, we can declare it as follows:
// declare const GLOBAL_CONST: any;
// console.log(GLOBAL_CONST);

// Also, we can create new instances of the imported class

import { Product } from "../../src/product.model";

const p1 = new Product("A Book", 12.99);

console.log(p1.getInformation());

// In a more real-world scenario, we might want to transform a plain JavaScript object to a class instance
// For example, we can fetch data from a server and transform it to a class instance

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Notebook", price: 10.99 },
];

const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// Some JavaScript libraries work fine without type definitions
// But we can still use them in TypeScript

// A better way to do the transformation described in an example above is to use class-transformer
// We need to install the package using npm install class-transformer --save
// And npm install reflect-metadata --save

import "reflect-metadata";
import { plainToClass } from "class-transformer";

// We can also use class-validator to validate the data before transforming it to a class instance
// It also work without type definitions
import { validate } from "class-validator";

const loadedProducts2 = plainToClass(Product, products);

for (const prod of loadedProducts2) {
  console.log(prod.getInformation());
}

const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation Errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
