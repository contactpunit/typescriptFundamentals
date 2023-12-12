// Code goes here!
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

        this.formElement.addEventListener('submit', this.submitHandler.bind(this))
        this.render()
    }

    submitHandler(e: Event) {
        e.preventDefault()
    }

    render() {
        this.templateDestinationEl.insertAdjacentElement('afterbegin', this.formElement)
    }
}

const p = new Project()