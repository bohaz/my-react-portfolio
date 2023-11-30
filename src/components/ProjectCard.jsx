import React from 'react';
import {
  Card, CardActions, CardContent, CardMedia, Button, Typography, Chip,
} from '@mui/material';
import PropTypes from 'prop-types';

function ProjectCard({
  title, imageUrl, technologies, onDetailsClick,
}) {
  const cardStyle = {
    width: '350px',
    height: 'auto',
    borderRadius: '5px',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)',
    margin: '15px',
    backgroundColor: '#ffffff',
  };

  const chipStyle = {
    borderRadius: '5px',
    fontWeight: 'bold',
    border: '#104579 solid 1px',
    color: '#104579',
  };

  return (

    <div style={{
      display: 'flex', justifyContent: 'center', width: '100%',
    }}
    >
      <Card
        style={cardStyle}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={`Image of ${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#104579' }}>
            {title}
          </Typography>
          <div style={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '10px',
          }}
          >
            {technologies.map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" sx={chipStyle} />
            ))}

          </div>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button
            sx={{
              width: '50%',
              margin: '0 auto',
              display: 'block',
              backgroundColor: 'primary.main',
              color: 'white',
              borderRadius: '5px',
              '&:hover': {
                backgroundColor: 'white',
                color: 'primary.main',
              },
            }}
            onClick={() => onDetailsClick({ title, imageUrl, technologies })}
          >
            See Details
          </Button>
        </CardActions>
      </Card>
    </div>

  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

export default ProjectCard;
