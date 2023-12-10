"use strict";
function addNums(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const user1 = {
    name: 'Punit',
    department: 'IT'
};
function printEmployeeInfo(employee) {
    console.log(employee.name);
    if ('department' in employee) { // applying type guards here
        console.log(employee.department);
    }
    if ('priviledges' in employee) { // applying type guards here
        console.log(employee.priviledges);
    }
}
class LandAnimals {
    constructor(animal) {
        this.animal = animal;
        switch (animal.type) {
            case 'bird':
                this.speed = animal.flyingSpeed;
                break;
            case 'mammal':
                this.speed = animal.runningSpeed;
        }
    }
    getSpeed() {
        console.log(`Animal speed is: ${this.speed}`);
    }
}
const horse = new LandAnimals({ type: 'mammal', runningSpeed: 100 });
horse.getSpeed();
