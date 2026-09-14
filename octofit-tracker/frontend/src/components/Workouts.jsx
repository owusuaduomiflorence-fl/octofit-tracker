import ResourcePage from './ResourcePage.jsx'
import { normalizeCollection } from '../api.js'

const workoutsApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : '/api/workouts/'

function loadWorkouts() {
  return fetch(workoutsApiUrl).then((response) => {
    if (!response.ok) throw new Error(`Unable to load workouts (${response.status})`)
    return response.json()
  }).then(normalizeCollection)
}

export default function Workouts() {
  return <ResourcePage load={loadWorkouts} resource="workouts" title="Workouts" description="Choose a session that fits today." />
}