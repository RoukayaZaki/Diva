import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/projectcard.css";
type ProjectCardProps = {
    image: string;
    title: string;
    id: string;
}

function ProjectCard({ image, title, id }: ProjectCardProps) {
    // console.log(image);
    return (
        <div className="project-card">
            <img key={id} src={image} alt={title} />
            <p>{title}</p>
        </div>
    );

}

export default ProjectCard;