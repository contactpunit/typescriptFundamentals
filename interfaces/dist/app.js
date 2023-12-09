"use strict";
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(message) {
        console.log(`${message} ${this.name}`);
    }
}
const user = new Employee('Punit', 33);
user.greet('Good morning');
