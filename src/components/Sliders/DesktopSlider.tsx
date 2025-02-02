import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from '../../assets/data/highlighted_projects.json';
import ProjectCard from '../ProjectCard';
import React from 'react';

function DesktopSlider() {
  const [activeSlide, setActiveSlide] = React.useState(1);

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1, // Default number of slides to scroll
    beforeChange: (next: number) => {
      const totalSlides = projects.length;
      let activeIndex = (next + 1) % (totalSlides + 1);
      setActiveSlide(activeIndex);
    },
    responsive: [
      {
        breakpoint: 1050, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
          slidesToScroll: 1, // Scroll 1 slide at a time on mobile
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`slick-slide-wrapper ${index === activeSlide ? 'active' : ''}`}
          >
            <ProjectCard id={project.id} title={project.title} image={project.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DesktopSlider;