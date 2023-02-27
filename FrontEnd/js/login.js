const formElt = document.querySelector('form')

formElt.addEventListener('submit', async (event) => {
  event.preventDefault()

  const data = new FormData(formElt)

  console.log({
    email: data.get('email'),
    password: data.get('password'),
  })

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
  console.log(result)

  if (!response.ok) {
    console.log(result.message)
  }

  // window.location.replace('/')

  return false
})
