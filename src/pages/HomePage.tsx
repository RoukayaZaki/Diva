import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/styles/hero.css";
import Title from "../components/Title";
import ProjectSlider from "../components/ProjectSlider";
import services from '../assets/data/services.json';
import ExpandableItem from "../components/ExpandableItem";
import { useState } from "react";
import Testimonial from "../components/Testmonials";

function HomePage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
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
                <div className="home-portfolio-title">

                    <p>
                        Stories We've Crafted
                    </p>
                    <Title title="Portfolio" />
                </div>
                <div className="home-projects">
                    <ProjectSlider />
                </div>
            </div>
            <div className="home-services">
                <div className="home-services-header two-column-container">
                    <div className="column column-1">
                        <Title title="Diva’s Services " />
                        <h1>& Deciplines</h1>
                    </div>
                    <p className="home-services-description column column-2">
                        With a passion for pushing design boundaries and a focus on sophistication, confidence, and precision,
                        we specialize in crafting bespoke solutions that captivate audiences and elevate your brand.
                    </p>
                </div>
                <div className="home-services-box">

                    {services.map((service, index) => (
                        <ExpandableItem
                            key={index}
                            title={service.title}
                            description={service.description}
                            isExpanded={expandedIndex === index}
                            onToggle={() => handleToggleExpand(index)}
                        />
                    ))}
                </div>

            </div>
            <div className="stats-container">
                <div className="stat">
                    <span className="stat-number">350+</span>
                    <span className="stat-label">COMPLETED PROJECTS</span>
                </div>
                <div className="stat">
                    <span className="stat-number">07+</span>
                    <span className="stat-label">YEARS IN OPERATION</span>
                </div>
                <div className="stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">CLIENTS SATISFACTION</span>
                </div>
            </div>

            <Testimonial />

            <Footer />
        </>
    );
}

export default HomePage;