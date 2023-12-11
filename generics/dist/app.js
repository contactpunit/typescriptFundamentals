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
