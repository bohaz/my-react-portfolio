import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent,
  DialogContentText, DialogActions, Button,
  Slide, Chip, CardMedia, IconButton,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
Transition.displayName = 'Transition';
function ProjectDetailsDialog({ open, handleClose, project }) {
  const hasProjectData = project && project.title;

  const chipStyle = {
    borderRadius: '5px',
    fontWeight: 'bold',
    border: '#104579 solid 1px',
    color: '#104579',
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
          <DialogTitle sx={{ color: ' #104579', fontSize: '1.2rem' }}>
            {project.description}
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

          </DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              image={project.imageUrl}
              alt={`Imagen de ${project.title}`}
            />
            <DialogContentText id="project-details-description">

              {project.technologies.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" style={{ margin: '5px' }} sx={chipStyle} />
              ))}

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
