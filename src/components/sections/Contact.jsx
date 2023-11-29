import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Typography, TextField, Button, Grid,
} from '@mui/material';

function Contact({ id }) {
  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: { xs: '19%', md: '10%' },
        pb: '5%',
        backgroundColor: '#d0d0d0',
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', md: '70%' }, // Ajusta el ancho del formulario
          backgroundColor: '#fff', // Color de fondo del formulario
          padding: '2rem', // Espaciado interno
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Sombra para darle profundidad
          borderRadius: '15px', // Bordes redondeados
        }}
      >
        <Typography
          variant="h4"
          component="p"
          gutterBottom
          textAlign="center"
          sx={{
            mb: 2,
            fontWeight: '700',
            color: '#333',
            fontSize: { xs: 'h6.fontSize', md: 'h4.fontSize' },
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <i className="fa-solid fa-envelope" />
          {' '}
          Contact Me
        </Typography>
        <Typography
          sx={{
            mb: 4, // Espacio debajo del subtítulo
            textAlign: 'center',
            color: 'text.secondary',
          }}
        >
          I&apos;m always interested in hearing about new projects,
          so if you&apos;d like to chat please get in touch.
        </Typography>
        <form action="https://formspree.io/f/xyyaoqnq" method="POST">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Full Name" name="user_name" required variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email Address" name="user_email" type="email" required variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Write something" name="user_message" multiline rows={4} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'primary.main',
                  },
                }}
              >
                Get In Touch
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Contact;
