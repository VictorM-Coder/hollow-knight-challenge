function getIconFromBootstrap(name){
    let icon = document.createElement('i')
    icon.classList.add("bi",  `bi-${name}`, "icon")
    return icon
}