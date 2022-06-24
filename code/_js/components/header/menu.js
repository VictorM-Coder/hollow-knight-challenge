class Menu extends Component{
    //centralizar os botões de acessibilidade
    constructor(menuContent){
        super()
        this.menuContent = menuContent

        this.menu = document.createElement('menu')
        this.#addItems()

        this.stylizeComponents()
    }

    getComponents(){
        return this.menu;
    }

    stylizeComponents(){
        this.menu.classList.add("ul-nav")
    }

    #addItems(){
        switch(this.menuContent.type){
            case "accessibility":
                this.#addAccessibilityItems()
                break
            case "menu":
                this.#addMenuItems()
                break
            case "footer":
                this.#addFooterItems()
                break
        }
    }

    #addAccessibilityItems(){
        this.menuContent.items.forEach((value, index, array) => {
            let li = document.createElement('li')
            li.innerHTML = value
            
            li.id = this.menuContent.ids[index]

            li.classList.add("li-nav")
            li.classList.add("btn-text")
            li.classList.add("btn-accessibility")

            if(index < array.length-1){    
                li.classList.add("me-2")
            }

            this.menu.appendChild(li)
        });
    }

    #addFooterItems(){
        this.menuContent.items.forEach((value, index, array) => {
            let li = document.createElement('li')
            let link = document.createElement('a')

            link.appendChild(value)
            link.href = this.menuContent.links[index]
            link.target = "_blank"

            li.classList.add("li-nav")
            link.classList.add("btn-text", "link-nav")

            if(index < array.length-1){
                li.classList.add("me-2")  
            }

            li.appendChild(link)
            this.menu.appendChild(li)
        });
    }

    #addMenuItems(){
        this.menuContent.items.forEach((value, index, array) => {
            let li = document.createElement('li')
            li.innerText = value

            li.id = this.menuContent.ids[index]
            li.classList.add("li-nav", "btn-text", "link-nav")

            if(index < array.length-1){
                li.classList.add("me-4")     
            }

            this.menu.appendChild(li)
        });
    }

    
}