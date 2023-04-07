import { figcaption, figure, img } from '../utils/HTMLElement.js'

export function WorkCard(image, title) {
  return figure({}, img({ src: image, alt: title }), figcaption({}, title))
}
