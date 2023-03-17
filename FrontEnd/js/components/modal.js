import { getWorks } from '../utils/api.js'
import { WorkCardEdit } from './WorkCardEdit.js'

export function loadModal() {
  const modalElt = document.querySelector('#modal-works')
  const modalWrapperElt = modalElt.querySelector('.modal-wrapper')
  const modalWorksElt = modalElt.querySelector('.modal-works')
  const btnOpenElt = document.querySelector('#btn-open-modal')
  const btnCloseElt = modalElt.querySelector('#btn-close-modal')

  const openModal = async () => {
    modalElt.style.display = null
    modalElt.removeAttribute('aria-hidden')
    modalElt.setAttribute('aria-modal', 'true')
    document.body.className = 'modal-disable-scroll'

    // charger les travaux
    const works = await getWorks()

    works.forEach((work) => {
      modalWorksElt.appendChild(WorkCardEdit(work))
    })
  }

  const closeModal = () => {
    modalElt.style.display = 'none'
    modalElt.setAttribute('aria-hidden', 'true')
    modalElt.removeAttribute('aria-modal')
    document.body.className = ''
    modalWorksElt.innerHTML = ''
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
