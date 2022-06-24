class Footer extends Component{
    constructor(content){
        super()
        this.footer = document.createElement('footer')
        this.paragraph = document.createElement('p')
        this.divMenu = document.createElement('div')

        let menu =  new Menu(data.menuFooter)
        this.footerMenu =  menu.getComponents()

        this.footer.appendChild(this.paragraph)
        this.footer.appendChild(this.divMenu)
        this.divMenu.appendChild(this.footerMenu)

        this.paragraph.innerText = content

        this.stylizeComponents()
    }


    stylizeComponents(){
        this.footer.classList.add("bg-secondary", "container", "d-grid", "d-grid-footer", "align-items-center")

        this.paragraph.classList.add("col-center", "text-center", "p-default", "color-white")

        this.divMenu.classList.add("d-flex", "justify-content-end")
    }

    getComponents(){
        return this.footer
    }
}