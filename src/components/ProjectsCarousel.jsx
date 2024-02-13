/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import ProjectDetailsDialog from './pop-up/ProjectDetailsDialog';
import './styles/Cards.css';
import image128 from '../assets/24doctor.png';
import airappImage from '../assets/Airapp.png';
import rodeoImage from '../assets/Rodeo.png';
import mathImage from '../assets/Math.png';
import spaceImage from '../assets/Space.png';
import petfashionImage from '../assets/Petfashion.png';

function ProjectsCarousel({ id }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const projects = [
    {
      title: 'Pet Fashion',
      description: 'Pet Fashion is our professional and dedicated pet grooming salon. As a software developer, I have created this web application not only as a digital portal for our services but also as a reflection of our commitment to innovation and excellence. This platform represents the fusion of my passion for technological development and pet care, offering our clients an intuitive, informative, and engaging user experience.',
      imageUrl: petfashionImage,
      technologies: ['Rails', 'React', 'CSS3', 'Tailwind', 'Material'],
      liveUrl: 'https://petfashion.vercel.app',
      sourceUrl: 'https://github.com/bohaz/petfashion',
    },
    {
      title: 'Medica',
      description: '24hour doctor is a modern and dynamic web application designed to manage and display a directory of doctors and their reservations.',
      imageUrl: image128,
      technologies: ['Rails', 'React', 'Redux', 'Tailwind', 'Material'],
      liveUrl: 'https://two4hours-doctor-frontend.onrender.com/',
      sourceUrl: 'https://github.com/bohaz/24hour_doctor-front_end',
    },
    /*  {
      title: 'TransactTrends',
      description: 'TransactTrends is a web application designed to help you manage and keep a detailed track of your financial transactions.',
      imageUrl: transfrontImage,
      technologies: ['Ruby', 'Rails', 'CSS3'],
      liveUrl: 'https://transactrends.onrender.com',
      sourceUrl: 'https://github.com/bohaz/Budget-app',
    }, */
    {
      title: 'Air Quality Monitoring App',
      description: 'Air Quality Monitoring App is an intuitive single Page Application (SPA) displaying real-time air pollution levels across Venezuelan states.',
      imageUrl: airappImage,
      technologies: ['React', 'Redux', 'CSS3'],
      liveUrl: 'https://air-quality-monitoring-app.onrender.com/',
      sourceUrl: 'https://github.com/bohaz/air-quality-monitoring-app',
    },
    {
      title: "Space Traveler's Hub",
      description: 'Web Page connected with the real live data from the SpaceX API, to provide commercial and scientific space travel services, users can book rockets and join selected space missions.',
      imageUrl: spaceImage,
      technologies: ['React', 'Redux', 'CSS3', 'Bootstrap'],
      liveUrl: 'https://space-travelers-hub-g5v6.onrender.com',
      sourceUrl: 'https://github.com/bohaz/Space-Travelers-Hub',
    },
    {
      title: 'Finals Rodeo',
      description: 'The Finals Rodeo website is a final project created with HTML, CSS and Javascript where we apply all the knowledge acquired during module 1',
      imageUrl: rodeoImage,
      technologies: ['HTML', 'Javascript', 'CSS3'],
      liveUrl: 'https://bohaz.github.io/Capstone-project1/',
      sourceUrl: 'https://github.com/bohaz/Capstone-project1',
    },
    {
      title: 'Math Magicians',
      description: 'Math-Magicians It is a Single Page Application that allows users to Mmake simple math operations.',
      imageUrl: mathImage,
      technologies: ['React', 'Redux', 'CSS3'],
      liveUrl: 'https://ricardo-math-magicians.onrender.com/',
      sourceUrl: 'https://github.com/bohaz/math-magicians',
    },
  ];

  const boxStyle = {
    p: { xs: 1, md: 2 },
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    margin: '20px 0',
    pt: { xs: 2, md: 6 },
  };

  return (
    <Box
      id={id}
      sx={{
        p: { xs: 1, md: 4 },
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: { xs: '12%', md: '5%' },
        backgroundColor: '#d0d0d0',
      }}
    >
      <Box sx={boxStyle}>
        <h2 className="works-title my-recent-works with-underline" style={{ textAlign: 'center', fontFamily: 'Poppins, sans-serif', color: '#104579' }}>
          <i className="fa-solid fa-briefcase" />
          {' '}
          Recent Projects
        </h2>

        <Grid container spacing={2} justifyContent="center">
          {projects.map((project) => (
            <Grid item key={project.title} xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                onDetailsClick={() => handleDetailsClick(project)}
              />
            </Grid>
          ))}
        </Grid>

        <ProjectDetailsDialog
          open={dialogOpen}
          handleClose={handleClose}
          project={selectedProject}
        />
      </Box>
    </Box>
  );
}

ProjectsCarousel.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectsCarousel;
