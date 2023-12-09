"use strict";
class Department {
    // private name: string;
    // private employees: string[];
    constructor(name, employees = []) {
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
        console.log(`Employees for department ${this.name} are ${this.employees.join(',')}`);
    }
}
class ITDepartment extends Department {
    constructor(name, admins) {
        super(name);
        this.admins = admins;
        this.admins = admins;
    }
    getAllEmployees() {
        const allEmployees = [...(new Set([...this.admins, ...this.employees]))];
        console.log(`All employees of IT department are ${allEmployees.join(',')}`);
    }
}
const it = new ITDepartment('IT', ['Punit', 'Manju']);
it.addEmployee('Rahul');
it.getAllEmployees();
