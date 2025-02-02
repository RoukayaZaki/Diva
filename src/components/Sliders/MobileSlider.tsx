import { useState } from "react";
import projects from '../../assets/data/highlighted_projects.json';
import ProjectCard from "../ProjectCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function MobileSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mobile-slider">
      <button title="mobile-slider-back" onClick={handlePrev} className="back-arrow"> <IoIosArrowBack /> </button>
      <div className="mobile-slider-middle">

        <ProjectCard id={projects[currentIndex].id} title={projects[currentIndex].title} image={projects[currentIndex].image} />
      </div>
      <button title="mobile-slider-forward" onClick={handleNext} className="forward-arrow"> <IoIosArrowForward /> </button>

    </div>
  );
};

export default MobileSlider;
