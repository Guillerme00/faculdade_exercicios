const ModalButton = document.getElementById("open-modal")
const closeButton = document.getElementById("close-modal")
const Modal = document.getElementById("post-modal")

const changeModal = () => {
    Modal.hidden = !Modal.hidden
}

ModalButton.addEventListener("click", changeModal)
closeButton.addEventListener("click", changeModal)