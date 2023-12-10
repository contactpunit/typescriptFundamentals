const inputBox = document.getElementById('username')
if(inputBox) {
    (inputBox as HTMLInputElement).value = 'hello there'
}

// index properties

interface UserDetail {
    [prop: string]: string
}

const user1: UserDetail = {
    userName: 'punit',
    userEmail: 'pjain@gmail.com',
    address: 'India'
}

// function overloads
type Mixed = number | string

function addNumbers(a: string, b: number): string
function addNumbers(a: string, b: string): string
function addNumbers(a: number, b: number): number
function addNumbers(a: Mixed, b: Mixed) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

console.log(addNumbers(10, 20))
console.log(addNumbers('Sam', ' Manikshaw'))
console.log(addNumbers('Sam', 80))

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
}

const userBuilding = user.address?.location?.society // optional chaning of nested parts
console.log(userBuilding)

// Null coalesing

const userData = ''
const isDataAvailable = userData ?? 'empty value' // null coalesing operator