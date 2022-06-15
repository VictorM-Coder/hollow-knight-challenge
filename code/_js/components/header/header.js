class Header extends Component{
    constructor(){
        super()
        this.header = document.createElement('header')
        this.acessbilityBar = document.createElement('div')
        this.nav = document.createElement('nav')

        let menuAcessbility = new Menu(["+a", "a", "-a"], "accessibility")
        let menuPrincipal = new Menu(["Anúncios", "Home", "Sobre nós"], "menu")
    
        this.listAcessbility = menuAcessbility.getComponents()
        this.listMenu = menuPrincipal.getComponents()

        this.header.appendChild(this.acessbilityBar)
        this.header.appendChild(this.nav)

        this.acessbilityBar.appendChild(this.listAcessbility)
        this.nav.appendChild(this.listMenu)

        this.stylizeComponents()

    }

    getComponents(){
        return this.header;
    }

    stylizeComponents(){
        this.acessbilityBar.classList.add("accessibility-bar",  "bg-black",  "container")

        this.listAcessbility.classList.add("ul-nav")

        this.nav.classList.add("navbar",  "bg-secondary", "container", "d-flex", "justify-content-center", "align-items-center")

        this.listMenu.classList.add("ul-nav", "my-2")

    }


}