export abstract class Component <T extends HTMLElement, U extends HTMLElement> {
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