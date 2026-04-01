
import './App.css'
import Heading from './Heading/Heading'
import NavBar from './NavBar/NavBar'
import Rating from './Rating/Rating'

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
    </main>
    </>

  )
}

export default App
