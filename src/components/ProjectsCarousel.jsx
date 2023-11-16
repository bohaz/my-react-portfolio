import React, { Component } from "react";
import Slider from "react-slick";
import ProjectCard from './ProjectCard'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../components/Cards.css';

export default class ProjectsCarousel extends Component {
  render() {
    var settings = {
        speed: 500,
        slidesToShow: 2,  
        slidesToScroll: 1,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
        ]
    };

    const projects = [
      {
        title: '24-Hours Doctor',
        description: '24hour doctor is a modern and dynamic web application designed to manage and display a directory of doctors and their reservations.',
        imageUrl: require('../assets/Captura de pantalla (128).png'),
        technologies: ['Rails', 'React', 'Redux', 'CSS3'],
        liveUrl: 'http://liveurl1.com',
        sourceUrl: 'http://sourceurl1.com',
      },
      {
        title: 'TransactTrends',
        description: 'TransactTrends is a web application designed to help you manage and keep a detailed track of your financial transactions.',
        imageUrl: require('../assets/Transfront.png'),
        technologies: ['Ruby', 'Rails', 'CSS3'],
        liveUrl: 'https://transacttrends.onrender.com',
        sourceUrl: 'https://github.com/bohaz/Budget-app',
      },
      {
        title: 'Air Quality Monitoring App',
        description: 'Air Quality Monitoring App is an intuitive single Page Application (SPA) displaying real-time air pollution levels across Venezuelan states.',
        imageUrl: require('../assets/Airapp.png'),
        technologies: ['React', 'Redux', 'CSS3'],
        liveUrl: 'https://air-quality-monitoring-app.onrender.com/',
        sourceUrl: 'https://github.com/bohaz/air-quality-monitoring-app',
      },
      {
        title: 'To-do-list',
        description: 'This is a minimalist to-do list that alows users to organize daily activities.',
        imageUrl: require('../assets/Todo1.png'),
        technologies: ['React', 'Javascript', 'Bootstrap'],
        liveUrl: 'https://todo-react-xktv.onrender.com/',
        sourceUrl: 'https://github.com/bohaz/todo-react',
      },
      {
        title: 'Proyecto 5',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/path/to/image1.jpg',
        technologies: ['Ruby', 'Rails', 'CSS3'],
        liveUrl: 'http://liveurl1.com',
        sourceUrl: 'http://sourceurl1.com',
      },
      {
        title: 'Proyecto 6',
        description: 'Descripción del Proyecto 1',
        imageUrl: '/path/to/image1.jpg',
        technologies: ['Ruby', 'Rails', 'CSS3'],
        liveUrl: 'http://liveurl1.com',
        sourceUrl: 'http://sourceurl1.com',
      },
    ];

    return (
      <div className="cards-container">
        <h2>My Recent Works</h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                sourceUrl={project.sourceUrl}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
