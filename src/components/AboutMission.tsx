import "../assets/styles/aboutmission.css";

function AboutMission() {
  return (
    <section className="about-mission-container">
      <div className="about-mission-content">
        <div className="about-mission">
          <div className="about-mission-image about-mission-image-left">
            <div className="about-mission-text-box">
                Diva’s Unique Mission to Elevate Brands...
              {/* <h2 className="about-mission-title">
              </h2> */}
            </div>
          </div>
          <div className="about-mission-right-section">
            <div className="about-mission-image about-mission-image-right" />
            <div className="about-mission-description">
              Our mission is to craft bespoke solutions that captivate audiences
              and elevate brands. With a passion for design, sophistication,
              confidence, and precision, we meticulously curate brand narratives
              infused with finesse and elegance. Our goal is to ensure that
              every story we tell serves as a testament to luxury and
              refinement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMission;
