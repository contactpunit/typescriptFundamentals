class Course {
    title: string
    price: number

    constructor(title: string, price: number) {
        this.title = title
        this.price = price
    }
}

const form = document.querySelector('form')!
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement
    const title = titleEl.value
    const price = +priceEl.value

    const c = new Course(title, price)
    console.log(c)

})