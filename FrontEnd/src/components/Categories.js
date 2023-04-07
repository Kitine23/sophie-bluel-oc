import { getCategories } from '../utils/api.js'
import { CategoryButton } from './CategoryButton.js'

export async function Categories() {
  const sectionCategories = document.querySelector('.categories')

  // Récupérer des catégories depuis l'API
  const categories = await getCategories()
  // Ajoute la catégorie Tous au début du tableau
  categories.unshift({
    id: 0,
    name: 'Tous',
  })

  // supprime les doublons dans les categories
  const uniqueCategories = new Set(categories)
  // Pour chaque categorie, on créé un élément bouton et on l'ajoute à la section categories
  uniqueCategories.forEach((category) => {
    const buttonEl = CategoryButton(category.id, category.name)
    sectionCategories.appendChild(buttonEl)
  })
}
