interface Person {
    readonly name: string;
    readonly id: number
    age: number;
    greet(message: string): void;
}

interface Department {
    readonly deptName: string
    readonly deptId: number
}

class Employee implements Person, Department {
    name: string;
    id: number
    age: number;
    deptName: string;
    deptId: number
    static nextId: number = 0

    constructor(name: string, age: number, deptname: string) {
        this.name = name
        this.age = age
        Employee.nextId += 1
        this.id = Employee.nextId
        this.deptName = deptname
        this.deptId = this.deptName === 'IT' ? 1 : 2
    }

    greet(message: string) {
        console.log(`${message} ${this.name}`)
    }
}

const user1: Person = new Employee('Punit', 33, 'IT')
const user2: Person = new Employee('Nidhi', 34, 'Finance')
const user3: Person = new Employee('Anki', 34, 'Finance')
user1.greet('Good morning')
console.log(user3)

// custom function types and function interfaces
//******************************************** */

type addFn = (a:number, b: number) => number

let addNumbers: addFn
addNumbers = (n1: number, n2:number) => {
    return n1 + n2
}

interface AddFnInterface {
    (a: number, b: number): number;
}

let addNums: AddFnInterface
addNums = (a, b) => {
    return a + b
}