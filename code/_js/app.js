let body = document.getElementsByTagName('body')[0]
let mainContainer = document.createElement('main')

const header = new Header()
const section = new Section(data.homeSection)
const footer =  new Footer("Copyright © 2022, Todos os direitos reservados")

body.appendChild(header.getComponents())

mainContainer.appendChild(section.getComponents())
body.appendChild(mainContainer)
mainContainer.classList.add('container')

body.appendChild(footer.getComponents())

