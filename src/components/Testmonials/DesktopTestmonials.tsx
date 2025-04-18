import { useState } from 'react';
import '../../assets/styles/testmonials.css';
import testimonials from '../../assets/data/testimonials.json';
import Title from '../Title';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

const DesktopTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };


    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className={`testimonial-container ${currentIndex % 2 === 0 ? 'even' : 'odd'}`}>

            <div className='home-testimonial-header'>
                <div className='home-testimonial-title'>

                 <Title title="Clients" />
                </div>
                <h1>Love & Testimonials</h1>
            </div>

            <div className="testimonial-content">
                <div className='testimonial-quote'>
                    <button className='left-testimonial-quote' onClick={handlePrev} title='prev-testimonial'>
                        <GoArrowLeft />
                    </button>
                    <p className='middle-testimonial-quote'>"{currentTestimonial.text}"</p>
                    <button className='right-testimonial-quote' onClick={handleNext} title='next-testimonial'>
                        <GoArrowRight />
                    </button>
                </div>
                <div className="testimonial-author">
                    <span className='testimonial-author-company'>{currentTestimonial.author}</span>
                    <span>{currentTestimonial.title}</span>
                </div>
            </div>


        </div>
    );
};

export default DesktopTestimonial;
