const modalElt = document.querySelector('#modal-works')
const btnOpenElt = document.querySelector('#btn-open-modal')
const btnCloseElt = modalElt.querySelector('#btn-close-modal')

const openModal = function () {
  modalElt.style.display = null
  modalElt.removeAttribute('aria-hidden')
  modalElt.setAttribute('aria-modal', 'true')
}

const closeModal = function () {
  modalElt.style.display = 'none'
  modalElt.setAttribute('aria-hidden', 'true')
  modalElt.removeAttribute('aria-modal')
}

//modalElt.addEventListener('click', closeModal)
btnOpenElt.addEventListener('click', openModal)
btnCloseElt.addEventListener('click', closeModal)
