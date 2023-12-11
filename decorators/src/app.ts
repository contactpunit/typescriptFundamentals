function LogAddedEmployee(target: Function) {
    console.log('Class employee created')
}

interface Employee {
    name: string;
    age: number;
    salary: number;
    department: string;
    listEmployees(): void
}

@LogAddedEmployee
class Employee implements Employee{
    name: string;
    age: number;
    salary: number;
    department: string;
    static allEmployees: Employee[] = []

    constructor(name: string, age: number, salary: number, department:string) {
        this.name = name
        this.age = age
        this.salary = salary
        this.department = department
        Employee.allEmployees.push(this)
    }

    listEmployees() {
        console.log(`All employees of company are ${(Employee.allEmployees.map(e => e.name)).join(',')}`)
    }
}

const emp1 = new Employee('punit', 33, 1234, 'IT')
const emp2 = new Employee('manu', 36, 1111, 'IT')
emp1.listEmployees()