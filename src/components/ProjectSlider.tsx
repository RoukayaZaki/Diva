import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from '../assets/data/highlighted_projects.json';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const {  onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ left: '-50px', zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const {  onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ right: '-50px', zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

function ProjectSlider() {
  const [activeSlide, setActiveSlide] = React.useState(2); // Default to the second slide (center)

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    focusOnSelect: true,
    beforeChange: (current: number,next: number) => {
      // Update the active slide index
      console.log(current);
      console.log(next);
      setActiveSlide(next + 1); // +1 because slides are 1-indexed in CSS
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`slick-slide-wrapper ${index  === activeSlide ? 'active' : ''}`}
          >
            <ProjectCard id={project.id} title={project.title} image={project.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;