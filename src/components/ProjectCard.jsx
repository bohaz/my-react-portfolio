import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

const ExpandMore = styled(({ expand, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <IconButton {...otherProps} />
))(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjectCard({
  title, imageUrl, description, technologies, onDetailsClick,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMoreClick = () => {
    // Aquí invocamos la función onDetailsClick con todos los detalles del proyecto
    onDetailsClick({
      title, imageUrl, description, technologies,
    });
  };

  const technologyIcons = {
    React: 'logos:react',
    Redux: 'logos:redux',
    Ruby: 'logos:ruby',
    Bootstrap: 'logos:bootstrap',
    CSS3: 'logos:css-3',
    HTML: 'logos:html-5',
    Javascript: 'logos:javascript',
    Rails: 'logos:rails',
  };

  const cardStyle = {
    width: '350px',
    height: 'auto',
    borderRadius: '5px',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.5)',
    margin: '15px',
    backgroundColor: '#ffffff',
  };

  const titleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: '#104579',
  };

  return (
    <Card
      style={cardStyle}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      sx={{ maxWidth: 345 }}
    >
      <CardHeader
        action={(
          <IconButton aria-label="settings" onClick={handleMoreClick}>
            <MoreVertIcon />
          </IconButton>
          )}
        title={
          <Typography style={titleStyle}>{title}</Typography>
          }
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="#104579">
          Technologies:
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {technologies.map((tech) => (
            <Icon key={tech} icon={technologyIcons[tech] || 'emojione:question-mark'} style={{ fontSize: '30px', margin: '5px' }} />
          ))}

        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardContent>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </CardContent>
      </Collapse>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

export default ProjectCard;
