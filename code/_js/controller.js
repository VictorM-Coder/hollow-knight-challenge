let btnHome = document.getElementById("home")
let btnAboutUs = document.getElementById("about-us")
let btnAdverts = document.getElementById("adverts")

btnHome.addEventListener("click", () => {
    changeSectionTo("home")
} )

btnAdverts.addEventListener("click", () => {
    changeSectionTo("adverts")
} )

btnAboutUs.addEventListener("click", () => {
    changeSectionTo("about-us")
} )

function changeSectionTo(text){
    window.alert(text)
}