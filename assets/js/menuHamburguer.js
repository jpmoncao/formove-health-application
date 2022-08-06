const hamburguerMenu = document.querySelector(".mobile-menu-button")
const navList = document.querySelector("nav")

const menuIsActive = () => {
    hamburguerMenu.classList.toggle("active")
    navList.classList.toggle("active")
    // BUG: Hover do dropdown não está funcionando no mobile
    // pois ao clicar no anchor ele fecha o menu geral
}

hamburguerMenu.addEventListener('click', menuIsActive)
navList.addEventListener('click', menuIsActive)