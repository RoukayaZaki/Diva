import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from '../assets/data/highlighted_projects.json';
import ProjectCard from './ProjectCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

// Custom Previous Arrow
// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="slick-arrow slick-prev"
//       style={{ left: '-50px', zIndex: 1 }}
//       onClick={onClick}
//     >
//       <FontAwesomeIcon icon={faChevronLeft} />
//     </div>
//   );
// };

// // Custom Next Arrow
// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="slick-arrow slick-next"
//       style={{ right: '-50px', zIndex: 1 }}
//       onClick={onClick}
//     >
//       <FontAwesomeIcon icon={faChevronRight} />
//     </div>
//   );
// };

function ProjectSlider() {
  const [activeSlide, setActiveSlide] = React.useState(1);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    focusOnSelect: true,
// centerMode: true,
    beforeChange: (current: number, next: number) => {
      const totalSlides = projects.length;
      let activeIndex = (next + 1) % (totalSlides + 1); 
      // if (next === 0 && current === totalSlides - 1) {
      //   activeIndex = 0;
      // } else if (next === totalSlides - 1 && current === 0) {
      //   activeIndex = totalSlides-1;
      // }
      // else if (next === totalSlides - 1) {
      //   // If sliding to the last card
      //   activeIndex = totalSlides;
      // }
      
      console.log(activeIndex);
      console.log("next: ", next);
      console.log("current: ", current);
      setActiveSlide(activeIndex);
    },
    
    
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

export default ProjectSlider;