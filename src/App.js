import React from 'react';
import './App.css';
import Toolbar from '@mui/material/Toolbar';
import Header from './components/sections/Header';
import { ThemeProvider } from './components/dark-mode/ThemeContext';
import GreetingSection from './components/sections/GreetingSection';
import ProjectsCarousel from './components/ProjectsCarousel';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <ThemeProvider>

      <Header />
      <Toolbar />
      <GreetingSection id="home" />
      <ProjectsCarousel id="projects" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />

    </ThemeProvider>
  );
}

export default App;
