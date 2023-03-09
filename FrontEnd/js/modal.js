export function loadModal() {
  const modalElt = document.querySelector('#modal-works')
  const modalWrapperElt = modalElt.querySelector('.modal-wrapper')
  const btnOpenElt = document.querySelector('#btn-open-modal')
  const btnCloseElt = modalElt.querySelector('#btn-close-modal')

  const openModal = () => {
    modalElt.style.display = null
    modalElt.removeAttribute('aria-hidden')
    modalElt.setAttribute('aria-modal', 'true')
  }

  const closeModal = () => {
    modalElt.style.display = 'none'
    modalElt.setAttribute('aria-hidden', 'true')
    modalElt.removeAttribute('aria-modal')
  }

  modalElt.addEventListener('click', closeModal)
  modalWrapperElt.addEventListener('click', (e) => e.stopPropagation())
  btnOpenElt.addEventListener('click', openModal)
  btnCloseElt.addEventListener('click', closeModal)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal()
    }
  })
}
