import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide, Chip, CardMedia, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';


const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectDetailsDialog({ open, handleClose, project }) {
  const hasProjectData = project && project.title;

  const chipStyle = {
    borderRadius: '5px', 
    backgroundColor: 'rgba(128, 128, 128, 0.2)', 
    fontWeight: 'bold',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="project-details-description"
      sx={{ '& .MuiDialog-paper': { borderRadius: '20px' } }}
    >
      {hasProjectData && (
        <>
          <DialogTitle>
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
            
            
              {project.technologies.map((tech, index) => (
                <Chip key={index} label={tech} variant="outlined" style={{ margin: '5px' }} sx={chipStyle} />
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button 
  href={project.liveUrl} 
  target="_blank"
  sx={{
    backgroundColor: '#007bff', 
    color: 'white', 
    width: '30%', 
    borderRadius: '20px',
    margin: '5px',
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
  style={{
    backgroundColor: 'white', 
    color: '#007bff',
    
    margin: '5px',
    '&:hover': {
      backgroundColor: 'white',
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

export default ProjectDetailsDialog;
