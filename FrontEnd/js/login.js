if (localStorage.getItem('api-token')) window.location.replace('index.html')

const formElt = document.querySelector('form')

formElt.addEventListener('submit', async (event) => {
  event.preventDefault()

  const data = new FormData(formElt)

  const response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()

  if (!response.ok) {
    const errorSpanEl = document.querySelector('#error-login')
    errorSpanEl.style.display = 'block'
    errorSpanEl.textContent = 'Adresse email et/ou mot de passe incorrect'
  } else {
    localStorage.setItem('api-token', result.token)
    window.location.replace('index.html')
  }

  return false
})
