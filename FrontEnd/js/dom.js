function createWorkElement(image, title) {
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

export function createAllWorks(works) {
  //Récupération de l'élément du DOM qui accueillera les travaux de la galerie
  const sectionGallery = document.querySelector('.gallery')
  sectionGallery.innerHTML = ''

  // Pour chaque travail, ajouter les données au DOM
  works.forEach((work) => {
    //Création d'une balise dédiée à un travail
    const workElement = createWorkElement(work.imageUrl, work.title)
    //Ajout de la balise figure à la gallerie
    sectionGallery.appendChild(workElement)
  })
}

export function createCategoryElement(category, works) {
  const buttonElement = document.createElement('button')
  buttonElement.className = 'btn-filter'
  buttonElement.textContent = category.name
  buttonElement.addEventListener('click', () => {
    if (category.name === 'Tous') {
      return createAllWorks(works)
    }
  })
  return buttonElement
}
