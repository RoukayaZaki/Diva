import { Link } from "react-router-dom";
import "../assets/styles/button.css";

function Button() {
  return (
    <button className="cta-button">
      <Link to="/contact">BOOK YOUR COMPLEMENTARY CONSULTATION</Link>
    </button>
  );
}

export default Button;
