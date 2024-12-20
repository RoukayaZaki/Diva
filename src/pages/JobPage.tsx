import { useParams } from "react-router-dom";

function JobPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>Job Page {id}</h1>
        </div>
    );
}

export default JobPage;