import React, { useState, useRef, useEffect, memo } from 'react';
import './SlideshowTop.css';
import AutoPlayVideo  from "../AutoPlayVideo/AutoPlayVideo "

const DURATION = 34000;

const InfiniteLoopSlider = memo(({ children, duration, direction }) => {
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    const updateWidth = () => {
      if (slider) {
        setSliderWidth(slider.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [children]);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;

      const translateX = direction === 'right'
        ? -progress * sliderWidth
        : -(1 - progress) * sliderWidth;

      slider.style.transform = `translateX(${translateX}px)`;

      if (elapsed >= duration) {
        startTime = timestamp;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, direction, sliderWidth]);

  return (
    <div className='loop-slider' style={{ overflow: 'hidden' }}>
      <div className='inner' ref={sliderRef} style={{ display: 'flex' }}>
        {children}
        {children}
      </div>
    </div>
  );
});
const ImageSlide = memo(({ src, title, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => setIsLoaded(true);

  return (
    <div className='slide'>
         {src.endsWith('.mp4') ? (
        <AutoPlayVideo
          sources={[{ src: src }]}
          className="slide-media"
          style={{
            opacity: 0.5,
            backgroundColor: isLoaded ? 'transparent' : "#0b3e87",
          }}
        />
      ) : (
        <img
          preload
          src={src}
          alt={`slidetop ${title}`}
          className="slide-media"
          onLoad={handleLoad}
          style=
          {{ 
            opacity:  0.5 ,
            backgroundColor: isLoaded ? 'transparent' : "#0b3e87", 
          }}
      />
      )}
      {isLoaded && (
        <div className="slidetopoverlay">
          <p className="slidetopshow-container-title">{title}</p>
          <p className="slidetopshow-container-extra">{description}</p>
        </div>
      )}
    </div>
  );
});

const SliderTop = ({ images, direction }) => {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        images.slice(0, 10).map(async (img) => {
          if (img.src.endsWith('.mp4')) return img;
          return new Promise((resolve) => {
            const image = new Image();
            image.onload = () => resolve(img);
            image.src = img.src;
          });
        })
      );
      setVisibleImages(loadedImages);
    };

    loadImages();
  }, [images]);

  return (
    <div className='SliderTop'>
      <div className='slider-container'>
        <InfiniteLoopSlider duration={DURATION} direction={direction}>
          {visibleImages.map((img, index) => (
            <ImageSlide
              src={img.src}
              title={img.title}
              description={img.description}
              key={index}
            />
          ))}
        </InfiniteLoopSlider>
      </div>
    </div>
  );
};

export default SliderTop;