import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import MobileMenu from '../sections/MobileMenu';
import logoImage from '../../assets/letra-r.png';
import WhatsAppButton from '../whatsappButton/WhatsAppButton';

export default function PortfolioAppBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: 'linear-gradient(45deg, #007bff 30%, #0056b3 90%)' }}>
        <Toolbar>
          <MobileMenu />
          <Box
            component="img"
            src={logoImage}
            alt="Ricardo Dev"
            sx={{
              height: { md: '60px', xs: '40px' },
              ml: { xs: 'auto', md: 9 },
              display: { xs: 'block', md: 'block' },
            }}
          />

          <Box sx={{
            display: { xs: 'none', md: 'flex' }, alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end',
          }}
          >
            <Button onClick={() => scrollToSection('home')} color="inherit" startIcon={<HomeIcon />} sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', '&:hover': { transform: 'scale(1.1)' } }}>Home</Button>
            <Button href="#projects" color="inherit" startIcon={<WorkOutlineIcon />} sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', '&:hover': { transform: 'scale(1.1)' } }}>Portfolio</Button>
            <Button href="#about" color="inherit" startIcon={<PersonIcon />} sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', '&:hover': { transform: 'scale(1.1)' } }}>About</Button>
            <Button href="#contact" color="inherit" startIcon={<MailOutlineIcon />} sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', '&:hover': { transform: 'scale(1.1)' } }}>Contact</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <WhatsAppButton />
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
