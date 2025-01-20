import "../assets/styles/item.css";
import Title from "./Title";
import { GoArrowRight } from "react-icons/go";

type ExpandableItemProps = {
  title: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
};

const ExpandableItem = ({ title, description, isExpanded, onToggle }: ExpandableItemProps) => {
  return (
    <div className="expandable-item">
      <div className="item-header" onClick={onToggle}>
        <div className="item-title">
          <Title title={title} />
        </div>
        <span className={`item-arrow ${isExpanded ? "expanded" : ""}`}>
          <GoArrowRight />
        </span>
      </div>
      {isExpanded && (
        <div className="item-description">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableItem;
