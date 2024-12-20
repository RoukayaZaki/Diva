import { useParams } from "react-router-dom";

function ProjectPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>Project Page {id}</h1>
        </div>
    );
}

export default ProjectPage;