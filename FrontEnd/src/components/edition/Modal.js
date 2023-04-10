import { ModalGalleryPhoto } from './ModalGalleryPhoto.js'

export function Modal() {
  // sélecteurs
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

  const openModal = async () => {
    modalElt.style.display = null
    modalElt.removeAttribute('aria-hidden')
    modalElt.setAttribute('aria-modal', 'true')
    // bloque le scroll de la page principale
    document.body.className = 'modal-disable-scroll'

    ModalGalleryPhoto()
  }

  // ouverture modale
  btnOpenElt.addEventListener('click', openModal)
  // fermeture modale
  modalElt.addEventListener('click', closeModal)
  modalWrapperElt.addEventListener('click', (e) => e.stopPropagation())
  btnCloseElt.addEventListener('click', closeModal)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal()
    }
  })
  // Au retour depuis le formulaire de création d'un projet, on charge la galerie dans le body de la modale
  btnGoBackElt.addEventListener('click', ModalGalleryPhoto)
}
