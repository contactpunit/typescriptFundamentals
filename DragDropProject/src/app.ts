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

type Listener<T> = (items: T[]) => void

class State<T> {
    protected allListeners: Listener<T>[] = []
    
    addListener(listenerFn: Listener<T>) {
        this.allListeners.push(listenerFn)
    }
}

class ProjectState extends State<Project> {
    private allProjects: Project[] = [] 
    
    static instance: ProjectState

    constructor() {
        super()
    }

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

    static getInstance() {
        if(this.instance) return this.instance
        else {
            this.instance = new ProjectState()
            return this.instance
        }
    }
}

const pState = ProjectState.getInstance()

abstract class Component <T extends HTMLElement, U extends HTMLElement> {
    templateSourceEl: HTMLTemplateElement;
    templateDestinationEl: T;
    element: U;

    constructor(sourceId: string, destId: string, insertAt: 'beforeend'| 'afterbegin', newElemId?: string) {
        this.templateDestinationEl = document.getElementById(destId)! as T
        this.templateSourceEl = document.getElementById(sourceId)! as HTMLTemplateElement
        const importedNode = document.importNode(this.templateSourceEl.content, true)
        this.element = importedNode.firstElementChild as U
        if(newElemId) {
            this.element.id = newElemId
        }
        this.render(insertAt)
    }

    render(insertAt: 'beforeend'| 'afterbegin') {
        this.templateDestinationEl.insertAdjacentElement(insertAt, this.element)
    }

    abstract configure(): void;
    abstract renderContent(): void;
}

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
    private project: Project

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, 'beforeend', project.id)
        this.project = project

        this.renderContent()
    }

    configure() {}

    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.project.title
        this.element.querySelector('h3')!.textContent = this.project.people.toString()
        this.element.querySelector('p')!.textContent = this.project.description
    }
}

class ProjectView extends Component<HTMLDivElement, HTMLElement> {
    assignedProjects: Project[] = [];

    constructor(private type: 'active' |'finished') {
        super('project-list', 'app', 'beforeend', `${type}-projects`)

        this.configure()
        this.renderContent()

    }

    private renderProjects() {
        const ulEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        ulEl.innerHTML = ''
        for(const project of this.assignedProjects) {
            new ProjectItem(this.element.id, project)
            // const listItem = document.createElement('li')
            // listItem.textContent = project.title
            // ulEl.appendChild(listItem)
        }
        
    }

    configure() {
        pState.addListener((projects: Project[]) => {
            const filteredProjects = projects.filter((prj) => {
                if(this.type === 'active') return prj.status === ProjectStatus.Active
                else return prj.status === ProjectStatus.Finished
            })
            this.assignedProjects = filteredProjects
            this.renderProjects()
        })
    }

    renderContent() {
        const ulId = `${this.type}-projects-list`
        this.element.querySelector('ul')!.id = ulId
        this.element.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`
    }
}

const pl1 = new ProjectView('active')
const pl2 = new ProjectView('finished')

class Form extends Component<HTMLDListElement, HTMLFormElement> {
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


// Instances

const p = new Form()