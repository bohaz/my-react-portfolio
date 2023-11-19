import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function About({ id }) {
  const resumeLink = 'https://drive.google.com/file/d/1qHPA9AZ4Dv35ZJaH3WvkQZ7wLK2IDwuF/view?usp=sharing';
  

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
   
    <Box id={id} sx={{ p: 4, minHeight: '100vh', justifyContent: 'center', 
    alignItems: 'center', paddingTop: '10%' }}>
      <Grid container spacing={2}>
        {/* About Me Section */}
        <Grid item xs={12} md={6} sx={{ borderRight: 1, borderColor: 'grey.300' }}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }} >
            About Me
          </Typography>
          <Typography variant="h6" component="p" gutterBottom textAlign="center">
            Hello I’m a software developer! I can help
            you build a product, feature or website
            Look through some of my work and
            experience! If you like what you see and
            have a project you need coded, don’t
            hesitate to contact me.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 2 }}>
            
          <Button 
  sx={{
    textAlign: 'center',
    padding: '10px',
    fontWeight: 'bold',
    width: '50%', 
    margin: '0 auto', 
    display: 'block', 
    backgroundColor: 'primary.main', 
    color: 'white',
    borderRadius: '20px',
    '&:hover': {
      backgroundColor: 'white', 
      color: 'primary.main', 
     
    },
  }}
  variant="contained" 
  color="primary" 
  href={resumeLink} 
  target="_blank"
>
  Get My Resume
</Button>

          </Box>
        </Grid>

        {/* My Stack Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }} >
            My Stack
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {skillIcons.map((icon, index) => (
              <Box key={index} sx={iconBoxStyle}>
                <img src={icon.src} alt={icon.alt} style={{ width: '100%', height: '100%' }} />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
 
  );
}

export default About;
