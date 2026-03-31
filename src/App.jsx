
import './App.css'
import Heading from './Heading/Heading'
import NavBar from './NavBar/NavBar'

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
    </>
  )
}

export default App
