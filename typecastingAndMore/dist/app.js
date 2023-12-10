"use strict";
var _a, _b;
const inputBox = document.getElementById('username');
if (inputBox) {
    inputBox.value = 'hello there';
}
const user1 = {
    userName: 'punit',
    userEmail: 'pjain@gmail.com',
    address: 'India'
};
function addNumbers(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(addNumbers(10, 20));
console.log(addNumbers('Sam', ' Manikshaw'));
console.log(addNumbers('Sam', 80));
// optional chaining
const user = {
    name: 'punit',
    age: 44,
    address: {
        area: 'pune',
        state: 'MH',
        location: {
            building: 'K',
            society: 'test society'
        }
    }
};
const userBuilding = (_b = (_a = user.address) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.society; // optional chaning of nested parts
console.log(userBuilding);
