import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import imageSrc from '../../assets/Development.png';

function GreetingSection({ id }) {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
    },
  };

  const iconBoxStyle = {
    width: { xs: 40, md: 50 },
    height: { xs: 40, md: 50 },
    borderRadius: '20%',
    margin: '10px',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  };

  const iconLinkStyle = {
    color: '#333',
  };

  const boxStyle = {
    pl: { xs: 1, md: 4 },
    pr: { xs: 1, md: 4 },
    paddingTop: '4%',
    paddingBottom: '10%',
  };

  const textBoxStyle = {
    p: 2,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
  };

  const textStyle = {
    fontWeight: '700',
    color: '#104579',
    fontFamily: 'Poppins, sans-serif',
  };

  return (

    <Box
      id={id}
      sx={{
        ...boxStyle, position: 'relative', overflow: 'hidden', backgroundColor: '#f0f0f0',
      }}
    >
      <Box sx={textBoxStyle}>
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
            <motion.div initial="hidden" whileInView="visible" variants={textAnimation}>
              <Typography variant="h4" component="h1" sx={textStyle} gutterBottom className="animate">
                Hey There.
                <br />
                I’m Ricardo.
              </Typography>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={textAnimation}>
              <Typography variant="h5" component="h3" gutterBottom className="animate" sx={{ color: '#f0bc02' }}>
                I&apos;m a Software Developer
              </Typography>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={textAnimation}>
              <Typography paragraph className="animate" sx={{ color: '#104579' }}>
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
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 3, md: 3 }}
            sx={{
              display: 'flex', justifyContent: 'center', position: { md: 'absolute' }, right: { md: 200 }, top: { md: 63 },
            }}
          >
            <motion.img
              src={imageSrc}
              alt="Descripción de la imagen"
              style={{ maxWidth: '70%', maxHeight: '100vh', objectFit: 'contain' }}
              animate={rotateAnimation}
            />

          </Grid>
        </Grid>
      </Box>
      {/* Texto en movimiento */}

    </Box>

  );
}

GreetingSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default GreetingSection;
