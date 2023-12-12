"use strict";
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const c = new Course(title, price);
    console.log(c);
});
