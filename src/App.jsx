import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tea from './pages/Tea'
import Destinations from './pages/Destinations'
import Experiences from './pages/Experiences'
import Booking from './pages/Booking'

function NotFound() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </main>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App