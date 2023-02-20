export async function getWorks() {
  let response = await fetch('http://localhost:5678/api/works', {
    method: 'GET',
  })
  return response.json()
}
