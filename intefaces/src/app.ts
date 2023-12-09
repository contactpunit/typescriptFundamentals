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
    private onboardingDevices
    constructor(name: string, public admins: string[]) {
        super(name)
        this.admins = admins
        this.onboardingDevices = ['Laptop', 'Keyboard', 'Mouse', 'Token']
    }

    get getDevices() {
        return this.onboardingDevices
    }

    set setDevices(devices: string[]) {
        if(devices.length && devices.map(d => d.trim()).length) {
            this.onboardingDevices = [...new Set([...this.onboardingDevices, ...devices])]
        }
    }

    getAllEmployees() {
        const allEmployees = [...(new Set([...this.admins, ...this.employees]))]
        console.log(`All employees of IT department are ${ allEmployees.join(',')}`)
    }
}

const it = new ITDepartment('IT', ['Punit', 'Manju'])
it.addEmployee('Rahul')
it.getAllEmployees()
console.log('Onboarding devices are: ' + it.getDevices.join(','))
it.setDevices = ['Bag']
console.log('Onboarding devices are: ' + it.getDevices.join(','))
