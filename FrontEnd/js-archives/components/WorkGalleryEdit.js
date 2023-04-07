import { getWorks } from '../utils/api.js'
import { button, div, h2, hr } from '../utils/HTMLElement.js'
import { WorkCardEdit } from './WorkCardEdit.js'

export async function WorkGalleryEdit(onclick) {
  const works = await getWorks()

  const worksCards = works.map((work) => {
    return WorkCardEdit(work)
  })

  return [
    h2({ id: 'modal-title' }, 'Galerie photo'),
    div({ className: 'modal-works' }, ...worksCards),
    hr({ className: 'line' }),
    button(
      { id: 'modal-work-add', className: 'btn-submit', onclick },
      'Ajouter une photo'
    ),
    button({ className: 'btn-delete' }, 'Supprimer la galerie'),
  ]
}
