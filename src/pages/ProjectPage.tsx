import { useParams } from "react-router-dom";
import Header from "../components/Header";

function ProjectPage() {
    const { id } = useParams();
    return (
        <>
            <Header />
            <h1>Project Page {id}</h1>
        </>
    );
}

export default ProjectPage;