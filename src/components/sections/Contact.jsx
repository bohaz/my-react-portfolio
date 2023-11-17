import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ p: 4, height: '100vh', scrollSnapAlign: 'start' }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        Contact
      </Typography>
      <Typography variant="h6" component="p" gutterBottom textAlign="center">
        I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
      </Typography>
      <form action="https://formspree.io/f/xyyaoqnq" method="POST">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="user_name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email Address"
              name="user_email"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Write something"
              name="user_message"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Get In Touch
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Contact;
