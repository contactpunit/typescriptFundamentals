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


// function that takes an input of generic type and return a tuple of element itself and decription about element

interface Elements {
    length: number;
}

function countanddescribe<T extends Elements>(elem: T): [T, string] {
    let description: string = ''
    if(elem.length === 0) {
        description = 'Array of 0 elements'
    } else {
        description = `Array elem has ${elem.length} elements`
    }
    return [elem, description]
}

console.log(countanddescribe('Hello Punit'))
console.log(countanddescribe(['Punit', 'Jain']))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

// generic classes

class Sweets<T extends string|number|boolean> {
    private allSweets: T[] = []

    addSweet(item: T) {
        this.allSweets.push(item)
    }

    removeSweet(item: T) {
        this.allSweets.splice(this.allSweets.indexOf(item), 1)
    }

    getSweets() {
        return `All sweets are: ${this.allSweets.join(',')}`
    }
}

const sweet1 = new Sweets<string>()
sweet1.addSweet('rasgulla')
sweet1.addSweet('rasmalai')
sweet1.addSweet('gulab jamun')
console.log(sweet1.getSweets())