import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/styles/hero.css";
import Title from "../components/Title";
import ProjectSlider from "../components/ProjectSlider";

function HomePage() {
    return (
        <>
            <div className="hero-section ">
                <Header />
                <div className="box">
                    <p>
                        We Craft Exquisite Experiences
                    </p>
                    <div className="hero-text">
                        <Title title="That" /><h1>Elevate</h1><Title title="Brands" />
                    </div>

                    <div className="hero-text">
                        <h1>To</h1> <Title title="New" /> <h1>Heights</h1>
                    </div>
                </div>
            </div>
            <div className="home-about">
                <div className="home-about-left">
                    <p>
                        where artistry meets authenticity
                    </p>
                    <h1> Crafting Sophisticated Brands That Inspire and Connect </h1>
                </div>
                <div className="home-about-right">
                    <p>
                        Diva Agency specializes in branding, website development, and design, blending creativity with precision to deliver extraordinary results. From conceptualization to execution, our work is about elevating brands through unparalleled attention to detail and timeless artistry. With a passion for perfection and an eye for innovation, Diva Agency creates experiences that inspire trust, foster connection, and empower brands to thrive.
                    </p>
                </div>
            </div>
            <div className="home-portfolio">
                <p>
                    Stories We've Crafted
                </p>
                <Title title="Portfolio" />
                <div className="home-projects">
                </div>
            </div>
            <div className="home-services">
                <Title title="Diva’s Services & Disciplines" />
                <span>
                    <p>
                        With a passion for pushing design boundaries and a focus on sophistication, confidence, and precision, we specialize in crafting bespoke solutions that captivate audiences and elevate your brand.
                        </p>
                        </span>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default HomePage;