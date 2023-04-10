import { button } from '../../utils/HTMLElement.js'
import { WorksGallery } from '../works/WorksGallery.js'

export function CategoryButton(id, name) {
  return button(
    {
      className: 'btn-filter',
      onclick: () => WorksGallery(id),
    },
    name
  )
}
