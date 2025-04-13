import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../../assets/data/highlighted_projects.json";
import ProjectCard from "../ProjectCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Import icons from react-icons
interface ArrowProps {
  onClick?: () => void;
}
function DesktopSlider() {
  const totalSlides = projects.length;
  const [activeSlide, setActiveSlide] = React.useState(1);

  // Custom Previous Arrow Component
  const CustomPrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-prev"
        onClick={onClick}
        style={{
          position: "absolute",
          left: "-25px", // Adjust positioning as needed
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosArrowBack size={24} /> {/* Use react-icons */}
      </button>
    );
  };

  // Custom Next Arrow Component
  const CustomNextArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-next"
        onClick={onClick}
        style={{
          position: "absolute",
          right: "-25px", // Adjust positioning as needed
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <IoIosArrowForward size={24} /> {/* Use react-icons */}
      </button>
    );
  };

  // Slider Settings
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Use custom previous arrow
    nextArrow: <CustomNextArrow />, // Use custom next arrow
    beforeChange: (_current: number, next: number) => {
      const middleIndex = (next + 1) % totalSlides;
      setActiveSlide(middleIndex);
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`slick-slide-wrapper ${
              index === activeSlide ? "active" : ""
            }`}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              image={project.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DesktopSlider;
