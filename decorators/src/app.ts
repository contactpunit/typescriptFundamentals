function BindThis(target: any, methodName: string, descriptor: TypedPropertyDescriptor<any> ) {
    const originalMethod = descriptor.value
    const newDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return newDescriptor
}

class ShowMessage {
    message: string= ''

    constructor() {
        this.message = 'I am clicked!!!'
    }

    @BindThis
    clickMsg() {
        console.log(this.message)
    }
}

const msg = new ShowMessage()

const button = document.querySelector('button')!
button.addEventListener('click', msg.clickMsg)