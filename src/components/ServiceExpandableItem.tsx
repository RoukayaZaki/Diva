import Title from "./Title";
import { GoArrowRight } from "react-icons/go";

type Service = {
    title: string;
    [key: string]: string[] | string | undefined;
}

type ServiceProps = {
    service: Service;
    isExpanded: boolean;
    onToggle: () => void;
}

function ServiceExpandableItem({ service, isExpanded, onToggle }: ServiceProps) {
    return (
        <div className="services-expandable-item">
            <div className="services-item-header" onClick={onToggle}>
                <div className="services-item-title">
                    <Title title={service.title} />
                </div>
                <span className={`services-item-arrow ${isExpanded ? "expanded" : ""}`}>
                    <GoArrowRight />
                </span>
            </div>
            {isExpanded && <div className="services-item-description">
                {service.description}
                {Object.keys(service).map((key) => {
                    if (key !== 'title') {
                        return (

                            <div className="services-expands" key={key}>

                                <h3>{key}</h3>
                                <ul>
                                    {(service[key] as string[]).map((value, i) => (
                                        <li key={i}>{value}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            }
        </div>
    );
}

export default ServiceExpandableItem;