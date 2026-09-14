import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  ['/', 'Overview'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Users'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <section className="welcome">
      <p className="eyebrow">OCTOFIT TRACKER</p>
      <h1>Move with intent.</h1>
      <p>Track the work, find your people, and see how your team is progressing.</p>
      <div className="quick-links">
        <NavLink to="/activities">Log activity</NavLink>
        <NavLink to="/workouts">Browse workouts</NavLink>
      </div>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <NavLink className="brand" to="/">Octofit<span>_</span></NavLink>
          <nav aria-label="Primary navigation">
            {navigation.map(([path, label]) => (
              <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>
            ))}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
