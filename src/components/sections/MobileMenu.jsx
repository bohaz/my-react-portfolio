import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon'; // Importante para los iconos
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close'; // Icono de cierre más estilizado
import { useTheme } from '@mui/material/styles';

function MobileMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        textAlign: 'center',
        paddingTop: theme.spacing(5),
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        sx={{ position: 'absolute', top: theme.spacing(1), right: theme.spacing(1) }}
        onClick={toggleDrawer(false)}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {[{ text: 'Home', icon: <HomeIcon /> }, { text: 'Projects', icon: <WorkOutlineIcon /> }, { text: 'About', icon: <PersonIcon /> }, { text: 'Contact', icon: <MailOutlineIcon /> }].map((item, index) => (
          <React.Fragment key={item.text}>
            {index > 0 && <Divider />}
            <ListItem button component="a" href={`#${item.text.toLowerCase()}`}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }} />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: theme.shadows[5],
          },
          '& .MuiListItemIcon-root': {
            minWidth: '40px',
          },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default MobileMenu;
