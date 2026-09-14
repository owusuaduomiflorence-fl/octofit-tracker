import ResourcePage from './ResourcePage.jsx'
import { normalizeCollection } from '../api.js'

const usersApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : '/api/users/'

function loadUsers() {
  return fetch(usersApiUrl).then((response) => {
    if (!response.ok) throw new Error(`Unable to load users (${response.status})`)
    return response.json()
  }).then(normalizeCollection)
}

export default function Users() {
  return <ResourcePage load={loadUsers} resource="users" title="Users" description="Your community, collected in one place." />
}