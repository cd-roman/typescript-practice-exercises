// In order to use lodash or any other library with TypeScript, we need to install the library first,
// and then install the type definitions for the library

// For example, to install lodash, we need to run the following commands:
// npm install --save lodash
// npm install --save-dev @types/lodash

// Once done, we can import the library and use it in our code

import _ from "lodash";

console.log(_.shuffle([1, 2, 3, 4, 5]));
