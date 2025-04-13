import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import jobs from "../../assets/data/job_descriptions.json";
import Footer from "../../components/Footer";
import Benefits from "../../components/Benefits";
import "../../assets/styles/job.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import Title from "../../components/Title";
import JobExpandableItem from "../../components/JobExpandableItem";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function JobPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const { id } = useParams();
  const jobIndex = parseInt(id!, 10);
  const job = jobs[jobIndex - 1];

  const isMobile = useMediaQuery({ maxWidth: 1050 });
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    
    <>
      <Header />

      <div className="job-card">
        <Link to="/careers" onClick={handleClick} className="back-link">
          {" "}
          <IoIosArrowRoundBack className="back-arrow-career" /> Back To Careers
        </Link>
        <div className="job-data">
          {isMobile && <div className="jobpage-item-line" />}
          <div className="job-header">
            <h1 className="job-title">
              <Title title={job.title} />
            </h1>
            <div className="job-meta">
              {job.type.map((jobType) => (
                <p>({jobType})</p>
              ))}
            </div>
          </div>
          <p className="job-description">
            {job.description}
          </p>

          <div className="job-expandable-items">
            <div className="jobpage-item-line" />
            <JobExpandableItem
              key={0}
              title="Responsibilities"
              description={job.responsibilities}
              isExpanded={expandedIndex === 0}
              onToggle={() => handleToggleExpand(0)}
            />
            <JobExpandableItem
              key={1}
              title="Requirements"
              description={job.requirements}
              isExpanded={expandedIndex === 1}
              onToggle={() => handleToggleExpand(1)}
            />
            <JobExpandableItem
              key={2}
              title="Benefits"
              description={job.benefits}
              isExpanded={expandedIndex === 2}
              onToggle={() => handleToggleExpand(2)}
            />
            <JobExpandableItem
              key={3}
              title="Application"
              description={job.application}
              isExpanded={expandedIndex === 3}
              onToggle={() => handleToggleExpand(3)}
            />
          </div>

          {/* {job.requirements && (
                        <>
                            <h2 className="section-title">Requirements</h2>
                            <ul className="job-list">
                                {job.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </>
                    )} */}

          {/* {job.benefits && (
                        <>
                            <h2 className="section-title">Benefits</h2>
                            <ul className="job-list">
                                {job.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </>
                    )} */}
        </div>
      </div>

      <Benefits />
      <Footer />
    </>
  );
}

export default JobPage;
