import ResourcePage from './ResourcePage.jsx'
import { normalizeCollection } from '../api.js'

const activitiesApiUrl = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : '/api/activities/'

function loadActivities() {
  return fetch(activitiesApiUrl).then((response) => {
    if (!response.ok) throw new Error(`Unable to load activities (${response.status})`)
    return response.json()
  }).then(normalizeCollection)
}

export default function Activities() {
  return <ResourcePage load={loadActivities} resource="activities" title="Activities" description="A clear record of every effort." />
}