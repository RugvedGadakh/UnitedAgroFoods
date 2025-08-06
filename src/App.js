import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./pages/Products"
import AboutUs from "./pages/AboutUs"
import Brands from "./pages/Brands"
import ContactUs from "./pages/ContactUs"
import OurClients from "./pages/OurClients"
import ProductDetail from "./pages/ProductDetail" // Import the new ProductDetail component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F9F9F6] font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} /> {/* New route for product details */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/clients" element={<OurClients />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
