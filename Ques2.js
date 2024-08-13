// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Employee constructor inheriting from Person
function Employee(name, age, designation) {
    // Call the Person constructor
    Person.call(this, name, age);

    // Add a new property for designation
    this.designation = designation;

    // Method to display employee details
    this.getDetails = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    };
}

// Example
const employee1 = new Employee('Alice', 25, 'Software Engineer');
employee1.sayHello(); 
employee1.getDetails(); 

const employee2 = new Employee('Bob', 30, 'Project Manager');
employee2.sayHello(); 
employee2.getDetails(); 
