function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Example
const person1 = new Person('Alice', 25);
person1.sayHello(); 

const person2 = new Person('Bob', 30);
person2.sayHello(); 