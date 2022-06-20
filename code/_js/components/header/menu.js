class Menu extends Component{
    //centralizar os botões de acessibilidade
    constructor(content = ['item', 'item', 'item'], type){
        super()
        this.items = content
        this.type = type;

        this.menu = document.createElement('menu')
        this.#addItems()
    }

    getComponents(){
        return this.menu;
    }

    #addItems(){
        this.items.forEach((value, index, array) => {
            let li = document.createElement('li')
            let link = document.createElement('a')
            
            link.innerHTML = value

            li.classList.add("li-nav")
            link.classList.add("link-nav", "btn-text")

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
                        //adicionar criação com icons!!!
                        break
                }
            }

            if(this.type == "accessibility"){
                li.classList.add("btn-accessibility")
            }

            li.appendChild(link)
            this.menu.appendChild(li)
        });
    }
}