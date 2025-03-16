import Header from "../components/Header";
import Title from "../components/Title";
import '../assets/styles/terms.css';
import policyterms from '../assets/data/policy.json';
import TermsExpandableItem from "../components/TermsExpandableItem";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function PolicyPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className="hero-section-career">
                <Header />
                <div className="about-header">

                    <h2> Privacy&nbsp;</h2>
                    <h1>
                        Policy
                    </h1>

                </div>
            </div>
            <div className="terms-container">

                {/* <h1 className="terms-title">
                    <Title title="PRIVACY POLICY" />
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb-link">Home</Link> / policy
                    </div>
                </h1> */}

                <p className="terms-about">At Diva, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. By using our website or services, you consent to the terms of this Privacy Policy.</p>
                <div className="terms-details">
                    {policyterms.map((term, index) => {


                        return (
                            <TermsExpandableItem
                                title={term.title}
                                description={term.description}
                                isExpanded={expandedIndex === index}
                                onToggle={() => handleToggleExpand(index)}
                            />
                        );
                    })}
                </div>

            </div>
            <Footer />
        </>
    );
}

export default PolicyPage;