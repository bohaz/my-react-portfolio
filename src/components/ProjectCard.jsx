import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Chip } from '@mui/material';

function ProjectCard({ title, imageUrl, technologies, onDetailsClick }) {
  const cardStyle = {
    width: '350px',
    height: 'auto',
    borderRadius: '20px',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  };

  const buttonStyle = {
    width: '50%', 
    margin: '0 auto', 
    display: 'block', 
    backgroundColor: '#007bff', 
    color: 'white',
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
              <Chip key={index} label={tech} variant="outlined" />
            ))}
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
        <Button style={buttonStyle} onClick={() => onDetailsClick({ title, imageUrl, technologies })}>
            See Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;
