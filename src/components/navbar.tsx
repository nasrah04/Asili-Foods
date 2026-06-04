import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
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

    <div className="flex items-center gap-4">
      <Link to="/" className=' text-orange-600 px-3 py-1 rounded-full hover:bg-orange-700 hover:text-white '>
        Home
      </Link>
      
       <Link to="/Menu" className='text-orange-600 px-3 py-1 rounded-full   hover:bg-orange-700 hover:text-white'>
        Menu
      </Link>


      <Link to="/About" className=' text-orange-600 px-3 py-1 rounded-full  hover:bg-orange-700 hover:text-white'>
        About
      </Link>

      <Link to="/Contact" className='text-orange-600 px-3 py-1 rounded-full   hover:bg-orange-700 hover:text-white'>
        Contact
      </Link>
    </div>

      </nav>
  )
}

export default Navbar;
