import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../assets/data/highlighted_projects.json";
import ProjectCard from "./ProjectCard";


function ProjectSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 100,
    arrows: true,

  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <>
            <ProjectCard key={index} id={project.id} image={project.image} title={project.title} />
          </>
          // <h1 key={index}>{project.title}</h1>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
