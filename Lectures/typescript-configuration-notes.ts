////////////////////////// CONFIGURE TYPESCRIPT //////////////////////////

// Run the following command to create a tsconfig.json file
// npx tsc --init

// To start watching for changes in the TypeScript file, run the following command
// npx tsc -w

// We can exclude files from being compiled by adding the exclude property in the tsconfig.json file
// "exclude": [
// analytics.ts
// "dist",
// "src/**/*.test.ts"
// ]

// We can also include files by adding the include property in the tsconfig.json file
// "include": [
// "src/**/*.ts"
// ]

// We can specify a file to be compiled by adding the files property in the tsconfig.json file
// "files": [
// "app.ts"
// ]

// We can add libs to the tsconfig.json file to include the libraries we want to use
// By default, the lib property is set to ["DOM", "ES6", "DOM.Iterable", "ScriptHost"]

// We can also specify the target version of JavaScript we want to compile to
// The target property is set to "ES5" by default

// allowJs and checkJs allows us to include JavaScript files in our TypeScript project and check them for errors

// Source maps allow us to debug our TypeScript code in the browser, including the original TypeScript code to the browser Sources tab

// outDir and rootDir allows us to specify the output directory and the root directory of our project

// noEmitOnError set to true will prevent the TypeScript compiler from generating JavaScript files if there are errors in the TypeScript files

console.log("app.ts successfully compiled");
