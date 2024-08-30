import { useParams } from "react-router-dom";

const Blog = () => {
    const { id } = useParams();

    return (
        <div>
            <h1 style={{
                fontSize: "2em",
                fontWeight: "bold",
                textTransform: "uppercase"
            }}>Blog Post</h1>
            <p>You are viewing blog post with ID: {id}</p>
        </div>
    );
};

export default Blog;