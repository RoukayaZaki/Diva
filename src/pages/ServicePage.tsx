import Footer from "../components/Footer";
import Header from "../components/Header";
import '../assets/styles/services.css';
import services from '../assets/data/servicesdata.json';
// import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import ServiceExpandableItem from "../components/ServiceExpandableItem";

interface Service {
    title: string;
    description: string;
    [key: string]: string[] | string | undefined;
}

const typedServices: Service[] = services;


function ServicePage() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    // const isMobile = useMediaQuery({ maxWidth: 1050 });
    return (
        <>
            <div className="hero-section-career">
                <Header />
                <div className="about-header">

                    <h1> Diva's&nbsp;</h1>
                    <h2>
                        Services
                    </h2>

                </div>
            </div>
            <p className="services-about">
                We pride ourselves on delivering perfection, sophistication, and elegance in every project we undertake. Our expertise spans across branding, design, and website development, ensuring that your brand stands out with a touch of class and innovation.
            </p>
            <div className="services-container">
                {/* <div className="services-header">
                    <h1> Our&nbsp;</h1>
                    <h2>
                        Expertise
                    </h2>
                </div> */}
                <div className="services-box">

                    {typedServices.map((item: Service, index: number) => (
                        <ServiceExpandableItem service={item} isExpanded={expandedIndex === index} onToggle={() => handleToggleExpand(index)} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ServicePage;