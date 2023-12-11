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
