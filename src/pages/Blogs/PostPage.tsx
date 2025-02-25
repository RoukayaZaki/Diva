import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import blogs from '../../assets/data/blogs.json';
import '../../assets/styles/post.css';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


function PostPage() {
    const { id } = useParams();
    const currentblog = blogs.find(blog => blog.id === id);
    console.log(currentblog);
    const currentId = parseInt(id!, 10);
    const nextId = currentId < 5 ? currentId + 1 : 1;
    const prevId = currentId > 1 ? currentId - 1 : 5;
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className="hero-section-career">
                <Header />
                <div className="about-header" />
            </div>
            <div className="post-page">

                <div className="post-header">
                    <p>POSTED IN: {currentblog?.category}</p>
                    <p>{currentblog?.date}</p>
                    <p>{currentblog?.author}</p>
                </div>
                <h1 className="post-title">{currentblog?.title}</h1>
                <div className="post-content">

                    {currentblog?.sections.map((section, index) => (
                        <div>
                            {section.type === 'paragraph' &&
                                <p key={index} className="post-paragraph">
                                    {section.content}
                                </p>
                            }
                            {section.type === 'quote' &&
                                <div className="post-quote">
                                    <p>{section.content}</p>
                                    <h3>-- {section.author}</h3>
                                </div>
                            }
                            {section.type === 'list' &&
                                <div className="post-list">
                                    <h1>
                                        {section.content}
                                    </h1>
                                    <ul>
                                        {section.items?.map((item, index) => (
                                            <li key={index}>
                                                <b>{item.title} </b>
                                                {item.description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            <br />
                        </div>
                    ))}

                    <div className="post-footer">
                        <Link to={`/blogs/${prevId}`} className="post-back" onClick={handleClick}>
                            <GoArrowLeft />
                            <p>
                                &nbsp;	&nbsp;	&nbsp;PREV
                            </p>
                        </Link>
                        <h2>
                            BACK TO INDEX
                        </h2>
                        <Link to={`/blogs/${nextId}`} className="post-next" onClick={handleClick}>
                            <p>
                                NEXT	&nbsp;	&nbsp;	&nbsp;
                            </p>

                            <GoArrowRight />
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PostPage;

