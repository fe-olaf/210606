export async function fetchFriends() {
  const response = await fetch('http://localhost:3333/friends')

  return response.ok ? response.json() : []
}
