
import React, { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Navbar from './pages/NavBar';
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router> 
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
    
);
};
export default App
