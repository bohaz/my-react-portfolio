import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


function GreetingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 0.2; 
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('slide-in-left-to-right');
        }
      });
    }, { threshold: 0.1 });

    const nodes = currentRef ? currentRef.querySelectorAll('.animate') : [];
    nodes.forEach(node => observer.observe(node));

    return () => nodes.forEach(node => observer.unobserve(node));
  }, []);

  const iconBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: '5px',
    transition: 'transform 0.3s ease-in-out', 

    '&:hover': {
      transform: 'scale(1.2)', 
    },
  };

  const iconLinkStyle = {
    color: '#333', 
  }; 

  return (
    <Box 
    ref={sectionRef} 
    sx={{ 
      p: 4, 
      height: '100vh', 
      scrollSnapAlign: 'start' 
    }}
  >
<Box ref={sectionRef} sx={{ p: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={2} order={{ xs: 2, md: 1 }} sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: 'center', justifyContent: 'center' }}>
          
          <Box sx={iconBoxStyle}>
            <a href="https://www.linkedin.com/in/ricardomart%C3%ADnez%E2%88%B4/" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" style={{ width: '100%', height: '100%' }} />
            </a>
          </Box>
          <Box sx={iconBoxStyle}>
            <a href="https://github.com/bohaz" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=github" alt="Github" style={{ width: '100%', height: '100%' }} />
            </a>
          </Box>
          <Box sx={iconBoxStyle}>
            <a href="https://twitter.com/Ricardo29115571" target="_blank" rel="noopener noreferrer">
              <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter" style={{ width: '100%', height: '100%' }} />
            </a>
          </Box>
          <Box sx={iconBoxStyle}>
            <a href="https://medium.com/@ricardomartinezvet" target="_blank" rel="noopener noreferrer" style={iconLinkStyle}><FontAwesomeIcon icon={faMedium} size="2x" /></a>
          </Box>
        
        </Grid>
        <Grid item xs={12} md={10} order={{ xs: 1, md: 2 }} textAlign="left">
          <Typography variant="h4" component="h1" gutterBottom className="animate">
            Hey There.
          </Typography>
      <Typography variant="h5" component="h2" gutterBottom className="animate">
        I’m Ricardo.
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom className="animate">
        I'm a Software Developer
      </Typography>
      <Typography paragraph className="animate">
        I can help you build a product, feature<br />
        or website. Look through some of my<br />
        work and experience! If you like what you<br />
        see and have a project you need coded,<br />
        don’t hesitate to contact me.
      </Typography>
      </Grid>
      </Grid>

    </Box>
    </Box>
  );
}


export default GreetingSection;
