import Header from "../components/Header";
import Footer from "../components/Footer";
import Testimonial from "../components/Testmonials";
import Title from "../components/Title";
import '../assets/styles/about.css';
import AboutGrid from "../components/AboutGrid";

const philosophies = [
    {
        id: "01",
        title: "Precision",
        description: "Our attention to detail ensures that every element of our work is meticulously crafted to perfection.",
    },
    {
        id: "02",
        title: "Sophistication",
        description: "We believe in the power of sophisticated design to create memorable and impactful brand experiences.",
        italic: true,
    },
    {
        id: "03",
        title: "Confidence",
        description: "We approach every project with confidence, delivering solutions that reflect our clients' aspirations and values.",
    },
];

function AboutPage() {
    return (
        <>
            <div className="hero-section-career">
                <Header />
                <div className="about-header">

                    <h2>
                        About &nbsp;
                    </h2>
                    <h1> Diva</h1>

                </div>
            </div>
            <AboutGrid />
            <div className="about-about">
                {/* We are a &nbsp;<span>premier</span>&nbsp;  design and tech agency specializing in branding, website development, and design solutions. At Diva, we believe in &nbsp;<span>pushing the boundaries</span>&nbsp;
                of design to create &nbsp;<span>exquisite experiences</span>&nbsp;  that elevate brands to new heights. */}
                We are a premier design and tech agency specializing in branding, website development, and design solutions. At Diva, we believe in pushing the boundaries
                of design to create exquisite experiences that elevate brands to new heights.
                
            </div>
            <section className="about-philosophy-section">
                <div className="about-philosophies-title">
                    <Title title="Our Philosophy" />
                </div>

                <div className="about-philosophy-container">
                    {philosophies.map((benefit) => (
                        <div key={benefit.id} className="about-philosophy-card">
                            <span className="about-philosophy-id">{benefit.id}</span>
                            <h3 className={`about-philosophy-title ${benefit.italic ? "italic" : ""}`}>
                                {benefit.title}
                            </h3>
                            <p className="about-philosophy-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Testimonial />
            <Footer />
        </>
    );
}

export default AboutPage;