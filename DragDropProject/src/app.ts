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

enum ProjectStatus { Active, Finished }

class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ) {}
}

type Listener = (items: Project[]) => void

class ProjectState {
    private allProjects: Project[] = []
    private allListeners: Listener[] = []
    static instance: ProjectState

    addProject(title: string, description: string, people: number) {
        const p: Project = new Project(
            new Date().toString(),
            title,
            description,
            people,
            ProjectStatus.Active
        )
        this.allProjects.push(p)
        for(const listenerFn of this.allListeners) {
            listenerFn(this.allProjects.slice())
        }
    }
    
    addListener(listenerFn: Listener) {
        this.allListeners.push(listenerFn)
    }

    static getInstance() {
        if(this.instance) return this.instance
        else {
            this.instance = new ProjectState()
            return this.instance
        }
    }
}

const pState = ProjectState.getInstance()

class ProjectView {
    templateProjectListEl: HTMLTemplateElement;
    templateDestinationEl: HTMLDivElement;
    projectElement: HTMLElement;
    assignedProjects: Project[] = [];

    constructor(private type: 'active' |'finished') {
        this.templateDestinationEl =document.getElementById('app')! as HTMLDivElement
        this.templateProjectListEl = document.getElementById('project-list')! as HTMLTemplateElement
        const importedNode = document.importNode(this.templateProjectListEl.content, true)
        this.projectElement = importedNode.firstElementChild as HTMLFormElement
        this.projectElement.id = `${this.type}-projects`

        pState.addListener((projects: Project[]) => {
            const filteredProjects = projects.filter((prj) => {
                if(type === 'active') return prj.status === ProjectStatus.Active
                else return prj.status === ProjectStatus.Finished
            })
            this.assignedProjects = filteredProjects
            this.renderProjects()
        })

        this.render()
    }

    private renderProjects() {
        const ulEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        ulEl.innerHTML = ''
        for(const project of this.assignedProjects) {
            const listItem = document.createElement('li')
            listItem.textContent = project.title
            ulEl.appendChild(listItem)
        }
    }

    render() {
        this.templateDestinationEl.insertAdjacentElement('beforeend', this.projectElement)
        const ulId = `${this.type}-projects-list`
        this.projectElement.querySelector('ul')!.id = ulId
        this.projectElement.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`
    }
}

const pl1 = new ProjectView('active')
const pl2 = new ProjectView('finished')

class Form {
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

    render() {
        this.templateDestinationEl.insertAdjacentElement('afterbegin', this.formElement)
    }
}


// Instances

const p = new Form()