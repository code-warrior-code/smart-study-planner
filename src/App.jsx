import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import CheckIn from './pages/CheckIn'
import Dashboard from './pages/Dashboard'
import Health from './pages/Health'

function App() {
  return (
    <BrowserRouter>
      <main className="py-8">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
