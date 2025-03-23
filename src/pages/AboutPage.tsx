import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import '../assets/styles/about.css';
import AboutMission from "../components/AboutMission";

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
            <div className="about-story">
                <div className="about-philosophies-title">
                    <Title title="Our Story Isn't Like Everyone Else's..." />

                </div>
                <p>
                    A Journey of Passion, Innovation, and Unwavering Excellence
                </p>
            </div>

            <div className="about-story-content"> 
                <p className="about-story-content-left">
                    In 2019, our journey began with a fervent passion for pushing the boundaries of possibility while embracing the sophistication of design and creativity. Diva emerged not only as a creative agency but also as a symbol of luxury, innovation, and excellence in the digital realm. Our goal was to create exceptional experiences that surpass expectations and set new benchmarks.
                </p>
                <p className="about-story-content-right">
                At Diva, we envision a future where elegance and perfection reign supreme. We aim to set the gold standard for innovation, infusing every creation with sophistication, confidence, and unapologetic perfection. We craft digital experiences that exude elegance and establish new benchmarks for excellence, empowering our clients to stand out in a competitive landscape.
                </p>
            </div>
            <div className="about-about">
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
            
            <AboutMission />

            <Footer />
        </>
    );
}

export default AboutPage;