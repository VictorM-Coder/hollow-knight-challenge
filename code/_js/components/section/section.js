class Section extends Component{
    constructor(content){
        super()

        this.section = document.createElement('section')
        this.card = document.createElement('div')
        this.title = document.createElement('h1')
        this.paragraph = document.createElement('p')
        this.button =  document.createElement('button')
        this.icon = getIconFromBootstrap("steam")
        this.span = document.createElement('span')

        this.imageDiv = document.createElement('div')
        this.image = document.createElement('img')

        this.section.appendChild(this.card)
        this.section.appendChild(this.imageDiv)

        this.imageDiv.appendChild(this.image)
        this.image.src = content.imgURL

        this.card.appendChild(this.title)
        this.card.appendChild(this.paragraph)
        this.card.appendChild(this.button)
        this.button.appendChild(this.icon)
        this.button.appendChild(this.span)

        this.span.innerText = content.buttonText
        this.title.innerText = content.title
        this.paragraph.innerText = content.paragraph

        this.stylizeComponents()
    }
    
    stylizeComponents(){
        this.section.classList.add("d-grid",  "d-grid-section", "my-4", "align-items-center")

        this.card.classList.add("align-self-center", "row-content")

        this.title.classList.add("h1-default", "color-white", "m-0")

        this.paragraph.classList.add("p-display", "color-white", "mt-2", "mb-3")

        this.button.classList.add("btn-default", "btn-text", "color-white")

        this.icon.classList.add("bi", "bi-steam", "icon", "me-1")

        this.imageDiv.classList.add("d-flex", "justify-content-center", "row-image")

        this.image.classList.add("img-fluid")
    }

    getComponents(){
        return this.section
    }
}