import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Chip } from '@mui/material';

function ProjectCard({ title, imageUrl, technologies, onDetailsClick }) {
  const cardStyle = {
    width: '350px',
    height: 'auto',
    borderRadius: '20px',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)',
    margin: '15px',
  };

  

  const chipStyle = {
    borderRadius: '5px', 
    backgroundColor: 'rgba(128, 128, 128, 0.2)', 
    fontWeight: 'bold',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Card style={cardStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={`Image of ${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
            {technologies && technologies.map((tech, index) => (
              <Chip key={index} label={tech} variant="outlined" sx={chipStyle} />
            ))}
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
        <Button   sx={{
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
  }} onClick={() => onDetailsClick({ title, imageUrl, technologies })}>
            See Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;
