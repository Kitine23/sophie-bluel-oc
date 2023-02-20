/* <figure>
  <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina" />
  <figcaption>Abajour Tahina</figcaption>
</figure> */

export function createWorkElement(image, title) {
  return `<figure>
  <img src="${image}" alt="${title}" />
  <figcaption>${title}</figcaption>
</figure>`
}
