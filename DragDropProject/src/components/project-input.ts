import { Component } from './base-component.js'
import { validate} from '../util/validation.js'
import { bindElements } from '../decorators/bindElements.js'
import { pState } from '../state/project-state.js';

export class Form extends Component<HTMLDListElement, HTMLFormElement> {
    titleEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    peopleEl: HTMLInputElement;

    constructor() {
        super('project-input', 'app', 'afterbegin', 'user-input')
        this.titleEl = this.element.querySelector('#title')! as HTMLInputElement
        this.descriptionEl = this.element.querySelector('#description')! as HTMLInputElement
        this.peopleEl = this.element.querySelector('#people')! as HTMLInputElement
        this.configure()
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler)
    }

    renderContent() {}

    @bindElements
    submitHandler(e: Event) {
        e.preventDefault()
        const userInputs: [string, string, number]| void = this.getFormInputs()
        if (Array.isArray(userInputs)) {
            const [title, description, people] = userInputs
            pState.addProject(title, description, people)
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
}