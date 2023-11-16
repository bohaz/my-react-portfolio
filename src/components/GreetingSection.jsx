import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function GreetingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 0.2; // Incrementa el retraso para cada elemento
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('slide-in-left-to-right');
        }
      });
    }, { threshold: 0.1 });

    const nodes = currentRef ? currentRef.querySelectorAll('.animate') : [];
    nodes.forEach(node => observer.observe(node));

    return () => nodes.forEach(node => observer.unobserve(node));
  }, []);

  return (
    <Box ref={sectionRef} sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom className="animate">
        Hey There.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom className="animate">
        I’m Ricardo.
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom className="animate">
        I'm a Software Developer
      </Typography>
      <Typography paragraph className="animate">
        I can help you build a product, feature<br />
        or website. Look through some of my<br />
        work and experience! If you like what you<br />
        see and have a project you need coded,<br />
        don’t hesitate to contact me.
      </Typography>
    </Box>
  );
}

export default GreetingSection;
