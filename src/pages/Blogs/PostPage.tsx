import { useParams } from "react-router-dom";

function PostPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>Post Page</h1>
            <p>Post ID: {id}</p>
        </div>
    );
}

export default PostPage;

