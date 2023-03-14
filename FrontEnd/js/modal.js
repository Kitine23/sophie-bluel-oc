import { getWorks } from './api.js'
import { createHTMLElement } from './dom.js'

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
      modalWorksElt.appendChild(
        createHTMLElement(
          'figure',
          undefined,
          createHTMLElement('img', { src: work.imageUrl }),
          createHTMLElement(
            'div',
            { className: 'icons' },
            createHTMLElement(
              'button',
              { onclick: () => console.log('remove') },
              createHTMLElement('img', {
                src: 'assets/icons/trash.svg',
                alt: 'trash icon',
                with: '16',
                height: '16',
              })
            )
          ),
          createHTMLElement(
            'figcaption',
            undefined,
            createHTMLElement(
              'button',
              { onclick: () => console.log('click') },
              'éditer'
            )
          )
        )
      )
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
