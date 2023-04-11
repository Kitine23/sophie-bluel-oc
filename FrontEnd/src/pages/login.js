import { getLoginToken } from '../utils/api.js'

// Si déjà connecté, redirige vers la page d'accueil
if (localStorage.getItem('api-token')) window.location.replace('index.html')

// Récupère le formulaire de login
const formElt = document.querySelector('form')

formElt.addEventListener('submit', async (event) => {
  // empêche le formulaire de recharger la page
  event.preventDefault()

  // récupère les données du form sous forme de Set
  const data = new FormData(formElt)

  // Obtenir le token d'authentification depuis l'API
  const result = await getLoginToken({
    email: data.get('email'),
    password: data.get('password'),
  })

  if (!result?.token) {
    const errorSpanEl = document.querySelector('#error-login')
    errorSpanEl.style.display = 'block'
    errorSpanEl.textContent = 'Erreur dans l’identifiant ou le mot de passe'
  } else {
    // Si le token existe, on le stocke dans le local storage
    localStorage.setItem('api-token', result.token)
    // retourne vers la page d'accueil
    window.location.replace('index.html')
  }

  return false
})
