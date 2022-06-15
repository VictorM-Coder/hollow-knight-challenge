class Menu extends Component{
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
            link.classList.add("link-nav",  "btn-text")

            switch(this.type){
                case "accessibility":
                    li.classList.add("me-2",  "btn-accessibility")
                    break
                case "menu":
                    li.classList.add("me-4")
                    break
                case "footer":
                    li.classList.add("me-2")
                    //adicionar criação com icons!!!
                    break
            }

            li.appendChild(link)
            this.menu.appendChild(li)
        });
    }
}