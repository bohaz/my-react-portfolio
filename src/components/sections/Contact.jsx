import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

function Contact({ id }) {
  return (
    <Box id={id} sx={{ 
      p: 4, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
    }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 2, fontWeight: 'bold' }}>
        Contact
      </Typography>
      <Typography variant="h6" component="p" gutterBottom textAlign="center" sx={{ mb: 3 }}>
        I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
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
            <Button type="submit" variant="contained" color="primary" sx={{ width: '100%', padding: '10px', borderRadius: '20px', fontWeight: 'bold' }}>
              Get In Touch
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Contact;
