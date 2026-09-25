import React, { useEffect, useState } from 'react';
import './ReviewSlider.css';

const testimonials = [
  {
    text: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
    name: "Cathy Lee",
    title: "Product Manager"
  },
  {
    text: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
    name: "David Wright",
    title: "Research Scientist"
  },
  {
    text: "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
    name: "Eva Green",
    title: "Operations Director"
  },
  // Add more testimonials as needed
];

const ReviewSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition - 1) % (testimonials.length * 320)); // 320px is the width of each card plus margin
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-slider-container Container-Spacing">
      <div className="review-slider" style={{ transform: `translateX(${position}px)` }}>
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ReviewSlider;
