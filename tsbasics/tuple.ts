const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [string, number]  // defined tuple type
} = {
    name: 'punit',
    age:40,
    hobbies: ['Sports', 'Cooking'],
    role: ['author', 2]
}

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

person.role.push('player')  // push is exception for type checking of tuples
console.log(person.role)