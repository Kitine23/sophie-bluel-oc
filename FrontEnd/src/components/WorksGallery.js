import { WorkCard } from '../components/WorkCard.js'
import { getWorks } from '../utils/api.js'

export async function WorksGallery(categoryId = 0) {
  // Récupérer les projets depuis l'API
  let works = await getWorks()
  const sectionGallery = document.querySelector('.gallery')
  sectionGallery.innerHTML = ''

  // Si la catégorie existe, on filtre pour avoir uniquement les projets de la catégorie
  if (categoryId > 0) {
    works = works.filter((work) => work.categoryId === categoryId)
  }

  // Pour chaque projet, on créé un élément figure et on l'ajoute à la section gallery
  works.forEach((work) => {
    const figureEl = WorkCard(work.imageUrl, work.title)
    sectionGallery.appendChild(figureEl)
  })
}
