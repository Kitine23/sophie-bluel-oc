export async function getWorks() {
  const response = await fetch('http://localhost:5678/api/works', {
    method: 'GET',
  })
  return response.json()
}

export async function getCategories() {
  const response = await fetch('http://localhost:5678/api/categories', {
    method: 'GET',
  })
  return response.json()
}

export async function deleteWorks(id) {
  const response = await fetch(`http://localhost:5678/api/works/${id}`, {
    method: 'DELETE',
  })
  return response.json()
}
