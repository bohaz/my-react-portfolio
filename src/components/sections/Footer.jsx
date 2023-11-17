import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
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
      padding: '10px',
      marginTop: '30px'
    }}>
      <Box sx={{ '& > *': { margin: 1 } }}>
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
      <Typography variant="body2" sx={{ marginTop: '10px' }}>
        © {new Date().getFullYear()} Ricardo Martínez - All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
