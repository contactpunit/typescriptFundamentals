class ShowMessage {
    message: string= ''

    constructor() {
        this.message = 'I am clicked!!!'
    }

    clickMsg() {
        console.log(this.message)
    }
}

const msg = new ShowMessage()

const button = document.querySelector('button')!
button.addEventListener('click', msg.clickMsg)