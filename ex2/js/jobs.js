import { getJobs } from "./storage.js"

const addjobcard = document.getElementById("jobs-list")
const vaga = document.createElement("article")

let jobs = getJobs()

for (const item of jobs) {
    const vaga = document.createElement("article")
    vaga.innerHTML = `
        <div class="job-card__topline">
            <span class="job-card__category">Oportunidade</span>
            <span class="job-card__type">CLT</span>
        </div>
        <h3>${item.title}</h3>
        <p class="job-card__company">${item.company}</p>
        <p class="job-card__description">${item.description}</p>   
        <div class="job-card__badges">
            <span class="job-badge job-badge--area">Área: ${item.category}</span>
            <span class="job-badge job-badge--location">Local: ${item.location}</span>
        </div>
        <button class="job-card__link" type="button">Ver detalhes <span aria-hidden="true">→</span></button>
        `
        vaga.classList.add("job-card")
        addjobcard.appendChild(vaga)
}