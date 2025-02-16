import Header from "../../components/Header";
// import Title from "../../components/Title";
import blogs from '../../assets/data/blogs.json';
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
function BlogPage() {
    console.log(blogs);

    return (
        <>
            <Header />
            <div className="blogs">
                <div className="blogs-header">
                    <div className="blogs-header-headline">
                        <p>
                            Story of the
                        </p>
                        <h1>
                            Week
                        </h1>
                    </div>
                    <div className="blogs-header-blog">
                        <h1>
                            Mastering Sophisticated
                            Branding: Insider Tips from
                            Diva's Experts
                        </h1>
                        <p>
                        In today's fast-paced digital landscape, establishing a brand that captivates and resonates with audiences requires more than just a logo and a catchy tagline. It demands sophistication, finesse, and a keen understanding of the nuances that define luxury and excellence...
                        </p>
                        <button>Read now</button>
                    </div>
                </div>
                {blogs.map((blog, index) => (
                    <div key={index}>

                        <BlogCard title={blog.title} id={blog.id} description={blog.description} image={blog.image} />

                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;