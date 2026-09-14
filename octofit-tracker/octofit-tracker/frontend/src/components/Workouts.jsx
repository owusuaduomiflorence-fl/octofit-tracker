import ResourcePage from './ResourcePage.jsx'

export default function Workouts() {
  return <ResourcePage endpoint="/api/workouts/" resource="workouts" title="Workouts" description="Choose a session that fits today." />
}