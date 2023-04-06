const API_HOST = 'http://localhost:5678/api'

export async function getWorks() {
  const response = await fetch(`${API_HOST}/works`, {
    method: 'GET',
  })
  if (!response.ok()) return []

  return response.json()
}

export async function createWork(body) {
  const token = localStorage.getItem('api-token')
  const response = await fetch(`${API_HOST}/works`, {
    method: 'POST',
    body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok()) return null

  return response.json()
}

export async function getCategories() {
  const response = await fetch(`${API_HOST}/categories`, {
    method: 'GET',
  })
  if (!response.ok()) return []
  return response.json()
}

export async function deleteWork(id) {
  const token = localStorage.getItem('api-token')
  const response = await fetch(`${API_HOST}/works/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok()) return null

  return response.status
}

export async function getLoginToken(data) {
  const response = await fetch(`${API_HOST}/users/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok()) return null
  return response.json()
}
