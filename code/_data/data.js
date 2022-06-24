const data = {

    homeSection: new SectionContent("Enfrente as profundezas de um reino esquecido", "Como o enigmático Cavaleiro, você atravessará as profundezas, desvendará seus mistérios e vencerá seus males", "_images/The_Knight.png", "Baixe o jogo", "steam", "https://store.steampowered.com/app/367520/Hollow_Knight/"),

    advertsSection: new SectionContent("Explore mundos interconectados", "Faça parte da comunidade, encontre uma imensidão de amigos e evolua com novas habilidades", "_images/dark-knight.png", "entrar na comunidade", "discord", "https://discord.com/invite/hollowknight"),

    teamCherrySection: new SectionContent("Construindo mundos bizarros para você explorar", "Team cherry é um pequeno time de desenvolvimento independete de Adelaide, Austrália. O time é formado por apenas três pessoas que são resposáveis por tudo neste universo!", "_images/team-cherry-logo.png", "visite o site oficial", "controller", "https://www.teamcherry.com.au"),

    leadSection: new SectionContent("Lead Mentoring", "Este site foi desenvolvido como parte de um desafio para o Lead Mentoring, visando implementar conceitos de desenvolvimento web e acessibilidade.", "_images/logo-lead.svg", "conheça o lead", "info-circle", "https://leadfortaleza.com.br/portal"),

    devs: [new Dev("Victor Martins", "Mentorando FullStack na Lead Dell", "_images/victor.jpg"), new Dev("Christian Castro", "Mentor e desenvolvedor FullStack na Lead Dell", "_images/chris.jfif"), new Dev("emirton", "Mentorando FullStack na Lead Dell", "_images/emirton.jfif")
    ],

    menuAccessibility: new MenuContent(["+a", "a", "-a"], "accessibility", ["btn-font-increment", "btn-font-normal", "btn-font-decrement"]),

    menuMain: new MenuContent(["Anúncios", "Home", "Sobre nós"], "menu", ["adverts", "home", "about-us"]),

    menuFooter: new MenuContent([getIcon("youtube"), getIcon("twitter"), getIcon("facebook")], "footer", [], ["https://www.youtube.com/user/teamcherrygames", "https://twitter.com/TeamCherryGames", "https://www.facebook.com/teamcherrygames"])
}