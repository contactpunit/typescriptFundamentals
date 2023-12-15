import { Component } from "./base-component";
import { DragTarget } from "../models/drag-drop";
import { bindElements } from "../decorators/bindElements";
import { ProjectItem } from "./project-item";
import { pState } from "../state/project-state";
import { Project, ProjectStatus } from "../models/project";

export class ProjectView extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[] = [];

    constructor(private type: 'active' |'finished') {
        super('project-list', 'app', 'beforeend', `${type}-projects`)

        this.configure()
        this.renderContent()

    }

    @bindElements
    dragOverHandler(event: DragEvent) {
        if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault()
            const listElement = this.element.querySelector('ul')!
            listElement.classList.add('droppable')
        }
    }

    @bindElements
    dropHandler(event: DragEvent) {
        const projectId = event.dataTransfer!.getData('text/plain')
        pState.moveProject(projectId, this.type === 'active' ? ProjectStatus.Active: ProjectStatus.Finished)
    }

    @bindElements
    dragLeaveHandler(_: DragEvent) {
        const listElement = this.element.querySelector('ul')!
        listElement.classList.remove('droppable')
    }

    private renderProjects() {
        const ulEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        ulEl.innerHTML = ''
        for(const project of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, project)
        }
        
    }

    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler)
        this.element.addEventListener('dragleave', this.dragLeaveHandler)
        this.element.addEventListener('drop', this.dropHandler)
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