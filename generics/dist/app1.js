"use strict";
const users = ['Punit', 'Manu', 'Priyal']; // applied generic of type string to an array
users.map(e => e.toUpperCase());
const promise = new Promise((resolve) => {
    console.log('problem computation is finished');
});
promise.then(result => console.log(result));
// generic function which merges 2 objects and return new object
const object1 = {
    firstName: 'Punit',
    surName: 'Jain'
};
const object2 = {
    age: 44,
    phone: '1234567'
};
const object3 = {};
function mergeObjects(object1, object2) {
    return Object.assign(object3, object1, object2);
}
const result = mergeObjects(object1, object2);
console.log(result);
console.log(result.phone);
