import { Categories } from '../components/categories/Categories.js'
import { EditionMode } from '../components/edition/EditionMode.js'
import { WorksGallery } from '../components/works/WorksGallery.js'

function main() {
  // Ajoute les projets à la page
  WorksGallery()
  // Ajoute les categories
  Categories()
  // Ajoute le mode édition
  EditionMode()
}

main()
