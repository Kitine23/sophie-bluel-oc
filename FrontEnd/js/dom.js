export function createWorkElement(image, title) {
  const figureElement = document.createElement('figure')

  const imageElement = document.createElement('img')
  imageElement.src = image
  imageElement.alt = title

  const figcaptionElement = document.createElement('figcaption')
  figcaptionElement.innerText = title

  figureElement.appendChild(imageElement)
  figureElement.appendChild(figcaptionElement)

  return figureElement
}
