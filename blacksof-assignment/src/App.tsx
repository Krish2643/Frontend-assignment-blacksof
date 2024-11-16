import './App.css'
import Ecosystem from './Components/Ecosystem'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import PlatformAssist from './Components/PlatformAssist'
import Products from './Components/Products'

function App() {
 

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ecosystem />
      <Products />
      <PlatformAssist />
      <Footer />
    </div>
  )
}

export default App
