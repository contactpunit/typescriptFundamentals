"use strict";
class Employee {
    constructor(name, age, deptname) {
        this.name = name;
        this.age = age;
        Employee.nextId += 1;
        this.id = Employee.nextId;
        this.deptName = deptname;
        this.deptId = this.deptName === 'IT' ? 1 : 2;
    }
    greet(message) {
        console.log(`${message} ${this.name}`);
    }
}
Employee.nextId = 0;
const user1 = new Employee('Punit', 33, 'IT');
const user2 = new Employee('Nidhi', 34, 'Finance');
const user3 = new Employee('Anki', 34, 'Finance');
user1.greet('Good morning');
console.log(user3);
let addNumbers;
addNumbers = (n1, n2) => {
    return n1 + n2;
};
let addNums;
addNums = (a, b) => {
    return a + b;
};
