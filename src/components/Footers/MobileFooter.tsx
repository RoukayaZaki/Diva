import "../../assets/styles/footer.css";
import { Link } from "react-router-dom";

import image1 from '../../assets/images/footer/footer-1.jpg'
import image2 from '../../assets/images/footer/footer-2.jpg'

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaBehance, FaPinterestP } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { TbBrandDribbbleFilled, TbMailFilled } from 'react-icons/tb'

function MobileFooter() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <footer className="footer">
            <h1 className="footer-title">LET'S WORK TOGETHER</h1>
            <Link to="/contact" onClick={handleClick} className="footer-inquiry">SEND INQUIRY</Link>
            <div className="footer-images">
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <Link to="/terms" onClick={handleClick}>TERMS OF SERVICE</Link>
                    <Link to="/policy" onClick={handleClick}>PRIVACY POLICY</Link>
                    <Link to="/faq" onClick={handleClick}>FAQ</Link>
                </div>
                <div className="footer-column">
                    <Link to="/contact" onClick={handleClick}>CONTACT</Link>
                    <Link to="/blogs" onClick={handleClick}>BLOG POSTS</Link>
                    <Link to="/portfolio" onClick={handleClick}>OUR PORTFOLIO</Link>
                </div>
            </div>

            <div className="footer-socials">
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                    <TbBrandDribbbleFilled color="#F1EFE7" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF color="#F1EFE7" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill color="#F1EFE7" />
                </a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                    <FaBehance color="#F1EFE7" />
                </a>
                <a href="mailto:email@example.com">
                    <TbMailFilled color="#F1EFE7" />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FaPinterestP color="#F1EFE7" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn color="#F1EFE7" />
                </a>
            </div>
            <div className="footer-copyright-line"></div>
            <div className="footer-copyright">
                <p>Copyright © 2025 Diva Solutions | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default MobileFooter;
