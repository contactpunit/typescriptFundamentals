// decorators
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

        if(title.trim() && description.trim() && people.trim()) {
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