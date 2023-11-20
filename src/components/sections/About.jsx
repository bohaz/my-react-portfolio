import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import Checkbox from '@mui/icons-material/CheckBox';

function About({ id }) {
  const resumeLink = 'https://drive.google.com/file/d/1qHPA9AZ4Dv35ZJaH3WvkQZ7wLK2IDwuF/view?usp=sharing';
  
  const variants = {
    visible: i => ({
      opacity: 1,
      translateY: 0,
      transition: {
        delay: i * 0.3, 
      },
    }),
    hidden: { opacity: 0, translateY: 100 },
  };

  const skills = [
    'Database Management',
    'Version Control',
    'CLI',
    'API Design',
    'Web Development'
  ];


  const iconBoxStyle = {
    width: 60,
    height: 60,
    borderRadius: '20%',
    margin: '10px',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)',
    transition: 'transform 0.3s ease-in-out', 

    '&:hover': {
      transform: 'scale(1.2)', 
    },
  };

  const skillIcons = [
    { src: 'https://skillicons.dev/icons?i=js', alt: 'JavaScript' },
    { src: 'https://skillicons.dev/icons?i=html', alt: 'HTML' },
    { src: 'https://skillicons.dev/icons?i=css', alt: 'CSS' },
    { src: 'https://skillicons.dev/icons?i=react', alt: 'React' },
    { src: 'https://skillicons.dev/icons?i=redux', alt: 'Redux' },
    { src: 'https://skillicons.dev/icons?i=jest', alt: 'Jest' },
    { src: 'https://skillicons.dev/icons?i=sass', alt: 'Sass' },
    { src: 'https://skillicons.dev/icons?i=ruby', alt: 'Ruby' },
    { src: 'https://skillicons.dev/icons?i=git', alt: 'Git' },
    { src: 'https://skillicons.dev/icons?i=bootstrap', alt: 'Bootstrap' },
    { src: 'https://skillicons.dev/icons?i=github', alt: 'GitHub' },
    { src: 'https://skillicons.dev/icons?i=webpack', alt: 'Webpack' },
    { src: 'https://skillicons.dev/icons?i=figma', alt: 'Figma' },
    { src: 'https://skillicons.dev/icons?i=rails', alt: 'Rails' },
  ];

  return (
   
    <Box id={id} sx={{ p: 4, justifyContent: 'center', alignItems: 'center', paddingTop: '10%', pb: '5%' }}>
    <Grid container spacing={4} justifyContent="center">
      {/* About Me Section */}
      <Grid item xs={12} md={4}>
        <motion.div initial="hidden" whileInView="visible" custom={0} variants={variants}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }} >
            About Me
          </Typography>
          <Typography variant="h6" component="p" gutterBottom textAlign="center">
            Hello I’m a software developer! I can help you build a product, feature or website.
            Look through some of my work and experience! If you like what you see and have a project
            you need coded, don’t hesitate to contact me.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" color="primary" href={resumeLink} target="_blank" sx={{
              textAlign: 'center', padding: '10px', fontWeight: 'bold', width: '50%', borderRadius: '20px',
              '&:hover': { backgroundColor: 'white', color: 'primary.main' }
            }}>
              Get My Resume
            </Button>
          </Box>
        </motion.div>
      </Grid>

        {/* My Stack Section */}
        <Grid item xs={12} md={4}>
          <motion.div initial="hidden" whileInView="visible" custom={1} variants={variants}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }} >
            My Stack
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {skillIcons.map((icon, index) => (
              <Box key={index} sx={iconBoxStyle}>
                <img src={icon.src} alt={icon.alt} style={{ width: '100%', height: '100%' }} />
              </Box>
              
            ))}
          </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
          <motion.div initial="hidden" whileInView="visible" custom={2} variants={variants}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }} >
            My Skills
          </Typography>
          <Typography variant="h6" component="p" gutterBottom textAlign="left">
          <Grid container spacing={2} sx={{ mt: 2 }}>
          {skills.map((skill, index) => (
            <Grid item xs={6} key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="subtitle1">{skill}</Typography>
            </Grid>
          ))}
        </Grid>
          </Typography>
          </motion.div>
        </Grid>
        <Box sx={{ mt: 4, width: '40%', height: '2px', backgroundColor: 'primary.main', marginTop: '10%'}}>

        </Box>
      </Grid>
    </Box>
 
  );
}

export default About;
