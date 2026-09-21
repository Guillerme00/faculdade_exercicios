const ModalButton = document.getElementById("open-modal")
const Modal = document.getElementById("post-modal")

ModalButton.addEventListener("click", () => {
    if (Modal.hidden) {
        Modal.hidden = false;
    } else {
        Modal.hidden = true;
    }
})



const closeButton = document.getElementById("close-modal")

closeButton.addEventListener("click", () => {
    if (Modal.hidden) {
        Modal.hidden = false;
    } else {
        Modal.hidden = true;
    }
})


const submit = document.getElementById("button-submit")
const addjobcard = document.getElementById("jobs-list")

const vaga = document.createElement("article")

submit.addEventListener("click", (e) => {
    e.preventDefault()

    const title = document.getElementById("job-title")
    const company = document.getElementById("company")
    const category = document.getElementById("category")
    const location = document.getElementById("location")
    const description = document.getElementById("description")

    vaga.innerHTML = `
    <div class="job-card__topline">
        <span class="job-card__category">Tecnologia</span>
        <span class="job-card__type">CLT</span>
    </div>
    <h3>${title.value}</h3>
    <p class="job-card__company">${company.value}</p>
    <p class="job-card__description">${description.value}</p>
    <div class="job-card__details">
        <span>${category.value}</span>
        <span>${location.value}</span>
    </div>
    <button class="job-card__link" type="button">Ver detalhes <span aria-hidden="true">→</span></button>
    `
    vaga.classList.add("job-card")
addjobcard.appendChild(vaga)

if (Modal.hidden) {
        Modal.hidden = false;
    } else {
        Modal.hidden = true;
    }
})