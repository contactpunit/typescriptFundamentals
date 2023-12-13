// validation decorator
interface Validation {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(userInput: Validation) {
    let isValid = true
    if(userInput.required) {
        isValid = isValid && userInput.value.toString().length > 0
    }
    if(userInput.minLength != null && typeof userInput.value === 'string') {
        isValid = isValid && userInput.value.length > userInput.minLength
    }
    if(userInput.maxLength != null && typeof userInput.value === 'string') {
        isValid = isValid && userInput.value.length < userInput.maxLength
    }
    if(userInput.min != null && typeof userInput.value === 'number') {
        isValid = isValid && userInput.value > userInput.min
    }
    if(userInput.max != null && typeof userInput.value === 'number') {
        isValid = isValid && userInput.value < userInput.max
    }
    return isValid
}

// bind decorator
function bindElements(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const newdescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return newdescriptor
}

// classes
class Project {
    templateFormEl: HTMLTemplateElement;
    templateDestinationEl: HTMLDivElement;
    formElement: HTMLFormElement;
    titleEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    peopleEl: HTMLInputElement;

    constructor() {
        this.templateFormEl = document.getElementById('project-input')! as HTMLTemplateElement
        this.templateDestinationEl =document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(this.templateFormEl.content, true)
        this.formElement = importedNode.firstElementChild as HTMLFormElement
        this.formElement.id = 'user-input'

        this.titleEl = this.formElement.querySelector('#title')! as HTMLInputElement
        this.descriptionEl = this.formElement.querySelector('#description')! as HTMLInputElement
        this.peopleEl = this.formElement.querySelector('#people')! as HTMLInputElement

        this.formElement.addEventListener('submit', this.submitHandler)
        this.render()
    }

    @bindElements
    submitHandler(e: Event) {
        e.preventDefault()
        const userInputs = this.getFormInputs()
        if(Array.isArray(userInputs)) {
            console.log(userInputs)
        }
    }

    getFormInputs(): [string, string, number] | void {
        const title = this.titleEl.value
        const description = this.descriptionEl.value
        const people = this.peopleEl.value

        if (validate({value: title, required: true, minLength: 3, maxLength: 10}) &&
            validate({value: description, required: true, minLength: 3, maxLength: 30}) &&
            validate({value: +people, required: true, min: 1, max: 5})
        ) {
            return [title, description, +people]
        } else {
            alert('Invalid Input')
            return
        }
    }

    render() {
        this.templateDestinationEl.insertAdjacentElement('afterbegin', this.formElement)
    }
}

const p = new Project()