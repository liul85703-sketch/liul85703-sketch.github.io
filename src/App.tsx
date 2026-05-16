import { Navigate, Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import WorksPage from './pages/Works'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
