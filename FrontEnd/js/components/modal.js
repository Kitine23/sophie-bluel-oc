import { AddWorkForm } from './AddWorkForm.js'
import { WorkGalleryEdit } from './WorkGalleryEdit.js'

export function loadModal() {
  const modalElt = document.querySelector('#modal-works')
  const modalWrapperElt = modalElt.querySelector('.modal-wrapper')
  const btnOpenElt = document.querySelector('#btn-open-modal')
  const btnCloseElt = modalElt.querySelector('#btn-close-modal')
  const btnGoBackElt = modalElt.querySelector('#btn-go-back')

  const closeModal = () => {
    modalElt.style.display = 'none'
    modalElt.setAttribute('aria-hidden', 'true')
    modalElt.removeAttribute('aria-modal')
    document.body.className = ''
    modalWrapperElt.querySelector('.modal-body').innerHTML = ''
  }

  const openAddWorkForm = async () => {
    btnGoBackElt.style.display = 'block'
    modalWrapperElt
      .querySelector('.modal-body')
      .replaceChildren(await AddWorkForm())
  }

  const openWorksGallery = async () => {
    btnGoBackElt.style.display = 'none'
    modalWrapperElt
      .querySelector('.modal-body')
      .replaceChildren(...(await WorkGalleryEdit(openAddWorkForm)))
  }

  const openModal = async () => {
    modalElt.style.display = null
    modalElt.removeAttribute('aria-hidden')
    modalElt.setAttribute('aria-modal', 'true')
    document.body.className = 'modal-disable-scroll'

    openWorksGallery()
  }

  modalElt.addEventListener('click', closeModal)
  modalWrapperElt.addEventListener('click', (e) => e.stopPropagation())
  btnOpenElt.addEventListener('click', openModal)
  btnCloseElt.addEventListener('click', closeModal)
  btnGoBackElt.addEventListener('click', openWorksGallery)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal()
    }
  })
}
