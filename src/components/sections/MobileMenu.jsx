import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

function MobileMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        paddingTop: '10%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        sx={{ position: 'absolute', top: 0, right: 0 }}
        onClick={toggleDrawer(false)}
      >
        <FontAwesomeIcon icon={faRectangleXmark} />
      </IconButton>
      <List>
        {['Home', 'Projects', 'About', 'Contact'].map((text, index) => (
          <React.Fragment key={text}>
            {index > 0 && <Divider />}
            {' '}
            {/* Añade un divisor entre los elementos */}
            <ListItem button key={text} component="a" href={`#${text.toLowerCase()}`}>
              <ListItemText primary={text} />
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
            backgroundColor: '#f7f7f7',
            color: '#333',
          },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default MobileMenu;
