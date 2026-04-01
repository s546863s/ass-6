
import { useEffect, useState } from 'react'
import './App.css'
import ButtonWeb from './ButtonWeb/ButtonWeb'
import Heading from './Heading/Heading'
import NavBar from './NavBar/NavBar'
import Rating from './Rating/Rating'
import SimplePricing from './SimplePricing/SimplePricing'
import Steps from './Stpes/Stpes'
import WebHeading from './WebHeading/WebHeading'
import Footer from './Footer/Footer'

function App() {
  

   const [products, setProducts] = useState([]);
   const [cartProducts, setCartProducts] = useState([])
  
   useEffect(() => {
     fetch("/data/products.json")
       .then((res) => res.json())
       .then((data) => setProducts(data));
   }, []);

// cart product added function 


  //  cart button click handler here

 const handleAddToCart = (product) => {
  setCartProducts(prev => [...prev, product]);
};

// cart product Removed function 
const handleRemoveFromCart = (id) => {
  setCartProducts(prev => prev.filter(item => item.id !== id));
};


// All clear cart function
const handleClearCart = () => {
  setCartProducts([]);
};


  return (
    <>
    <header className="max-w-6xl mx-auto">
      <nav className='fixed top-0 left-0 right-0 z-50'>
        <NavBar cartProducts={cartProducts} ></NavBar>
      </nav>
      <section>
        <Heading></Heading>
      </section>
    </header>
    <main>
      <section className="bg-[#4F39f6] min-h-6">
        <div className="max-w-6xl mx-auto">
          <Rating></Rating>
        </div>
      </section>

      {/* Premium Digital Tools section here */}
      <section>
        <div className="max-w-6xl mx-auto text-center py-12 md:w-1/2">
          <WebHeading title="Premium Digital Tools" description="Choose from our curated collection of premium digital products designed to boost your productivity and creativity." />
        </div>
        <div>
          <div className="max-w-6xl mx-auto">
   <ButtonWeb 
  products={products} 
  handleAddToCart={handleAddToCart}
  cartProducts={cartProducts}
  handleRemoveFromCart={handleRemoveFromCart}
  handleClearCart={handleClearCart}
/>

          </div>
        </div>
           
      </section>
      {/* Get Started in 3 Steps section Here */}
      <section>
        <div className="max-w-6xl mx-auto text-center py-12 md:w-1/2">
          <WebHeading title="Get Started in 3 Steps" description="Start using premium digital tools in minutes, not hours." />
        </div>
      <div className='max-w-6xl mx-auto'>
        <Steps></Steps> 
      </div>
      </section>

      {/* Simple, Transparent Pricing */}
      <section>
        <div className="max-w-6xl mx-auto text-center py-12 md:w-1/2">
          <WebHeading title="Simple, Transparent Pricing" description="Choose the plan that fits your needs. Upgrade or downgrade anytime." />
        </div>

        <div className='max-w-6xl mx-auto'>
          <SimplePricing></SimplePricing>
        </div>        
        
      </section>

    </main>

    <footer>
      <Footer></Footer>
    </footer>
    </>

  )
}

export default App
