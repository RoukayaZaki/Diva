import Header from "../../components/Header";
// import Title from "../../components/Title";
import blogs from '../../assets/data/blogs.json';
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import headerphoto from '../../assets/images/blogs/header-blogs.png';
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function BlogPage() {
    console.log(blogs);
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <Header />
            <div className="blogs">
                <div className="blogs-header">
                    <div className="blogs-header-headline">
                        <div className="blogs-header-headline-title">
                            <p>
                                Story of the
                            </p>
                            <h1>
                                WEEK
                            </h1>
                        </div>
                        <img src={headerphoto} className="blogs-header-headline-img" alt="" />
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
                        <Link to='/blogs/1' onClick={handleClick}>
                        <button>READ NOW <GoArrowRight className="blogs-header-blog-button-arrow"/></button>
                        </Link>
                    </div>
                </div>
                {blogs.map((blog, index) => (
                    <div key={index}>
                        <Link to={`/blogs/${blog.id}`} onClick={handleClick} style={{ textDecoration: 'none' }} >
                            <BlogCard title={blog.title} id={blog.id} description={blog.description} image={blog.image} />
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;