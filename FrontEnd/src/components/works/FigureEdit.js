import { deleteWork } from '../../utils/api.js'
import {
  button,
  div,
  figcaption,
  figure,
  img,
} from '../../utils/HTMLElement.js'
import { WorksGallery } from './WorksGallery.js'

export function FigureEdit(work) {
  const figureEl = figure()

  const handleDeletionClick = async (id) => {
    const status = await deleteWork(id)
    if (status !== 204) {
      alert('Impossible de supprimer le travaux')
      return
    }

    figureEl.remove()
    // recharge les projets dynamiquement sur la page principale
    WorksGallery()
  }

  figureEl.append(
    img({ src: work.imageUrl }),
    div(
      { className: 'icons' },
      button(
        {
          className: 'btn-full-screen',
        },
        img({
          src: 'assets/icons/full-screen.svg',
          alt: 'full screen icon',
          with: '16',
          height: '16',
        })
      ),
      button(
        { onclick: () => handleDeletionClick(work.id) },
        img({
          src: 'assets/icons/trash.svg',
          alt: 'trash icon',
          with: '16',
          height: '16',
        })
      )
    ),
    figcaption({}, button({ onclick: () => console.log('éditer') }, 'éditer'))
  )

  return figureEl
}
