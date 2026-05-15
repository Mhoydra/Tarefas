import { Routes, Route } from 'react-router-dom'

import LandingPage from './componentes/ladingPage/LandingPage'
import LoginForms from './componentes/login/LoginForms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForms />} />
    </Routes>
  )
}

export default App