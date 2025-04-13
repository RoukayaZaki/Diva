import { useState, useEffect } from 'react';
import '../assets/styles/hamburger.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaBehance, FaPinterestP } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { TbBrandDribbbleFilled, TbMailFilled } from 'react-icons/tb'
import Title from './Title';
// import { HiMail } from 'react-icons/hi'
function HamburgerMenu() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button title='hamburger-icon' className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {!isOpen ? <RxHamburgerMenu /> : <RiCloseLargeFill color='var(--cream)' />}
            </button>
            {isOpen && (
                <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                    <div className='hamburger-content'>
                        <div className="hamburger-image-wrapper">
                            <img src="public/images/hamburger.png" alt="Menu" className="hamburger-image" />
                            <h1 className="hamburger-overlay-text">
                               <Title title="DIVA" />
                            </h1>
                        </div>
                        {/* <img src="public/images/hamburger.png" alt="Menu" /> */}
                        <div className='hamburger-menu-links-section1'>
                            <Link to="/" onClick={handleClick} >HOME</Link>
                            <Link to="/about" onClick={handleClick} >ABOUT</Link>
                            <Link to="/blogs" onClick={handleClick} >BLOGS</Link>
                        </div>
                        <div className='hamburger-menu-links-section2'>
                            <Link to="/terms" onClick={handleClick} >TERMS</Link>
                            <Link to="/contact" onClick={handleClick} >CONTACT</Link>
                            <Link to="/portfolio" onClick={handleClick} >PORTFOLIO</Link>
                            <Link to="/services" onClick={handleClick} >SERVICES</Link>
                        </div>
                        <div className="hamburger-footer-socials">
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default HamburgerMenu;
