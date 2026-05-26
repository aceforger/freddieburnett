import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import BookDetail from './components/BookDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] font-montserrat">
      <Navbar />
      <Hero />
      <About />
      <BookDetail />
      <Contact />
      <Footer />
    </div>
  )
}

export default App