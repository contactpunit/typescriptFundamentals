var person = {
    name: 'punit',
    age: 40,
    hobbies: ['Sports', 'Cooking'],
    role: ['author']
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
person.role.push('player');
console.log(person.role);
