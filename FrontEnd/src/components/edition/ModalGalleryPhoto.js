import { getWorks } from '../../utils/api.js'
import { button, div, h2, hr } from '../../utils/HTMLElement.js'
import { WorkCardEdit } from '../works/WorkCardEdit.js'
import { ModalAddPhoto } from './ModalAddPhoto.js'

export async function ModalGalleryPhoto() {
  const modalBodyElt = document.querySelector('#modal-works .modal-body')
  const btnGoBackElt = document.querySelector('#btn-go-back')
  btnGoBackElt.style.display = 'none'

  const works = await getWorks()

  const worksCards = works.map((work) => WorkCardEdit(work))

  modalBodyElt.replaceChildren(
    h2({ id: 'modal-title' }, 'Galerie photo'),
    div({ className: 'modal-works' }, ...worksCards),
    hr({ className: 'line' }),
    button(
      { id: 'modal-work-add', className: 'btn-submit', onclick: ModalAddPhoto },
      'Ajouter une photo'
    ),
    button({ className: 'btn-delete' }, 'Supprimer la galerie')
  )
}
