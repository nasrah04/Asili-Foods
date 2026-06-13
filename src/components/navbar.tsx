import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useCart();

  return (
 <nav className="fixed top-0 left-0 w-full bg-white/90 shadow-md z-50 flex items-center justify-between px-6 py-3">

    
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full"
        />

        <span className="text-1xl font-bold text-orange-700">
          Asili Foods Tanzania
        </span>
      </div>

{/* Desktop Menu */}
<div className="hidden md:flex items-center gap-4">
  <Link to="/" className="text-orange-600 px-3 py-1 rounded-full hover:bg-orange-700 hover:text-white">
    Home
  </Link>

  <Link to="/menu" className="text-orange-600 px-3 py-1 rounded-full hover:bg-orange-700 hover:text-white">
    Menu
  </Link>

  <Link to="/about" className="text-orange-600 px-3 py-1 rounded-full hover:bg-orange-700 hover:text-white">
    About
  </Link>

  <Link to="/contact" className="text-orange-600 px-3 py-1 rounded-full hover:bg-orange-700 hover:text-white">
    Contact
  </Link>

  <Link to="/cart" className='text-orange-500 hover:bg-orange-700 hover:text-white rounded-full px-5 py-1'>
  Cart ({cartItems.length})
</Link>
</div>

{/* Mobile Button */}
<button
  className="md:hidden text-2xl text-orange-700"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <FaTimes /> : <FaBars />}
</button>

{isOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
    <div className="flex flex-col p-4 gap-4">

      <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-orange-800">
        Home
      </Link>

      <Link to="/menu" onClick={() => setIsOpen(false)} className="hover:text-orange-800">
        Menu
      </Link>

      <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-orange-800">
        About
      </Link>

      <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange-800">
        Contact
      </Link>
      
      <Link to="/cart" className='text-orange-500 hover:bg-orange-700 hover:text-white rounded-full px-5 py-1'>
  Cart ({cartItems.length})
</Link>

    </div>
  </div>
)}
      </nav>
  )
}

export default Navbar;
