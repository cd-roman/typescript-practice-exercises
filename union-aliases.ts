////////////////////////// UNION TYPES //////////////////////////

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

const combinedAgesNames = combine("Max", 26);
console.log(combinedAgesNames);

////////////////////////// LITERAL TYPES //////////////////////////

// Literal types allow you to specify the exact value a variable can take
// This is useful when you want to restrict the values a variable can take
// For example, you want to restrict the values a variable can take to a specific set of values, like "as-number" or "as-text"

function combine2(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges2 = combine2(30, 26, "as-number");
console.log(combinedAges2);

const combinedStringAges = combine2("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames2 = combine2("Max", "Anna", "as-text");
console.log(combinedNames2);

////////////////////////// TYPE ALIASES / CUSTOM TYPES //////////////////////////

// Type aliases allow you to create custom types
// This is useful when you want to reuse a type in multiple places in your code
// For example, you can create a custom type for a complex object

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
