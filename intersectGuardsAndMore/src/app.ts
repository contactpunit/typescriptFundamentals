type Admin = {
    name: string;
    department: string;
}

type Manager = {
    name: string;
    priviledges: string[]
}

type Employee = Admin & Manager

const user1: Employee = {
    name: 'Punit',
    department: 'IT',
    priviledges: ['restartServer']
}