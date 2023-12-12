function LogValidation(target:any, propertyName: string | Symbol) {
    console.log('class attribute descriptor')
    console.log(target, ' ' + propertyName)
}

function isAuthenticatedCheck(target: any, name: string, descriptor: TypedPropertyDescriptor<any>) {
    console.log('apply decorator to isAuthenticated descriptor')
    console.log('target: ' + JSON.stringify(target))
    console.log('name: ' + name)
    console.log('descriptor: ' + JSON.stringify(descriptor))
}

function displayUser(target: any, name: string, descriptor: TypedPropertyDescriptor<any>) {
    console.log('apply instance decorator')
    console.log('target: ' + JSON.stringify(target))
    console.log('name: ' + name)
    console.log('descriptor: ' + JSON.stringify(descriptor))
}

function paramsDecorator(target: any, name: string, position: number) {
    console.log('apply param decorator')
    console.log('target: ' + JSON.stringify(target))
    console.log('name: ' + name)
    console.log('position: ' + position)
}

class User {
    name: string;
    @LogValidation
    username: string;
    password: string;
    userAuthenticated: boolean = false;

    constructor(name:string, username: string) {
        this.name = name
        this.username = username
        this.password = (Math.random() + 1).toString(36).substring(7)
    }

    get isAthenticated() {
        return this.userAuthenticated
    }

    @isAuthenticatedCheck
    set isAuthenticated(pass: string) {
        if(this.password === pass) this.userAuthenticated = true
        else this.userAuthenticated = false
    }

    @displayUser
    showUserInfo() {
        return this.name
    }

    updateUsername(@paramsDecorator value: string) {
        if(this.username !== value) this.username = value
    }
}