// const PLAYER = 0
// const SINGER = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role[Role["PLAYER"] = 0] = "PLAYER";
    Role[Role["SINGER"] = 1] = "SINGER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'punit',
    age: 40,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
console.log(person.role);
if (person.role === 2)
    console.log('I am author');
