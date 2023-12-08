const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: string[]
} = {
    name: 'punit',
    age:40,
    hobbies: ['Sports', 'Cooking'],
    role: ['author']
}

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

person.role.push('player')
console.log(person.role)