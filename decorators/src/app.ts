function displayEmployee(employeeList: string[], element: string) {
    return function<T extends {new(...args:any[]): {}}>(employeClass: T) {
        return class extends employeClass {
            constructor(...args:any[]) {
                super();
                const reqEl = document.getElementById(element) as HTMLOutputElement
                for(const elem of employeeList) {
                    const li = document.createElement('li')
                    li.appendChild(document.createTextNode(elem))
                    reqEl.appendChild(li)
                }
            }
        }
    }
}

interface Emp {
    name: string;
    age: number;
    salary: number;
    department: string;
    listEmployees(): void
}

@displayEmployee(['Punit', 'Manu', 'Raj'], 'app')
class Employe implements Emp{
    name: string;
    age: number;
    salary: number;
    department: string;
    static allEmployees: Emp[] = []

    constructor(name: string, age: number, salary: number, department:string) {
        this.name = name
        this.age = age
        this.salary = salary
        this.department = department
        Employe.allEmployees.push(this)
    }

    listEmployees() {
        console.log(`All employees of company are ${(Employe.allEmployees.map(e => e.name)).join(',')}`)
    }
}

const empl = new Employe('punit', 33, 1234, 'IT')
empl.listEmployees()
// const emp2 = new Employee('manu', 36, 1111, 'IT')
// emp1.listEmployees()