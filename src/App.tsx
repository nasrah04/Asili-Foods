import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Footer from "./components/footer";


function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <Navbar />  
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

    <Footer />

      </div>
    </>
  );
}
export default App;