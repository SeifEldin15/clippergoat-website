import React, { useState, useRef, useEffect, memo } from 'react';
import './SlideshowTop.css';

const DURATION = 40000;

const InfiniteLoopSlider = memo(({ children, duration, direction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;

    const animate = () => {
      const progress = (performance.now() % duration) / duration;
      const translateX = direction === 'right' 
        ? -25 + progress * 25 
        : -progress * 25;
      
      slider.style.transform = `translateX(${translateX}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, direction]);

  return (
    <div className='loop-slider'>
      <div className='inner' ref={sliderRef}>
        {children}
        {children}
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
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="slide-media"
          onLoadedData={handleLoad}
          style={{ opacity: isLoaded ? 0.5 : 0 }}
        />
      ) : (
        <img
          loading=""
          src={src}
          alt={`slidetop ${title}`}
          className="slide-media"
          onLoad={handleLoad}
          style={{ opacity: isLoaded ? 0.5 : 0 }}
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