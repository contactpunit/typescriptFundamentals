"use strict";
class Department {
    constructor(name, employees = []) {
        this.name = name;
        this.employees = employees;
        // this.name = name
        // this.employees = []
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    employeesInfo() {
        console.log(`Employees for department ${this.name} are ${this.employees.join(',')}`);
    }
    static companyName() {
        return Department.company;
    }
}
// private name: string;
// private employees: string[];
Department.company = 'Global Hawks';
class ITDepartment extends Department {
    constructor(name, admins) {
        super(name);
        this.admins = admins;
        this.admins = admins;
        this.onboardingDevices = ['Laptop', 'Keyboard', 'Mouse', 'Token'];
    }
    get getDevices() {
        return this.onboardingDevices;
    }
    set setDevices(devices) {
        if (devices.length && devices.map(d => d.trim()).length) {
            this.onboardingDevices = [...new Set([...this.onboardingDevices, ...devices])];
        }
    }
    addEmployee(employee) {
        if (!this.employees.includes(employee))
            this.employees.push(employee);
    }
    getAllEmployees() {
        const allEmployees = [...(new Set([...this.admins, ...this.employees]))];
        console.log(`All employees of IT department are ${allEmployees.join(',')}`);
    }
}
const it = new ITDepartment('IT', ['Punit', 'Manju']);
it.addEmployee('Rahul');
it.getAllEmployees();
console.log('Onboarding devices are: ' + it.getDevices.join(','));
it.setDevices = ['Bag'];
console.log('Onboarding devices are: ' + it.getDevices.join(','));
console.log(Department.companyName());
// const dept = new Department('test')  // will not worj as it is abstract class
