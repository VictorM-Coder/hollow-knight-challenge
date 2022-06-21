let body = document.getElementsByTagName('body')[0]
let mainContainer = document.createElement('main')

let sectionContent = new SectionContent("Enfrente as profundezas de um reino esquecido", "Como o enigmático Cavaleiro, você atravessará as profundezas, desvendará seus mistérios e vencerá seus males", "_images/The_Knight.png", "Baixe o jogo", "steam");

let header = new Header()
let section = new Section(sectionContent)
let footer =  new Footer("Copyright © 2022, Todos os direitos reservados")

body.appendChild(header.getComponents())

mainContainer.appendChild(section.getComponents())
body.appendChild(mainContainer)
mainContainer.classList.add('container')

body.appendChild(footer.getComponents())