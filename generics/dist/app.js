"use strict";
const obj1 = {
    name: 'Punit'
};
const obj2 = {
    age: 33
};
const obj3 = {};
function merge(obj1, obj2) {
    return Object.assign(obj3, obj1, obj2);
}
console.log(merge(obj1, obj2));
function countanddescribe(elem) {
    let description = '';
    if (elem.length === 0) {
        description = 'Array of 0 elements';
    }
    else {
        description = `Array elem has ${elem.length} elements`;
    }
    return [elem, description];
}
console.log(countanddescribe('Hello Punit'));
console.log(countanddescribe(['Punit', 'Jain']));
function extractAndConvert(obj, key) {
    return obj[key];
}
// generic classes
class Sweets {
    constructor() {
        this.allSweets = [];
    }
    addSweet(item) {
        this.allSweets.push(item);
    }
    removeSweet(item) {
        this.allSweets.splice(this.allSweets.indexOf(item), 1);
    }
    getSweets() {
        return `All sweets are: ${this.allSweets.join(',')}`;
    }
}
const sweet1 = new Sweets();
sweet1.addSweet('rasgulla');
sweet1.addSweet('rasmalai');
sweet1.addSweet('gulab jamun');
console.log(sweet1.getSweets());
