import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import imageSrc from '../../assets/redes (1).png';

function GreetingSection({ id }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const delay = index * 0.2;
          target.style.animationDelay = `${delay}s`;
          target.classList.add('slide-in-left-to-right');
        }
      });
    }, { threshold: 0.1 });

    const nodes = currentRef ? currentRef.querySelectorAll('.animate') : [];
    nodes.forEach((node) => observer.observe(node));

    return () => nodes.forEach((node) => observer.unobserve(node));
  }, []);

  const iconBoxStyle = {
    width: { xs: 50, md: 60 },
    height: { xs: 50, md: 60 },
    borderRadius: '20%',
    margin: '10px',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  };

  const iconLinkStyle = {
    color: '#333',
  };

  const boxStyle = {
    padding: '2rem',
    marginTop: '4%',
  };

  const textStyle = {
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'primary.main',

  };

  return (

    <Box id={id} ref={sectionRef} sx={{ ...boxStyle, position: 'relative', overflow: 'hidden' }}>
      {/* Texto en movimiento */}
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          md={2}
          order={{ xs: 2, md: 1 }}
          sx={{
            display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: 'center', justifyContent: 'center',
          }}
        >

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
            <a href="https://medium.com/@ricardomartinezvet" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} aria-label="Medium"><FontAwesomeIcon icon={faMedium} size="2x" /></a>
          </Box>

        </Grid>
        <Grid item xs={12} md={10} order={{ xs: 1, md: 2 }} textAlign="left">
          <Typography variant="h4" component="h1" sx={textStyle} gutterBottom className="animate">
            Hey There.
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom className="animate" sx={{ ...textStyle, color: 'primary.main' }}>
            I’m Ricardo.
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom className="animate">
            I&apos;m a Software Developer
          </Typography>
          <Typography paragraph className="animate">
            I can help you build a product, feature
            <br />
            or website. Look through some of my
            <br />
            work and experience! If you like what you
            <br />
            see and have a project you need coded,
            <br />
            don’t hesitate to contact me.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 3, md: 3 }}
          sx={{
            display: 'flex', justifyContent: 'center', position: { md: 'absolute' }, right: { md: 200 }, top: { md: 0 },
          }}
        >
          <img src={imageSrc} alt="Descripción de la imagen" style={{ maxWidth: '70%', maxHeight: '100vh', objectFit: 'contain' }} />
        </Grid>
      </Grid>

    </Box>

  );
}

GreetingSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default GreetingSection;
