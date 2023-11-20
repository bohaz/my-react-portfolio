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
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

      <Typography
        variant="h4"
        component="p"
        gutterBottom
        textAlign="center"
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: '#333',
          width: { xs: '100%', md: '50%' },
          fontSize: { xs: 'h5.fontSize', md: 'h4.fontSize' },
        }}
      >
        I&apos;m always interested in hearing about new projects,
        so if you&apos;d like to chat please get in touch.
      </Typography>
      <form action="https://formspree.io/f/xyyaoqnq" method="POST" style={{ width: '100%', maxWidth: '600px' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="user_name"
              required
              variant="outlined"
              sx={{ backgroundColor: '#fff' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email Address"
              name="user_email"
              type="email"
              required
              variant="outlined"
              sx={{ backgroundColor: '#fff' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Write something"
              name="user_message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ backgroundColor: '#fff' }}
            />
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
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Contact;
