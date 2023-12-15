import { Draggable } from '../models/drag-drop'
import { Component } from '../components/base-component'
import { bindElements } from '../decorators/bindElements';
import { Project } from '../models/project';

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    private project: Project;

    get people() {
        return `Number of People: ${this.project.people}`
    }

    get projectName() {
        return `Project Title: ${this.project.title}`
    }

    get projectDesc() {
        return `Purpose: ${this.project.description}`
    }

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, 'beforeend', project.id)
        this.project = project

        this.configure()
        this.renderContent()
    }

    @bindElements
    dragStartHandler(event: DragEvent) {
        event.dataTransfer!.setData('text/plain', this.project.id)
        event.dataTransfer!.effectAllowed = 'move'
    }

    @bindElements
    dragEndHandler(_: DragEvent): void {
        console.log(' ended drag event')
    }

    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler)
        this.element.addEventListener('dragend', this.dragEndHandler)
    }

    renderContent(): void {
        this.element.querySelector('h2')!.textContent = this.projectName
        this.element.querySelector('h3')!.textContent = this.people
        this.element.querySelector('p')!.textContent = this.projectDesc
    }
}