import { WorkCard } from '../components/WorkCard.js'

export function createAllWorks(works) {
  //Récupération de l'élément du DOM qui accueillera les travaux de la galerie
  const sectionGallery = document.querySelector('.gallery')
  sectionGallery.innerHTML = ''

  // Pour chaque travail, ajouter les données au DOM
  works.forEach((work) => {
    //Création d'une balise dédiée à un travail
    const workElement = WorkCard(work.imageUrl, work.title)
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
    const filteredWorks = works.filter(
      (work) => work.categoryId === category.id
    )
    return createAllWorks(filteredWorks)
  })
  return buttonElement
}
