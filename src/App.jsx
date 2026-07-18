import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
});
}, []);

  return <div>
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Contact />
    <Footer />
  </div>
}

export default App;


