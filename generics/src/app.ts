const obj1 = {
    name: 'Punit'
}

const obj2 = {
    age: 33
}

const obj3 = {}


function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj3, obj1, obj2)
}

console.log(merge(obj1, obj2))