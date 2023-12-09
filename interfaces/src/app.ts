interface Person {
    name: string;
    age: number;
    greet(message: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet(message: string) {
        console.log(`${message} ${this.name}`)
    }
}

const user: Person = new Employee('Punit', 33)
user.greet('Good morning')
