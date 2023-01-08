import Home from "./components/Home/Home"
import Galerie from "./components/Galerie/Galerie"
import Evenements from "./components/Events/Events"
import Admin from "./components/Admin/Admin"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galerie" element={<Galerie />} />
      <Route path="/evenements" element={<Evenements />} />
      <Route path="/evenements/:name" element={<Evenements />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App
