"use strict";
class Department {
    // private name: string;
    // private employees: string[];
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
        // this.name = name
        // this.employees = []
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        if (!this.employees.includes(employee))
            this.employees.push(employee);
    }
    employeesInfo() {
        console.log(`Employees afor department ${this.name} are ${this.employees.join(',')}`);
    }
}
const it = new Department('IT', []);
it.describe();
it.addEmployee('Punit');
it.addEmployee('Manu');
it.employeesInfo();
