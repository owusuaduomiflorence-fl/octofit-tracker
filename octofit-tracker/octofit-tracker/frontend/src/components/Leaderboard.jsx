import ResourcePage from './ResourcePage.jsx'

export default function Leaderboard() {
  return <ResourcePage endpoint="/api/leaderboard/" resource="leaderboard" title="Leaderboard" description="See the momentum across Octofit." />
}