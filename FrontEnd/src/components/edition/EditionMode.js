import { Modal } from './Modal.js'

// gestion du mode édition
export function EditionMode() {
  // Si je suis connecté, alors je charge la bannière, les boutons et la modale pour gérer les photos
  if (localStorage.getItem('api-token')) {
    const loginLinkElt = document.querySelector('#login-link')
    const logoutLinkElt = document.querySelector('#logout-link')
    const editBannerElt = document.querySelector('#edit-banner')
    const btnEditElts = Array.from(document.querySelectorAll('.btn-edit'))
    const categorieElt = document.querySelector('.categories')

    loginLinkElt.style.display = 'none'
    logoutLinkElt.style.display = 'block'
    editBannerElt.style.display = 'flex'
    btnEditElts.forEach((btnElt) => (btnElt.style.display = 'flex'))
    // cache les catégories en mode édition
    categorieElt.style.display = 'none'

    // déconnexion au clic sur Logout
    logoutLinkElt.addEventListener('click', () => {
      localStorage.removeItem('api-token')
      window.location.replace('index.html')
    })

    // charge la modale
    Modal()
  }
}
