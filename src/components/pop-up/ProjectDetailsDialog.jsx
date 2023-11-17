import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide, Chip, CardMedia, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';


const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectDetailsDialog({ open, handleClose, project }) {
  const hasProjectData = project && project.title;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="project-details-description"
    >
      {hasProjectData && (
        <>
          <DialogTitle>
            {project.title}
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
                <Chip key={index} label={tech} variant="outlined" style={{ margin: '5px' }} />
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button 
  href={project.liveUrl} 
  target="_blank"
  style={{
    backgroundColor: '#007bff', // Color de fondo
    color: 'white', 
    width: '20%', // Ancho del botón
   // Color del texto
    margin: '5px', // Margen
    '&:hover': {
      backgroundColor: '#0056b3', // Color de fondo al pasar el ratón por encima
    },
  }}
>
  See Live
</Button>
<Button 
  href={project.sourceUrl} 
  target="_blank"
  style={{
    backgroundColor: 'white', // Otro color de fondo
    color: '#007bff',
    
    margin: '5px',
    '&:hover': {
      backgroundColor: 'white', // Color de fondo al pasar el ratón por encima
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
