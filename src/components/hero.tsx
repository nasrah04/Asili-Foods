import {Link} from 'react-router-dom'
import back from '../assets/asili.jpeg'

const Hero = () => {
  return (
  
    <section style={{ backgroundImage: `url(${back})` }} className=" relative bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center pt-20">
    <div className='absolute inset-0 bg-black/40'></div>
    <div className="relative z-10">
    

   <div className="max-w-2xl  text-left">
    <h1 className='text-white font-bold px-4 py-2 text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight '> Authentic Tanzanian Flavors</h1>
    <p className=" bg-black/50 backdrop-blur-sm p-6   text-lg text-white mt-4 leading-relaxed">
        Asili Foods Tanzania is dedicated to bringing the authentic taste of Tanzania to every table. 
      We believe that food is more than just a meal, it is a celebration of culture, tradition, and community. 
      Our menu is carefully crafted using fresh, locally sourced ingredients to create delicious dishes that reflect the rich culinary heritage of Tanzania. 
          </p>
   </div>
  
   <div className="flex flex-wrap gap-4 mt-6 justify-center">
      <Link to="/menu">
      <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition duration-300">
        Explore Menu
      </button>
      </Link>
      
    <Link to ="/contact">
      <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 hover:text-white transition duration-300">
        Order Now
      </button>
      </Link>
    </div>
  
    </div>
</section>


    
  )
}

export default Hero
