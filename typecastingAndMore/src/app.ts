const inputBox = document.getElementById('username')
if(inputBox) {
    (inputBox as HTMLInputElement).value = 'hello there'
}

// index properties

interface UserDetail {
    [prop: string]: string
}

const user1: UserDetail = {
    userName: 'punit',
    userEmail: 'pjain@gmail.com',
    address: 'India'
}