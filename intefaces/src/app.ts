class Department {
    // private name: string;
    // private employees: string[];

    constructor(private name: string, protected employees:string[] =[]) {
        // this.name = name
        // this.employees = []
    }

    describe() {
        console.log('Department: ' + this.name)
    }

    addEmployee(employee: string) {
        if (!this.employees.includes(employee)) this.employees.push(employee)
    }

    employeesInfo() {
        console.log(`Employees for department ${this.name} are ${this.employees.join(',')}`)
    }
}

class ITDepartment extends Department {
    constructor(name: string, public admins: string[]) {
        super(name)
        this.admins = admins
    }


    getAllEmployees() {
        const allEmployees = [...(new Set([...this.admins, ...this.employees]))]
        console.log(`All employees of IT department are ${ allEmployees.join(',')}`)
    }
}

const it = new ITDepartment('IT', ['Punit', 'Manju'])
it.addEmployee('Rahul')
it.getAllEmployees()