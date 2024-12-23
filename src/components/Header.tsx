import { Link } from "react-router-dom";
import Title from "./Title";
import "../assets/styles/header.css"; 

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/services">Services</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                    <li className="nav-item"><Link to="/terms">Terms</Link></li>
                    <li className="nav-item title"><Link to="/"><Title title="Diva" /></Link></li>
                    <li className="nav-item"><Link to="/careers">Careers</Link></li>
                    <li className="nav-item"><Link to="/faq">FAQ</Link></li>
                    <li className="nav-item"><Link to="/blogs">Blogs</Link></li>
                    <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
