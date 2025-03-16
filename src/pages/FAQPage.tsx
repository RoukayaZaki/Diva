import Header from "../components/Header";
import Title from "../components/Title";
import '../assets/styles/terms.css';
import faq from '../assets/data/faq.json';
import TermsExpandableItem from "../components/TermsExpandableItem";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function FAQPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className="hero-section-career">
                <Header />
                <div className="about-header">

                    <h1> Frequently Asked&nbsp;</h1>
                    <h2>
                        Questions
                    </h2>

                </div>
            </div>
            <div className="terms-container">

                {/* <h1 className="terms-title">
                    <Title title="FREQUENTLY ASKED QUESTIONS" />
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb-link">Home</Link> / faq
                    </div>
                </h1> */}

                <p className="terms-about">Welcome to our exclusive FAQ section. We understand that excellence lies in the details, and we are here to ensure your experience is nothing short of exceptional. Below, you will find answers to the most common inquiries about our prestigious offerings. Should you require further assistance, our dedicated concierge team is at your service.</p>
                <div className="terms-details">
                    {faq.map((term, index) => {


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

export default FAQPage;