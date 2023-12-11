"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Employee_1;
function LogAddedEmployee(logString) {
    return function (target) {
        console.log(logString);
    };
}
let Employee = Employee_1 = class Employee {
    constructor(name, age, salary, department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
        Employee_1.allEmployees.push(this);
    }
    listEmployees() {
        console.log(`All employees of company are ${(Employee_1.allEmployees.map(e => e.name)).join(',')}`);
    }
};
Employee.allEmployees = [];
Employee = Employee_1 = __decorate([
    LogAddedEmployee('Class employee created')
], Employee);
const emp1 = new Employee('punit', 33, 1234, 'IT');
const emp2 = new Employee('manu', 36, 1111, 'IT');
emp1.listEmployees();
