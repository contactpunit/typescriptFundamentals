function LogAddedEmployee(logString: string) {
    return function(target: Function) {
        console.log(logString)
    }
}

function displayEmployees(employeeList: string[], element: string) {
    return function(_: Function) {
        const reqEl = document.getElementById(element)
        for(const elem of employeeList) {
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(elem))
            reqEl?.appendChild(li)
        }
        console.log(reqEl)
    }
}

interface Employee {
    name: string;
    age: number;
    salary: number;
    department: string;
    listEmployees(): void
}

// @LogAddedEmployee('Class employee created')
@displayEmployees(['Punit', 'Manu'], 'app')
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