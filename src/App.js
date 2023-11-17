import React from 'react';
import './App.css';
import Header from './components/sections/Header';
import { ThemeProvider } from './components/dark-mode/ThemeContext'; 
import GreetingSection from './components/sections/GreetingSection';
import ProjectsCarousel from './components/ProjectsCarousel';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Box
        sx={{
          overflowY: 'scroll',
          height: '100vh',
          width: '100vw',
          scrollSnapType: 'y mandatory'
        }}
      >
        <GreetingSection id="greetings" />
        <ProjectsCarousel id="projects" />
        <About id="about" />
        <Contact id="contact" />
      </Box>
    </ThemeProvider>
  );
}

export default App;