import React, { useRef, useState } from "react";
import "../assets/styles/portfolioGallery.css";
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { Link } from "react-router-dom";

interface GalleryItem {
    id: number;
    title: string;
    domain: string;
    category: string;
    imageUrl: string;
    spanTwoColumns: boolean;
}

const allCategories = [
    "All",
    "Brand Identity",
    "UI/UX Design",
    "Social Media & Content Creation",
    "Luxury Event Branding",
];

const PortfolioCategoryTabs: React.FC<{
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}> = ({ activeCategory, setActiveCategory }) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 5;

    const visibleCategories = allCategories.slice(startIndex, startIndex + visibleCount);
    const canScrollLeft = startIndex > 0;
    const canScrollRight = startIndex + visibleCount < allCategories.length;

    return (
        <div className="portfolio-tabs-wrapper">
            <button
                className="portfolio-arrow"
                onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
                disabled={!canScrollLeft}
                aria-label="Scroll categories left"
            >
                <GoArrowLeft />
            </button>

            <div className="portfolio-tabs">
                {visibleCategories.map((category) => (
                    <div
                        key={category}
                        className={`portfolio-tab-item ${activeCategory === category ? "portfolio-active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                        aria-current={activeCategory === category ? "true" : "false"}
                    >
                        {category}
                        {activeCategory === category && <div className="portfolio-active-underline" />}
                    </div>
                ))}
            </div>

            <button
                className="portfolio-arrow"
                onClick={() =>
                    setStartIndex((prev) =>
                        Math.min(prev + 1, allCategories.length - visibleCount)
                    )
                }
                disabled={!canScrollRight}
                aria-label="Scroll categories right"
            >
                <GoArrowRight />
            </button>
        </div>
    );
};

const PortfolioGallery: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const galleryRef = useRef<HTMLDivElement>(null);

    // Sample gallery data - replace with your actual data
    const galleryItems: GalleryItem[] = [
        { id: 1, title: "Brand Project", domain: "BRAND.COM", category: "Brand Identity", imageUrl: "/brand1.jpg", spanTwoColumns: false },
        { id: 2, title: "UI Project", domain: "UIEXAMPLE.COM", category: "UI/UX Design", imageUrl: "/ui1.jpg", spanTwoColumns: true },
        { id: 3, title: "Social Campaign", domain: "SOCIALMEDIA.COM", category: "Social Media & Content Creation", imageUrl: "/social1.jpg", spanTwoColumns: false },
        { id: 4, title: "Luxury Event", domain: "LUXURYEVENT.COM", category: "Luxury Event Branding", imageUrl: "/event1.jpg", spanTwoColumns: false },
        { id: 5, title: "Another Brand", domain: "ANOTHERBRAND.COM", category: "Brand Identity", imageUrl: "/brand2.jpg", spanTwoColumns: false },
        { id: 6, title: "Mobile App", domain: "MOBILEAPP.COM", category: "UI/UX Design", imageUrl: "/ui2.jpg", spanTwoColumns: true },
    ];

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="portfolio-gallery-container" ref={galleryRef}>
            <PortfolioCategoryTabs
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <div className="portfolio-gallery-grid">
                {filteredItems.map((item) => (
                    <Link to={`/project/${item.id}`}  className={`portfolio-gallery-item ${item.spanTwoColumns ? "portfolio-span-two" : ""}`}
                    style={{ gridColumn: item.spanTwoColumns ? 'span 2' : '' }}>
                        
                            <div className="portfolio-image-container">
                                <img
                                    src={item.imageUrl}
                                    alt={`${item.title} - ${item.domain}`}
                                    className="portfolio-image"
                                    loading="lazy"
                                />
                                <div className="portfolio-overlay">
                                    <h3 className="portfolio-title">{item.title}</h3>
                                    <p className="portfolio-domain">{item.domain}</p>
                                </div>
                            </div>
                       
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PortfolioGallery;