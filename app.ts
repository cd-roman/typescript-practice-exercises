console.log("app.ts successfully compiled");

class Department {
  // We can use public, private and protected access modifiers. By default, the access modifiers are public
  // Using private will make the property only accessible within the class
  private employees: string[] = [];

  // We can also use the shorthand syntax to declare and initialize properties inside the constructor
  // However, we need to use explicitly use the public, private or protected access modifiers
  // Also, we can use the readonly modifier to make the property read-only and make it immutable
  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const engineering = new Department("d1", "Engineering");

console.log(engineering);

engineering.describe();

engineering.addEmployee("Max");

engineering.addEmployee("Manu");

engineering.printEmployeeInformation();
