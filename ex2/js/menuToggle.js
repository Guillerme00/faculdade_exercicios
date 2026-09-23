const menuToggle = document.querySelector(".menu-toggle")
const mainMenu = document.getElementById("main-menu")
const headerAction = document.querySelector(".header-action")

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true"

    menuToggle.setAttribute("aria-expanded", String(!isOpen))
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu")
    mainMenu.classList.toggle("is-open", !isOpen)
    headerAction.classList.toggle("is-open", !isOpen)
})

mainMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false")
        menuToggle.setAttribute("aria-label", "Abrir menu")
        mainMenu.classList.remove("is-open")
        headerAction.classList.remove("is-open")
    })
})


