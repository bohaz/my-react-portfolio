import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import { ThemeProvider } from './components/ThemeContext'; 
import GreetingSection from './components/GreetingSection';
import ProjectsCarousel from './components/ProjectsCarousel';


function App() {
  return (
    <ThemeProvider>
    <Router>
      <Header />
      <GreetingSection />
      <ProjectsCarousel />
      <Routes>
        <Route path="/about" element={<About />} />
        {/* Define otras rutas utilizando el atributo `element` */}
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;