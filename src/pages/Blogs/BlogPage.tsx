import Header from "../../components/Header";
import Title from "../../components/Title";
import blogs from '../../assets/data/blogs.json';
import BlogCard from "../../components/BlogCard";
function BlogPage() {
    console.log(blogs);

    return (
        <>
            <Header />
            <div className="blogs">
            <Title title="BLOGS & NEWS" />
                {blogs.map((blog, index) => (
                    <div key={index}>

                        <BlogCard title={blog.title} id={blog.id} description={blog.description} image={blog.image} />

                    </div>
                ))}
            </div>
        </>
    );
}

export default BlogPage;