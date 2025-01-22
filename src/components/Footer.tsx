import "../assets/styles/footer.css";
import image1 from '../assets/images/footer/footer-1.jpg'
import image2 from '../assets/images/footer/footer-2.jpg'
const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">LET'S WORK TOGETHER</h1>
      <a href="/inquiry" className="footer-inquiry">SEND INQUIRY</a>
      <div className="footer-links">
        <div className="footer-column">
          <a href="/terms-of-service">TERMS OF SERVICE</a>
          <a href="/privacy-policy">PRIVACY POLICY</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer-images">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
        </div>
        <div className="footer-column">
          <a href="/contact">CONTACT</a>
          <a href="/blog-posts">BLOG POSTS</a>
          <a href="/portfolio">OUR PORTFOLIO</a>
        </div>
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-behance"></i>
        </a>
        <a href="mailto:email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
