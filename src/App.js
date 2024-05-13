import Navbar from './js/navbar';
import Home from './js/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './js/Contact';
import Footer from './js/Footer';
import Servis from './js/servis';
import MoreAbout from './js/moreAbout';
import { motion, Variants } from "framer-motion";


function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <Servis />
        <MoreAbout />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

