import { getLoginToken } from '../utils/api.js'

if (localStorage.getItem('api-token')) window.location.replace('index.html')

const formElt = document.querySelector('form')

formElt.addEventListener('submit', async (event) => {
  event.preventDefault()

  const data = new FormData(formElt)

  const result = await getLoginToken({
    email: data.get('email'),
    password: data.get('password'),
  })

  if (!result?.token) {
    const errorSpanEl = document.querySelector('#error-login')
    errorSpanEl.style.display = 'block'
    errorSpanEl.textContent = 'Adresse email et/ou mot de passe incorrect'
  } else {
    localStorage.setItem('api-token', result.token)
    window.location.replace('index.html')
  }

  return false
})
