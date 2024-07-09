import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.css';

import BgImage from '../../assets/test/Home.svg';

const testimonials = [
    {
        name: 'Jane Smith',
        feedback: 'The experience with Landmark Homes was outstanding from start to finish. The attention to detail and commitment to quality were evident in every aspect of our new home. Highly recommend them!'
    },
    {
        name: 'John Doe',
        feedback: 'The experience with Landmark Homes was outstanding from start to finish. The attention to detail and commitment to quality were evident in every aspect of our new home. Highly recommend them!'
    },
    {
        name: 'Emily Johnson',
        feedback: 'Landmark Homes exceeded our expectations in every way. The team was professional, knowledgeable, and dedicated to making our dream home a reality. We are thrilled with the results.'
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>Customer Appreciations</h2>
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                items={3}
                dots={false}
                autoplay
                autoplayTimeout={3000}
                responsive={{
                    0: {
                        items: 1,
                        nav: false,
                    },
                    600: {
                        items: 2,
                        nav: false,
                    },
                    1000: {
                        items: 3,
                        nav: false,
                    }
                }}
            >
                {testimonials.map((testimonial, index) => (

                    <div key={index} className="testimonial-card">
                        <h3>{testimonial.name}</h3>
                        <p>"{testimonial.feedback}"</p>
                        <img src={BgImage} alt={testimonial.name} className='bg-image' loading="lazy" />
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default Testimonials;
