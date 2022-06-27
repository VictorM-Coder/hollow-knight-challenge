const btnHome = document.getElementById("home")
const btnAboutUs = document.getElementById("about-us")
const btnAdverts = document.getElementById("adverts")

//resolve bug vercel
btnAdverts.style.display = 'block'
let activeMenu = btnHome

activeMenu.classList.add("link-active")

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
            changeActive(btnHome)
            break
        case "adverts":
            newSection = new Section(data.advertsSection, true)
            changeActive(btnAdverts)
            break
        case "about-us":
            changeSectionToAboutUs()
            changeActive(btnAboutUs)
            return
        break
    }

    mainContainer.appendChild(newSection.getComponents())
}

function changeSectionToAboutUs(){
    let sectionCherry = new Section(data.teamCherrySection, true)
    let sectionLead = new Section(data.leadSection)
    let divisory1 = new Divisory()
    let divisory2 = new Divisory()
    let sectionDevs = new SectionDevs(data.devs)

    mainContainer.appendChild(sectionCherry.getComponents())
    mainContainer.appendChild(divisory1.getComponents())
    mainContainer.appendChild(sectionLead.getComponents())
    mainContainer.appendChild(divisory2.getComponents())
    mainContainer.appendChild(sectionDevs.getComponents())   
}

function changeActive(item){
    activeMenu.classList.remove("link-active")
    activeMenu = item
    activeMenu.classList.add("link-active")
}