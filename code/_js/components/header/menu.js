class Menu extends Component{
    //centralizar os botões de acessibilidade
    constructor(content = ['item', 'item', 'item'], type, ids){
        super()
        this.items = content
        this.type = type;
        this.ids =ids

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
        this.items.forEach((value, index, array) => {
            let li = document.createElement('li')
            let link = document.createElement('a')
            
            if(typeof(value) === "string"){
                link.innerHTML = value
            }else if(typeof(value) === "object"){
                link.appendChild(value)
            }
            
            if(this.ids != undefined){
                link.id = this.ids[index]
            }

            li.classList.add("li-nav")
            link.classList.add("btn-text")

            if(index < array.length-1){
                switch(this.type){
                    case "accessibility":
                        li.classList.add("me-2")
                        break
                    case "menu":
                        li.classList.add("me-4")
                        break
                    case "footer":
                        li.classList.add("me-2")
                        break
                }
            }

            if(this.type == "accessibility"){
                link.classList.add("btn-accessibility")
            }else{
                link.classList.add("link-nav")
            }

            li.appendChild(link)
            this.menu.appendChild(li)
        });
    }
}