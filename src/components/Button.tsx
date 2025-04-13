import { Link } from "react-router-dom";
import "../assets/styles/button.css";

function Button() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  return (
    <button className="cta-button">
      <Link to="/contact" onClick={handleClick}>BOOK YOUR COMPLEMENTARY CONSULTATION</Link>
    </button>
  );
}

export default Button;
