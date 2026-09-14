import ResourcePage from './ResourcePage.jsx'
import { normalizeCollection } from '../api.js'

const teamsApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : '/api/teams/'

function loadTeams() {
  return fetch(teamsApiUrl).then((response) => {
    if (!response.ok) throw new Error(`Unable to load teams (${response.status})`)
    return response.json()
  }).then(normalizeCollection)
}

export default function Teams() {
  return <ResourcePage load={loadTeams} resource="teams" title="Teams" description="Find your crew and keep each other moving." />
}