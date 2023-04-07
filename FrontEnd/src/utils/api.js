const API_HOST = 'http://localhost:5678/api'

export async function getWorks() {
  try {
    const response = await fetch(`${API_HOST}/works`, {
      method: 'GET',
    })
    if (!response.ok) throw `Impossible de charger les travaux`

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
    if (!response.ok) throw `Impossible de charger les catégories`
    return response.json()
  } catch (error) {
    console.error(error)
    return []
  }
}
