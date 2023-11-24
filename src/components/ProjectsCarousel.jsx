/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import ProjectCard from './ProjectCard';
import ProjectDetailsDialog from './pop-up/ProjectDetailsDialog';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Cards.css';
import image128 from '../assets/24doctor.png';
import transfrontImage from '../assets/Transact.png';
import airappImage from '../assets/Airapp.png';
import todoImage from '../assets/Todo1.png';
import rodeoImage from '../assets/Captura de pantalla (7).png';
import mathImage from '../assets/Math.png';
import spaceImage from '../assets/Space.png';

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

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const projects = [
    {
      title: '24-Hours Doctor',
      description: '24hour doctor is a modern and dynamic web application designed to manage and display a directory of doctors and their reservations.',
      imageUrl: image128,
      technologies: ['Rails', 'React', 'Redux', 'CSS3'],
      liveUrl: 'https://two4hours-doctor-frontend.onrender.com/',
      sourceUrl: 'https://github.com/bohaz/24hour_doctor-front_end',
    },
    {
      title: 'TransactTrends',
      description: 'TransactTrends is a web application designed to help you manage and keep a detailed track of your financial transactions.',
      imageUrl: transfrontImage,
      technologies: ['Ruby', 'Rails', 'CSS3'],
      liveUrl: 'https://transacttrends.onrender.com',
      sourceUrl: 'https://github.com/bohaz/Budget-app',
    },
    {
      title: 'Air Quality Monitoring App',
      description: 'Air Quality Monitoring App is an intuitive single Page Application (SPA) displaying real-time air pollution levels across Venezuelan states.',
      imageUrl: airappImage,
      technologies: ['React', 'Redux', 'CSS3'],
      liveUrl: 'https://air-quality-monitoring-app.onrender.com/',
      sourceUrl: 'https://github.com/bohaz/air-quality-monitoring-app',
    },
    {
      title: "SPACE TRAVELER'S HUB",
      description: 'Web Page connected with the real live data from the SpaceX API, to provide commercial and scientific space travel services, users can book rockets and join selected space missions.',
      imageUrl: spaceImage,
      technologies: ['React', 'Redux', 'CSS3'],
      liveUrl: 'https://space-travelers-hub-g5v6.onrender.com',
      sourceUrl: 'https://github.com/bohaz/Space-Travelers-Hub',
    },
    {
      title: 'To-do-list',
      description: 'This is a minimalist to-do list that alows users to organize daily activities.',
      imageUrl: todoImage,
      technologies: ['React', 'Javascript', 'Bootstrap'],
      liveUrl: 'https://todo-react-xktv.onrender.com/',
      sourceUrl: 'https://github.com/bohaz/todo-react',
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

  return (

    <Box
      id={id}
      sx={{
        p: { xs: 2, md: 4 },
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: { xs: '17%', md: '10%' },
        backgroundColor: '#d0d0d0',
      }}
    >
      <h2 className="works-title my-recent-works" style={{ textAlign: 'center' }}>My Recent Works</h2>

      <Box sx={{ paddingBottom: '10%' }}>
        {' '}
        {/* Agrega este Box */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.title}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                onDetailsClick={() => handleDetailsClick(project)}
              />
            </div>
          ))}
        </Slider>
      </Box>

      <ProjectDetailsDialog
        open={dialogOpen}
        handleClose={handleClose}
        project={selectedProject}
      />
    </Box>

  );
}

ProjectsCarousel.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectsCarousel;
