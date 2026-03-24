import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import NotFound from "./pages/NotFound"
import Review from "./pages/Review"
import { Toaster } from "react-hot-toast"
import Payment from "./pages/Payment"






function App() {
  

  return (
    <>
        <NavBar/>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: "#696969",
              color: "#fff",
              borderRadius: "10px"

            }
          }}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
