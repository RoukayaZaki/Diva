import { useState } from 'react';
import '../assets/styles/hamburger.css';
import { Link } from 'react-router-dom';
// import { Squash as Hamburger } from 'hamburger-react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
// import hamburgerimg from '../../public/images/hamburger.png'


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <button title='hamburger-icon' className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                {!isOpen && <RxHamburgerMenu />}
                {isOpen && <RiCloseLargeFill color='var(--cream)' />}

            </button>
            {isOpen &&

                <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                    <div className='hamburger-content'>
                        <img src="public/images/hamburger.png" alt="" />
                        <div className='hamburger-menu-links-section1'>
                            <Link to="/">HOME</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/blogs">BLOGS</Link>
                        </div>
                        <div className='hamburger-menu-links-section2'>

                            <Link to="/terms">TERMS</Link>
                            <Link to="/contact">CONTACT</Link>
                            <Link to="/portfolio">PORTFOLIO</Link>
                            <Link to="/services">SERVICES</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default HamburgerMenu;