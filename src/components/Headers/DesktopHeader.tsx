import { Link } from "react-router-dom";
import Title from "../Title";
import "../../assets/styles/header.css";
import Button from "../Button";

function DesktopHeader() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <Button />
            <header className="header">

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/about" onClick={handleClick}>About</Link></li>
                        <li className="nav-item"><Link to="/services" onClick={handleClick}>Services</Link></li>
                        <li className="nav-item"><Link to="/contact" onClick={handleClick}>Contact</Link></li>
                        <li className="nav-item"><Link to="/terms" onClick={handleClick}>Terms</Link></li>
                        <li className="nav-item title"><Link to="/" onClick={handleClick}><Title title="Diva" /></Link></li>
                        <li className="nav-item"><Link to="/careers" onClick={handleClick}>Careers</Link></li>
                        <li className="nav-item"><Link to="/faq" onClick={handleClick}>FAQ</Link></li>
                        <li className="nav-item"><Link to="/blogs" onClick={handleClick}>Blogs</Link></li>
                        <li className="nav-item"><Link to="/portfolio" onClick={handleClick}>Portfolio</Link></li>
                    </ul>
                </nav>
            </header>

        </>
    );
}

export default DesktopHeader;
