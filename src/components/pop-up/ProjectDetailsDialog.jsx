import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions, Button,
  Slide, CardMedia, IconButton, Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
Transition.displayName = 'Transition';
function ProjectDetailsDialog({ open, handleClose, project }) {
  const hasProjectData = project && project.title;

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

  const titleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="project-details-description"
      sx={{ '& .MuiDialog-paper': { borderRadius: '5px', backgroundColor: '#ffffff' } }}
    >
      {hasProjectData && (
        <>
          <DialogTitle sx={{ color: '#104579', fontSize: '1.2rem' }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <FontAwesomeIcon icon={faRectangleXmark} />
            </IconButton>
            <Typography style={titleStyle}>{project.title}</Typography>
          </DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              image={project.imageUrl}
              alt={`Imagen de ${project.title}`}
            />
            <DialogContentText id="project-details-description">

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {project.technologies.map((tech) => (
                  <Icon key={tech} icon={technologyIcons[tech] || 'emojione:question-mark'} style={{ fontSize: '30px', margin: '5px' }} />
                ))}
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              href={project.liveUrl}
              target="_blank"
              sx={{
                color: '#104579',
                fontSize: '1rem',
                borderRadius: '5px',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'primary.main',
                },
              }}
            >
              See Live
            </Button>
            <Button
              href={project.sourceUrl}
              target="_blank"
              sx={{
                color: '#dc143c',
                borderRadius: '5px',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#dc143c',
                },
              }}
            >
              See Source
            </Button>

          </DialogActions>
        </>
      )}
    </Dialog>
  );
}

ProjectDetailsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    liveUrl: PropTypes.string,
    sourceUrl: PropTypes.string,
  }),
};

ProjectDetailsDialog.defaultProps = {
  project: {},
};

export default ProjectDetailsDialog;
