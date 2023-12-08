const person:{
    name: string;
    age: number;
    hobbies: string[]
} = {
    name: 'punit',
    age:40,
    hobbies: ['Sports', 'Cooking']
}

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}