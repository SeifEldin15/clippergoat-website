import React, { useEffect, useRef, useState, useMemo } from 'react';
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
];

const LogoSlideshow = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);

  // Memoize the tripled logos array
  const tripleLogos = useMemo(() => [...logos, ...logos, ...logos], []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const logoWidth = track.children[0].offsetWidth;
    const totalWidth = logoWidth * logos.length;
    let animationId;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.7;
        return newPosition <= -totalWidth ? 0 : newPosition;
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="logo-slideshow-container11 Container-Spacing-Lg element">
      <div className="logo-slideshow-container">
        <h2>Trusted by big industries</h2>
        <div
          className="logo-slideshow"
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
        >
          {tripleLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={`Logo ${index % logos.length + 1}`}
              className={`logo ${logo.className}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlideshow;