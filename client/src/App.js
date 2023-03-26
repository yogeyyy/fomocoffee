import './App.css';
import Navbar from './components/header/Navbar'
import Home from './components/home/Home'
import About from './components/home/About'
import Types from './components/home/Types'
import Shopping from './components/Shop/Shopping'
import Customize from './components/experience/Customize'
import Photos from './components/experience/Photos'
import Testimonials from './components/experience/Testimonials'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Types />
    <Shopping />
    <Customize />
    <Photos />
    <Testimonials />
    <Footer />
    </>
  );
}

export default App;
