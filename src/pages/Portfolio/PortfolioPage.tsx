import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../assets/styles/portfolio.css';
// import img1 from '/public/images/portfolio/main/Rectangle.png';
// import img2 from '/public/images/portfolio/main/';
import Title from "../../components/Title";
import PortfolioGallery from "../../components/PortfolioGallery";

function PortfolioPage() {
  return (
    <>
      <Header />

      <div className="portfolio-born-to-container">
        {/* Left section */}
        <div className="portfolio-left-section">
          <div className="portfolio-title-block">
              <Title title='BORN TO _'/>
            
          </div>
          <div className="portfolio-downleftside">

            <div className="portfolio-perfect-block">
              <p className="portfolio-italic">PERFECT</p>
              <p className="portfolio-bold">BUILD</p>
              <p className="portfolio-bold">TO LAST</p>
            </div>
            <div className="portfolio-text-and-image">
              <img src="/images/portfolio/main/Rectangle (1).png" alt="Hand with card" className="portfolio-card-image" />
              <p className="portfolio-description">
                Every visual we create is more than just an image—it's a signature of timeless
                elegance and bold storytelling. We blend precision!
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="portfolio-right-section">
          <img src='/images/portfolio/main/Rectangle.png' alt="Red bag" className="portfolio-bag-image" />
          {/* <div className="portfolio-arrow-down">↓</div> */}
        </div>
      </div>

      <PortfolioGallery />

      <Footer />
    </>
  );
}

export default PortfolioPage;