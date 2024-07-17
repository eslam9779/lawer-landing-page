import React from 'react';
import './testimonial.css';
import Reviews from '../../Assets/Reviews.png';
import quote from '../../Assets/quote.png';
import user from '../../Assets/User.png';
import user1 from '../../Assets/User (1).png';
import user2 from '../../Assets/User (2).png';
import user3 from '../../Assets/User (3).png';
import user4 from '../../Assets/User (4).png';
import user5 from '../../Assets/User (5).png';
import { Carousel } from 'react-bootstrap';

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const Testimonial = () => {
    let testimonials = [
        {
            personimage: user,
            paragraph: "“Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended.”",
            reviewImg: Reviews,
        },
        {
            personimage: user1,
            paragraph: "“Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended.”",
            reviewImg: Reviews,
        },
        {
            personimage: user2,
            paragraph: "“Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended.”",
            reviewImg: Reviews,
        },
        {
            personimage: user3,
            paragraph: "“Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended.”",
            reviewImg: Reviews,
        },
        {
            personimage: user4,
            paragraph: "“Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended.”",
            reviewImg: Reviews,
        },
        {
            personimage: user5,
            paragraph: "“Mingers Law Firm is the go-to legal partner for all our business needs. Highly recommended.”",
            reviewImg: Reviews,
        },
    ];

    const chunkedTestimonials = chunkArray(testimonials, 3);

    return (
        <div className='testimonial container'>
            <div className='testimonial_header'>
                <h1>Satisfied Clients</h1>
                <p>
                    Discover the valuable feedback and testimonials from our satisfied
                    clients about their experiences with us.
                </p>
            </div>

            <div className='testimonial_slider mt-4'>
                <Carousel>
                    {chunkedTestimonials.map((chunk, index) => (
                        <Carousel.Item key={index}>
                            <div className='testimonial_card_container'>
                                {chunk.map((item, idx) => (
                                    <div className='testimonial_card' key={idx}>
                                        <div className='review_img'>
                                            <img src={item.reviewImg} alt="Review stars" />
                                        </div>
                                        <p>{item.paragraph}</p>
                                        <div className='testimonial_card_writer'>
                                            <div>
                                                <img src={item.personimage} alt="User" />
                                            </div>
                                            <div>
                                                <img src={quote} alt="Quote" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonial;
