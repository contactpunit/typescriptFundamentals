import {ProjectStatus, Project} from '../models/project'

type Listener<T> = (items: T[]) => void;

export class State<T> {
    protected allListeners: Listener<T>[] = []
    
    addListener(listenerFn: Listener<T>) {
        this.allListeners.push(listenerFn)
    }
}

export class ProjectState extends State<Project> {
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
        // for(const listenerFn of this.allListeners) {
        //     listenerFn(this.allProjects.slice())
        // }
        this.updateAlListeners()
    }

    updateAlListeners() {
        for(const listenerFn of this.allListeners) {
            listenerFn(this.allProjects.slice())
        }
    }

    moveProject(prjId: string, newStatus: ProjectStatus) {
        const reqProject = this.allProjects.find(project => project.id === prjId)
        if(reqProject) {
            reqProject.status = newStatus
            this.updateAlListeners()
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

export const pState = ProjectState.getInstance()