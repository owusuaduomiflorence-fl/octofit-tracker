import ResourcePage from './ResourcePage.jsx'
import { normalizeCollection } from '../api.js'

const leaderboardApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : '/api/leaderboard/'

function loadLeaderboard() {
  return fetch(leaderboardApiUrl).then((response) => {
    if (!response.ok) throw new Error(`Unable to load leaderboard (${response.status})`)
    return response.json()
  }).then(normalizeCollection)
}

export default function Leaderboard() {
  return <ResourcePage load={loadLeaderboard} resource="leaderboard" title="Leaderboard" description="See the momentum across Octofit." />
}