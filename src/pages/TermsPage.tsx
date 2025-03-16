import Header from "../components/Header";
import Title from "../components/Title";
import '../assets/styles/terms.css';
import terms from '../assets/data/terms.json';
import TermsExpandableItem from "../components/TermsExpandableItem";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

type TermsExpandableItemProps = {
    title: string;
    description: string;
    isExpanded: boolean;
    onToggle: () => void;
    guidelines?: string[];
    summary?: string;
};
function TermsPage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className="hero-section-career">
                <Header />
                <div className="about-header">

                    <h1> Service&nbsp;</h1>
                    <h2>
                        Policies
                    </h2>

                </div>
            </div>
            <div className="terms-container">

                {/* <h1 className="terms-title">
                    <Title title="SERVICES AND AGREEMENT POLICIES" />
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb-link">Home</Link> / terms
                    </div>
                </h1> */}

                <p className="terms-about">As you embark on this journey with us, it's important to understand the terms that govern our partnership. We believe in transparency and clarity, which is why we've outlined the scope of work, timelines, and payment terms to ensure a seamless collaboration. From the moment you engage with us, you can expect nothing less than exceptional service and unparalleled results. In the following sections, you will see parts of the agreement between you and us, 'The Diva Solutions'. In consideration of the mutual agreement made herein, both parties agree as follows in the next sections.</p>
                <div className="terms-details">
                    {terms.map((term, index) => {
                        // Define optional props based on conditions
                        const optionalProps: Partial<TermsExpandableItemProps> = {
                            ...(term.guidelines && { guidelines: term.guidelines }),
                            ...(term.summary && { summary: term.summary }),
                        };

                        return (
                            <TermsExpandableItem
                                title={term.title}
                                description={term.description}
                                isExpanded={expandedIndex === index}
                                onToggle={() => handleToggleExpand(index)}
                                {...optionalProps} // Spread the optional props
                            />
                        );
                    })}
                </div>

            </div>
            <Footer />
        </>
    );
}

export default TermsPage;