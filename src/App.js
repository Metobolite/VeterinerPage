import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './js/navbar';
import Home from './js/Home';
import Contact from './js/Contact';
import Footer from './js/Footer';
import Servis from './js/servis';
import MoreAbout from './js/moreAbout';
import IndirimUrun from './js/indirimUrun';
import Login from './js/Login';
import PrivateRoute from './js/components/PrivateRoute';
import AnaUrun from './js/AnaUrun';
import VetCare from './js/VetCare';
import Appointment from './js/Appointment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route 
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route
          path="/add-card"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <IndirimUrun />
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Home />
              <Servis />
              <AnaUrun />
              <VetCare />
              <div className="">
                <MoreAbout />
                <Appointment />
              </div>
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
