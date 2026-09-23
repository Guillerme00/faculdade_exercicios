const vagas = document.getElementById("vagas")
const sobre = document.getElementById("sobre")
const hero = document.getElementById("hero")

const inicio_button = document.getElementById("inicio")
const home_button = document.getElementById("home")
const sobre_button = document.getElementById("aboutus")

const go_home = () => {
    vagas.hidden = false
    hero.hidden = false
    sobre.hidden = true
}

const go_about = () => {
    vagas.hidden = true
    hero.hidden = true
    sobre.hidden = false
}

inicio_button.addEventListener("click", go_home)
home_button.addEventListener("click", go_home)
sobre_button.addEventListener("click", go_about)