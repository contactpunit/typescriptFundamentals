type Numeric = number
type AlphaNumeric = number | string

type Combined = Numeric | AlphaNumeric

function addNums(a: Combined, b: Combined) {  // apply type guards
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

// ******************

type Admin = {
    name: string;
    department: string;
}

type Manager = {
    name: string;
    priviledges: string[]
}

type Employee = Admin | Manager

const user1: Employee = {
    name: 'Punit',
    department: 'IT'
}

function printEmployeeInfo(employee: Employee) {
    console.log(employee.name)
    if('department' in employee) {  // applying type guards here
        console.log(employee.department)
    }
    if('priviledges' in employee) {  // applying type guards here
        console.log(employee.priviledges)
    }
}


// discriminated union in interfaces

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Mammal {
    type: 'mammal';
    runningSpeed: number
}

type Animal = Bird | Mammal

class LandAnimals {
    animal: Animal;
    speed: number

    constructor(animal: Animal) {
        this.animal = animal
        switch(animal.type) {
            case 'bird':
                this.speed = animal.flyingSpeed
                break;
            case 'mammal':
                this.speed = animal.runningSpeed
        }
    }

    getSpeed() {
        console.log(`Animal speed is: ${this.speed}`)
    }
}

const horse = new LandAnimals({type: 'mammal', runningSpeed: 100})
horse.getSpeed()

