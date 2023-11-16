import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Chip } from '@mui/material';

function ProjectCard({ title, description, imageUrl, liveUrl, sourceUrl, technologies }) {
  const cardStyle = {
    width: '350px',
    height: '350px',
    borderRadius: '20px',
    borderColor: '#e3e3e3',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)' 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Card style={cardStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={`Imagen de ${title}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
  {technologies && technologies.map((tech, index) => (
    <Chip key={index} label={tech} variant="outlined" />
  ))}
</div>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={liveUrl} target="_blank">
            See Live
          </Button>
          <Button size="small" color="primary" href={sourceUrl} target="_blank">
            See Source
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProjectCard;
