import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideoPlayer from "../../components/VideoPlayer";

function ProjectPage() {
    const { id } = useParams();
    const project = {
        id: id,
        video: 'path',
        title: "Brand Project",
        domain: "BRAND.COM",
        category: "Brand Identity",
        imageUrl: "/brand1.jpg",
        spanTwoColumns: false
    }
    return (
        <>
            <Header />
            <div className="project-video">
                <VideoPlayer src={project.video} />
            </div>
            
            <Footer />
        </>
    );
}

export default ProjectPage;