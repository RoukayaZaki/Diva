import Footer from "../../components/Footer";
import Header from "../../components/Header";
import '../../assets/styles/career.css';
import jobs from '../../assets/data/job_descriptions.json';
import JobItem from "../../components/JobItem";
import Benefits from "../../components/Benefits";

function CareerPage() {
    return (
        <>
            <div className="hero-section-career">
                <Header />
                <div className="career-header">

                    <h2>
                        Careers &nbsp;
                    </h2>
                    <h1> In Diva Agency</h1>
                    
                </div>
            </div>
            <div className="career-about">
                <p>
                    At Diva, we actively seek passionate individuals who share our dedication to sophistication, confidence, and precision in design and technology. Our dynamic environment fosters creativity, where collaboration, mutual respect, and idea-sharing are core values. Join us for opportunities to grow professionally, continuously learn, and advance your career while contributing to impactful projects that resonate with high-profile brands and their audiences.
                </p>
            </div>
            <div className="career-positions">
                <div className="career-positions-header">
                    <h1>
                        Available
                    </h1>
                    <h2>
                        Positions
                    </h2>
                </div>
                <div className="job-item-line" />

                {jobs.map((job, index) => (
                    
                    <JobItem id={index} title={job.title} types={job.type} />
                ))}

            </div>
            <Benefits />

            <Footer />
            
        </>
    );
}

export default CareerPage;