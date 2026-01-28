import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import NotFound from "./pages/NotFound"






function App() {
  

  return (
    <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
