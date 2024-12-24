import "../assets/styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">D</div>
                    <div className="footer-reach-us">
                        <h3>Reach Us</h3>
                        <p>11564, Riyadh, KSA</p>
                        <p>(+20) 102 955 2145</p>
                        <p><a href="mailto:info@thedivasolutions.com">info@thedivasolutions.com</a></p>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Navigate</h3>
                    <ul>
                        <li><a href="/">Home Page</a></li>
                        <li><a href="/about">About Diva</a></li>
                        <li><a href="/services">Our Services</a></li>
                        <li><a href="/portfolio">Our Portfolio</a></li>
                        <li><a href="/blogs">Blog Posts</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="/company">Company</a></li>
                        <li><a href="/what-we-do">What We Do</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/contact">Get in Touch</a></li>
                        <li><a href="/careers">Career</a></li>
                    </ul>
                </div>
                {/* <div className="footer-section">
                    <h3>Newsletter</h3>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Email address" />
                        <button type="submit">→</button>
                    </form>
                </div> */}
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 Diva Solutions | All rights reserved.</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-behance"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
