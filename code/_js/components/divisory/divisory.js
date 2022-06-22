class Divisory extends Component{
    constructor(content){
        super()
        this.divisory = document.createElement('hr')
        this.stylizeComponents()
    }
    
    stylizeComponents(){
        this.divisory.classList.add("divisory", "my-5")
    }

    getComponents(){
        return this.divisory
    }
}