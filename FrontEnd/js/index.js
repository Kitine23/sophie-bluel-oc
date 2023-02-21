import { getWorks } from './api.js'
import { createWorkElement } from './dom.js'

//Récupération de l'élément du DOM qui accueillera les travaux de la galerie
const sectionGallery = document.querySelector('.gallery')

//Récupérer les travaux depuis l'API
getWorks().then((works) => {
  // Pour chaque travail, ajouter les données au DOM
  works.forEach((work) => {
    //Création d'une balise dédiée à un travail
    const workElement = createWorkElement(work.imageUrl, work.title)
    //Ajout de la balise figure à la gallerie
    sectionGallery.appendChild(workElement)
  })
})