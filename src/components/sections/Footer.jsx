import React from 'react';
import {
  Box, Typography, IconButton, Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{
      backgroundColor: '#333',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}
    >
      <Box sx={{
        display: 'flex', alignItems: 'center', mb: 2, justifyContent: 'center',
      }}
      >
        <Typography variant="body1" sx={{ mr: 2 }}>
          Connect with me on social media
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2, height: '35px', bgcolor: 'white' }} />
        <IconButton color="inherit" href="https://www.linkedin.com/in/ricardomart%C3%ADnez%E2%88%B4/" target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit" href="https://github.com/bohaz" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com/Ricardo29115571" target="_blank">
          <TwitterIcon />
        </IconButton>
      </Box>
      <Typography variant="body2">
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Ricardo Martínez - All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
