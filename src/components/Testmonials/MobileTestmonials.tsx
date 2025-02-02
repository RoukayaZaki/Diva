import { useState } from 'react';
import '../../assets/styles/testmonials.css';
import testimonials from '../../assets/data/testimonials.json';
import Title from '../Title';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

const MobileTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className={`testimonial-container ${currentIndex % 2 === 0 ? 'even' : 'odd'}`}>

            <div className='home-testimonial-header'>
                <Title title="Clients" />
                <h1>Love & Testimonials</h1>
            </div>

            <div className="testimonial-content">
                <div className='testimonial-quote'>

                    <p className='middle-testimonial-quote'>"{currentTestimonial.text}"</p>

                </div>
                <div className="testimonial-author">
                    <span>{currentTestimonial.author}</span>
                    <span>{currentTestimonial.title}</span>
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="testimonial-dots ">
                <button className='left-testimonial-quote' onClick={handlePrev} title='prev-testimonial'>
                    <GoArrowLeft />
                </button>
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? (currentIndex % 2 === 0 ? 'even' : 'odd') : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
                <button className='right-testimonial-quote' onClick={handleNext} title='next-testimonial'>
                    <GoArrowRight />
                </button>
            </div>
        </div>
    );
};

export default MobileTestimonial;
