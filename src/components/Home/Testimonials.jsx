import React, { useState } from 'react';
import './Testimonials.css';
import Star from '../../assets/Star.png';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import city1 from '../../assets/City1.png'
import city2 from '../../assets/City2.png'

const testimonials = [
  {
    image: 'https://i.imgur.com/jX97M9b.jpg',
    name: 'James Darwin',
    location: 'Kolkata, West Bengal',
    text: 'Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.',
    rating: 5,
  },
  {
    image: 'https://i.imgur.com/NuO7bfI.jpg',
    name: 'Emily Johnson',
    location: 'Mumbai, Maharashtra',
    text: 'MyFastX has allowed me to balance my work and personal life better than ever before.',
    rating: 4,
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="testimonial-image"
        />
        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonials[current].name}</h3>
          <p className="testimonial-location">{testimonials[current].location}</p>
        </div>
      </div>
      <div className="testimonial-body">
        <p className="testimonial-text">"{testimonials[current].text}"</p>
        <div className="testimonial-rating">
          {[...Array(testimonials[current].rating)].map((_, i) => (
            <img width="22px" key={i} src={Star} alt="Star" />
          ))}
          {[...Array(5 - testimonials[current].rating)].map((_, i) => (
            <i key={i} className="far fa-star"></i>
          ))}
        </div>
        <div className="testimonial-pagination">
          <div>
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`testimonial-pagination-dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              ></div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            <div className="testimonial-button" onClick={handlePrev}><GrFormPrevious /></div>
            <div className="testimonial-button" onClick={handleNext}><GrFormNext /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-left">
        <div className="testimonials-header">
          <div className="testimonials-subheader">
            <h4>What our partner says</h4>
          </div>
          <h2>Testimonials</h2>
        </div>
        <p className='test-des'>
        At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services
        </p>
        <div className='footer-image-container' style={{marginBlockStart:"2rem"}}>
            <img src={city1}/>
            <img src={city2}/>
        </div>
        <div className='horizontal-line'></div>
                

       
      </div>


      <div className="testimonials-right">
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
