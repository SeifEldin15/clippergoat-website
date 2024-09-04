import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import './SlideshowTop.css';

const DURATION = 29000;

const InfiniteLoopSlider = memo(({ children, duration, direction }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start = performance.now();
    let animationFrameId;

    const animate = (time) => {
      const progress = ((time - start) % duration) / duration;
      const translateX = direction === 'right'
        ? -25 + progress * 25
        : -progress * 25;
      
      slider.style.transform = `translateX(${translateX}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration, direction]);

  return (
    <div className='loop-slider'>
      <div className='inner' ref={sliderRef}>
        {children}
        {children}
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children &&
         prevProps.duration === nextProps.duration &&
         prevProps.direction === nextProps.direction;
});

const ImageSlide = memo(({ src, title, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleLoad = useCallback(() => setIsLoaded(true), []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <div className={`slide ${isLoaded ? 'loaded' : 'loading'}`}>
      {src.endsWith('.mp4') ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="slide-media"
          onLoadedData={handleLoad}
        />
      ) : (
        <img
          src={src}
          alt={`slidetop ${title}`}
          className="slide-media"
          onLoad={handleLoad}
        />
      )}
      <div className="slidetopoverlay">
        <p className="slidetopshow-container-title">{title}</p>
        <p className="slidetopshow-container-extra">{description}</p>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.src === nextProps.src &&
         prevProps.title === nextProps.title &&
         prevProps.description === nextProps.description;
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

export default memo(SliderTop);
