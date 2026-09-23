import { saveJobs } from "./storage.js"

const submit = document.getElementById("job-form")
const addjobcard = document.getElementById("jobs-list")
const vaga = document.createElement("article")
const toast = document.getElementById("toast")
const toast_error = document.getElementById("toast-error")
const Modal = document.getElementById("post-modal")

let toastTimer

submit.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.getElementById("job-title")
    const company = document.getElementById("company")
    const category = document.getElementById("category")
    const location = document.getElementById("location")
    const description = document.getElementById("description")
    const form = document.getElementById("job-form")

    if (title.value.trim().length > 5 && company.value.length > 2 && category.value.trim() != "" && location.value.trim() != "" && description.value.trim() != "") {
        vaga.innerHTML = `
        <div class="job-card__topline">
            <span class="job-card__category">Oportunidade</span>
            <span class="job-card__type">CLT</span>
        </div>
        <h3>${title.value}</h3>
        <p class="job-card__company">${company.value}</p>
        <p class="job-card__description">${description.value}</p>   
        <div class="job-card__badges">
            <span class="job-badge job-badge--area">Área: ${category.value}</span>
            <span class="job-badge job-badge--location">Local: ${location.value}</span>
        </div>
        <button class="job-card__link" type="button">Ver detalhes <span aria-hidden="true">→</span></button>
        `
        vaga.classList.add("job-card")
        addjobcard.appendChild(vaga)
        saveJobs({
        title: title.value,
        company: company.value,
        category: category.value,
        location: location.value,
        description: description.value
        })
        form.reset()
    
    
    if (Modal.hidden) {
            Modal.hidden = false;
        } else {
            Modal.hidden = true;
        }
    
        toast.hidden = false
        clearTimeout(toastTimer)
        toastTimer = setTimeout(() => {
            toast.hidden = true
        }, 3500)
    } else {
        toast_error.hidden = false
        clearTimeout(toastTimer)
        toastTimer = setTimeout(() => {
            toast_error.hidden = true
        }, 3500)
    }

})