let btnHome = document.getElementById("home")
let btnAboutUs = document.getElementById("about-us")
let btnAdverts = document.getElementById("adverts")

btnHome.addEventListener("click", () => {
    changeSectionTo("home")
})

btnAdverts.addEventListener("click", () => {
    changeSectionTo("adverts")
})

btnAboutUs.addEventListener("click", () => {
    changeSectionTo("about-us")
})

function changeSectionTo(type){
    mainContainer.innerHTML = ''
    let newSection
    switch(type){
        case "home":
            newSection = new Section(data.homeSection)
            break
        case "adverts":
            newSection = new Section(data.advertsSection, true)
            break
        case "about-us":
            changeSectionToAboutUs()
            return
    break
    }

    mainContainer.appendChild(newSection.getComponents())
}

function changeSectionToAboutUs(){
    let sectionCherry = new Section(data.teamCherrySection, true)
    let sectionLead = new Section(data.leadSection)
    let divisory = new Divisory()
    mainContainer.appendChild(sectionCherry.getComponents())
    mainContainer.appendChild(divisory.getComponents())
    mainContainer.appendChild(sectionLead.getComponents())
}