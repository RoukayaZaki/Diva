const benefits = [
    {
      id: "01",
      title: "COMPETITIVE SALARY",
      description: "We offer a competitive salary package that reflects your skills and experience.",
    },
    {
      id: "02",
      title: "Flexible Work Arrangements",
      description: "Options for remote work and flexible schedules to promote work-life balance.",
      italic: true,
    },
    {
      id: "03",
      title: "PROFESSIONAL GROWTH",
      description: "Enjoy huge opportunities for continuous learning and career advancement.",
    },
  ];


function Benefits() {
    return (
        <section className="benefits-section">
            <div className="benefits-title">
                <h2>
                    Employee &nbsp;
                </h2>
                <h1>
                    Benefits
                </h1>
            </div>

            <div className="benefits-container">
                {benefits.map((benefit) => (
                    <div key={benefit.id} className="benefit-card">
                        <span className="benefit-id">{benefit.id}</span>
                        <h3 className={`benefit-title ${benefit.italic ? "italic" : ""}`}>
                            {benefit.title}
                        </h3>
                        <p className="benefit-description">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Benefits;