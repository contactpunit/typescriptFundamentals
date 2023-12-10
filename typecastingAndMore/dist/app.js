"use strict";
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
