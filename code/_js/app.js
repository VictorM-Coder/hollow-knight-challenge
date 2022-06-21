let headerContainer = document.getElementById('header')
let mainContainer = document.getElementById('main')
let footerContainer = document.getElementById('footer')

let header = new Header()

let sectionContent = new SectionContent("Enfrente as profundezas de um reino esquecido", "Como o enigmático Cavaleiro, você atravessará as profundezas, desvendará seus mistérios e vencerá seus males", "_images/The_Knight.png", "Baixe o jogo", "steam");

let section = new Section(sectionContent)

let footer =  new Footer("Copyright © 2022, Todos os direitos reservados")


headerContainer.appendChild(header.getComponents())
mainContainer.appendChild(section.getComponents())
footerContainer.appendChild(footer.getComponents())