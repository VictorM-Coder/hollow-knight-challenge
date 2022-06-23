class SectionDevs extends Component{
    constructor(devs){
        super()
        this.section = document.createElement('section')

        this.section.appendChild(this.createCard(devs[0]))
        this.section.appendChild(this.createCard(devs[1]))
        this.section.appendChild(this.createCard(devs[2]))

        this.stylizeComponents()
    }
    
    stylizeComponents(){
        this.section.classList.add("d-flex", "justify-content-center", "align-items-center", "flex-wrap", "justify-content-around", "mb-3")
    }

    getComponents(){
        return this.section
    }

    createCard(dev){
        const card = document.createElement('div')
        const imgContainer = document.createElement('div')
        const img = document.createElement('img')
        const contentCard = document.createElement('div')
        const pName = document.createElement('p')
        const pJob = document.createElement('p')

        card.appendChild(imgContainer)
        card.appendChild(contentCard)
        imgContainer.appendChild(img)
        contentCard.appendChild(pName)
        contentCard.appendChild(pJob)
        
        img.src = dev.imgURL
        pName.innerText = dev.name
        pJob.innerText = dev.job

        card.classList.add("cardDev", "py-1", "mb-3")
        contentCard.classList.add("text-center")
        img.classList.add("img-perfil")
        pName.classList.add("subtitle", "color-white")
        pJob.classList.add("p-default", "color-white")

        return card
    }
}