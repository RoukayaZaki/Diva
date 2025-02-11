import "../assets/styles/item.css";
import { useMediaQuery } from 'react-responsive';
import { IoIosArrowRoundForward } from "react-icons/io";

type ExpandableItemProps = {
    title: string;
    description: string[];
    isExpanded: boolean;
    onToggle: () => void;
};

const JobExpandableItem = ({ title, description, isExpanded, onToggle }: ExpandableItemProps) => {
    let isApplication = title === "Application";
    const isMobile = useMediaQuery({ maxWidth: 1050 });

    return (
        <div className="jobpage-expandable-item">
               
            <div className="jobpage-item-header" onClick={onToggle}>
                <div className="jobpage-item-title">
                    {title}
                </div>
                {isExpanded && !isMobile && (
                    <div className={`jobpage-item-description ${isApplication ? "app" : ""}`}>
                        <ul>

                            {description.map((item) => (
                                <li>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className={`jobpage-item-arrow ${isExpanded ? "expand" : ""}`}>
                    <IoIosArrowRoundForward className="jobpage-item-arrow-icon" />
                </div>
            </div>
            {isExpanded && isMobile && (
                <div className={`jobpage-item-description ${isApplication ? "app" : ""}`}>
                    <ul>

                        {description.map((item) => (
                            <li>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )

            }

        </div>
    );
};

export default JobExpandableItem;
