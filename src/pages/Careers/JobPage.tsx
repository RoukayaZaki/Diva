import { useParams } from "react-router-dom";
import Header from "../../components/Header";

function JobPage() {
    const { id } = useParams();
    return (
        <>
            <Header />
            <h1>Job Page {id}</h1>
        </>
    );
}

export default JobPage;