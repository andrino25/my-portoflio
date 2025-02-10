import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Navbar from "./pages/NavBar";
import Resume from "./pages/Resume";
import Loader from "./pages/Loader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.title = "Average Portfolio";

    setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => {
        setLoading(false); 
      }, 500); 
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
          <Loader />
        </div>
      ) : (
        <Router>
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
        </Router>
      )}
    </div>
  );
}

export default App;
