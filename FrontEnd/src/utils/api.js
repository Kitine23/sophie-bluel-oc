const API_HOST = 'http://localhost:5678/api'
const API_CONNECTION_ERROR = 'API error'

export async function getWorks() {
  try {
    const response = await fetch(`${API_HOST}/works`, {
      method: 'GET',
    })
    if (!response.ok) throw API_CONNECTION_ERROR

    return response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${API_HOST}/categories`, {
      method: 'GET',
    })
    if (!response.ok) throw API_CONNECTION_ERROR

    return response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getLoginToken(data) {
  try {
    const response = await fetch(`${API_HOST}/users/login`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) throw API_CONNECTION_ERROR

    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}
