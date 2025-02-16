import "../assets/styles/item.css";
import { GoArrowRight } from "react-icons/go";

type TermsExpandableItemProps = {
    title: string;
    description: string;
    isExpanded: boolean;
    onToggle: () => void;
    guidelines?: string[];
    summary?: string;
};

const TermsExpandableItem = ({ title, description, isExpanded, onToggle, guidelines=[], summary="" }: TermsExpandableItemProps) => {
    return (
        <div className="terms-expandable-item">
            <div className="terms-item-header" onClick={onToggle}>
                <div className="terms-item-title">
                    <h1>{title}</h1>
                </div>
                <span className={`terms-item-arrow ${isExpanded ? "expanded" : ""}`}>
                    <GoArrowRight />
                </span>
            </div>
            {isExpanded && (
                <div className="item-description">
                    <p className="terms-item-description">{description}</p>
                    {guidelines.length > 0 && (
                        <div className="terms-guidelines">
                            <ul>
                                {guidelines.map((guideline, index) => (
                                    <li key={index}>{guideline}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {summary && (
                        <div className="terms-summary">
                            <p>{summary}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TermsExpandableItem;
