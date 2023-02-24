import { getWorks, getCategories } from './api.js'
import { createAllWorks, createCategoryElement } from './dom.js'

//Gestion des filtres
async function filterWorks() {
  //Récupération de l'élément du DOM qui accueillera les categories
  const sectionCategories = document.querySelector('.categories')

  // Récupérer des travaux depuis l'API
  const works = await getWorks()
  createAllWorks(works) //Ajoute au chargement tous les travaux

  // Récupérer des catégories depuis l'API
  const categories = await getCategories()
  categories.unshift({
    id: 0,
    name: 'Tous',
  })

  //supprime les doublons
  //Pour chaque categorie, ajouter les données au DOM
  new Set(categories).forEach((category) => {
    //Création d'une balise dédiée à une catégorie
    const categoryElement = createCategoryElement(category, works)
    //Ajout de la balise aux filtres
    sectionCategories.appendChild(categoryElement)
  })
}

filterWorks()
