import { lazy, Suspense } from "react"
import { useTranslation } from "react-i18next"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar/NavBar"
import { Toaster } from "react-hot-toast"


const Home = lazy(() => import("./pages/Home"))
const Services = lazy(() => import("./pages/Services"))
const Contacts = lazy(() => import("./pages/Contacts"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Review = lazy(() => import("./pages/Review"))
const Payment = lazy(() => import("./pages/Payment"))
const Admin = lazy(() => import("./components/Admin/Admin"))

function App() {
  
  const { t } = useTranslation();

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
        <Suspense fallback={<div>{t('loading')}...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/review" element={<Review />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </Suspense>
    </>
  )
}

export default App
