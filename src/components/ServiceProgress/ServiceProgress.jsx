import React, { useState, useEffect, useRef } from 'react';
import './ServiceProgress.css';

const ServiceProgress = ({ targetRef }) => {
  const [scrollProgress, setScrollProgress] = useState([0, 0, 0]);
  const containerRef = useRef(null);
  const scalingFactor = 0.6; // Adjust this factor to slow down the scroll

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current && containerRef.current) {
        const targetElement = targetRef.current;
        const containerElement = containerRef.current;
        const containerHeight = containerElement.getBoundingClientRect().height;
        const targetRect = targetElement.getBoundingClientRect();
        const targetTop = targetRect.top + window.scrollY;
        const targetHeight = targetRect.height;

        const scrollTop = window.scrollY;
        const scrollBottom = scrollTop + window.innerHeight;

        // Define start and end positions for each progress bar
        const barRanges = [
          { start: targetTop + 0.1 * containerHeight, end: targetTop + 0.3 * containerHeight },
          { start: targetTop + 0.4 * containerHeight, end: targetTop + 0.6 * containerHeight },
          { start: targetTop + 0.7 * containerHeight, end: targetTop + targetHeight }
        ];

        const newScrollProgress = [0, 0, 0];

        barRanges.forEach((range, index) => {
          if (scrollBottom > range.start && scrollTop < range.end) {
            const progress = Math.min(100, ((scrollBottom - range.start) / (range.end - range.start)) * scalingFactor * 100);
            newScrollProgress[index] = progress;
          }
        });

        setScrollProgress(newScrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetRef]);

  useEffect(() => {
    if (targetRef.current) {
      const targetHeight = targetRef.current.getBoundingClientRect().height;
      containerRef.current.style.height = `${targetHeight}px`;
    }
  }, [targetRef]);

  const getProgressBarHeight = (index) => {
    return `${scrollProgress[index]}%`;
  };

  return (
    <div
      className="responsive-width"
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {scrollProgress.map((_, index) => (
        <div
          key={index}
          style={{
            position: 'sticky',
            top: `${index * 100}px`, // Adjust the offset as needed
            width: '1px',
            height: '100%',
            backgroundColor: 'rgba(20, 110, 255, 0.2)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: getProgressBarHeight(index),
              backgroundColor: '#0077B6',
              transition: 'height 0.1s',
              position: 'relative',
              boxShadow: '0 0 10px #0077B6',
            }}
          >
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translate(-50%, 50%)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#0077B6',
                boxShadow: '0 0 10px #0077B6',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProgress;
