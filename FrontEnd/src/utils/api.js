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

export async function createWork(body) {
  try {
    const token = localStorage.getItem('api-token')
    const response = await fetch(`${API_HOST}/works`, {
      method: 'POST',
      body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) throw API_CONNECTION_ERROR

    return response.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function deleteWork(id) {
  try {
    const token = localStorage.getItem('api-token')
    const response = await fetch(`${API_HOST}/works/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!response.ok) throw API_CONNECTION_ERROR

    return response.status
  } catch (error) {
    console.error(error)
    return 500
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
