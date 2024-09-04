import React, { useEffect, useRef, useState } from 'react';
import './LogoSlideshow.css';
import netflix from '../../assets/netflix.webp';
import google from '../../assets/google.webp';
import onlyfans from '../../assets/onlyfans.webp';
import meta from '../../assets/meta3.png';

const logos = [
  { src: netflix, className: 'logo-netflix' },
  { src: google, className: 'logo-google' },
  { src: meta, className: 'logo-meta' },
  { src: onlyfans, className: 'logo-onlyfans' },
  { src: netflix, className: 'logo-netflix' },
  { src: google, className: 'logo-google' },
  { src: meta, className: 'logo-meta' },
  { src: onlyfans, className: 'logo-onlyfans' },
  { src: netflix, className: 'logo-netflix' },
  { src: google, className: 'logo-google' },
  { src: meta, className: 'logo-meta' },
  { src: onlyfans, className: 'logo-onlyfans' },
  { src: netflix, className: 'logo-netflix' },
  { src: google, className: 'logo-google' },
  { src: meta, className: 'logo-meta' },
  { src: onlyfans, className: 'logo-onlyfans' },
];

const LogoSlideshow = () => {
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const trackRef = useRef(null);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const logoWidth = track.children[0].offsetWidth;
    const totalWidth = logoWidth * logos.length;

    let animationId;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.7;
        if (newPosition <= -totalWidth) {
          return 0;
        }
        return newPosition;
      });
    };

    if (isVisible) {
      animationId = requestAnimationFrame(function animation() {
        animate();
        animationId = requestAnimationFrame(animation);
      });
    }

    return () => cancelAnimationFrame(animationId);
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (slideshowRef.current) {
      observer.observe(slideshowRef.current);
    }

    return () => {
      if (slideshowRef.current) {
        observer.unobserve(slideshowRef.current);
      }
    };
  }, []);

  const tripleLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-slideshow-container11 Container-Spacing-Lg element" ref={slideshowRef}>
      <div className="logo-slideshow-container">
        <h2>Trusted by big industries</h2>
        <div
          className="logo-slideshow"
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
        >
          {tripleLogos.map((logo, index) => (
            <img
              loading="lazy"
              key={index}
              src={logo.src}
              alt={`Logo ${index + 1}`}
              className={`logo ${logo.className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlideshow;
