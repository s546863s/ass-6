
import './App.css'
import ButtonWeb from './ButtonWeb/ButtonWeb'
import Heading from './Heading/Heading'
import NavBar from './NavBar/NavBar'
import Rating from './Rating/Rating'
import Steps from './Stpes/Stpes'
import WebHeading from './WebHeading/WebHeading'

function App() {


  return (
    <>
    <header className="max-w-6xl mx-auto">
      <nav className='fixed top-0 left-0 right-0 z-50'>
        <NavBar></NavBar>
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
        <div className="flex justify-center my-4"> 
          <ButtonWeb></ButtonWeb>
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
    </main>
    </>

  )
}

export default App
