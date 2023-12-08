// const PLAYER = 0
// const SINGER = 1
// const AUTHOR = 2

enum Role { PLAYER, SINGER, AUTHOR };

const person = {
    name: 'punit',
    age:40,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
}


console.log(person.role)
if(person.role === 2) console.log('I am author')