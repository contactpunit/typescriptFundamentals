// Code goes here!
class Project {
    templateFormEl: HTMLTemplateElement;
    templateDestinationEl: HTMLDivElement;
    formElement: HTMLFormElement

    constructor() {
        this.templateFormEl = document.getElementById('project-input')! as HTMLTemplateElement
        this.templateDestinationEl =document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(this.templateFormEl.content, true)
        this.formElement = importedNode.firstElementChild as HTMLFormElement
        this.render()
    }

    render() {
        this.templateDestinationEl.insertAdjacentElement('afterbegin', this.formElement)
    }
}

const p = new Project()