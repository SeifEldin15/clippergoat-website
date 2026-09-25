import React, { useEffect, useState, useRef } from 'react';
import './ReviewSliderRight.css';

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

const ReviewSliderRight = () => {
  const [position, setPosition] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalWidth = carousel.scrollWidth;
    const visibleWidth = carousel.offsetWidth;

    setPosition(-totalWidth + visibleWidth);

    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition > 0 ? -totalWidth + visibleWidth : newPosition;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-carousel-wrapper">
      <div 
        ref={carouselRef}
        className="testimonial-carousel" 
        style={{ transform: `translateX(${position}px)` }}
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-content">{testimonial.text}</p>
            <div className="testimonial-footer">
              <div className="testimonial-avatar"></div>
              <div className="testimonial-details">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-position">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSliderRight;
