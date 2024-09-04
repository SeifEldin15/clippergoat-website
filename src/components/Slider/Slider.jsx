import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';


const Slider = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const images = [
    { src: "../../assets/sliders/Comedy Reels-DEbXlLpl.png", title: 'Felix', description: 'Comedy Reels' },
    { src: "../../assets/sliders/Cooking Youtube-BBUomc_9.png", title: 'Jane', description: 'Cooking Youtuber' },
    { src: "../../assets/sliders/Crypto Shorts-D_nE0xtX.png", title: 'Max', description: 'Crypto Shorts' },
    { src: "../../assets/sliders/DIY Youtube-K_qqiXen.png", title: 'Emma', description: 'DIY Youtuber' },
    { src: "../../assets/sliders/Ecom Affiliate-DarCuoO9.png", title: 'Liam', description: 'Ecom Affiliate' },
    { src: "../../assets/sliders/facebook short-BfKl-8lo.png", title: 'Sophia', description: 'Facebook Short' },
    { src: "../../assets/sliders/Finance _ Investment Reels-ZJPLBh0f.png", title: 'Lucas', description: 'Finance & Investment Reels' },
    { src: "../../assets/sliders/Gambaling Affilate-X8QwuSo1.png", title: 'Noah', description: 'Gambling Affiliate' },
    { src: "../../assets/sliders/Fitness Affiliate-Dfkp4T5U.png", title: 'Mia', description: 'Fitness Affiliate' },
    { src: "../../assets/sliders/Gambaling Affilate-X8QwuSo1.png", title: 'Olivia', description: 'Gambling Affiliate' },
    { src: "../../assets/sliders/Gambaling Affilate-X8QwuSo1.png", title: 'Ethan', description: 'Gaming Reels' },
    { src: "../../assets/sliders/Influncer -CuRdbXMl.png", title: 'Ava', description: 'Influencer' },
    { src: "../../assets/sliders/Ecom Affiliate-DarCuoO9.png", title: 'Alexander', description: 'Prank Youtuber' },
    { src: "../../assets/sliders/Prohibited Industries-Dw9iO4Ar.png", title: 'Isabella', description: 'Prohibited Industries' },
    { src: "../../assets/sliders/Real estate shorts-DMnWXl6c.png", title: 'James', description: 'Real Estate Shorts' },
    { src: "../../assets/sliders/Streaming Shorts-CgRvd7id.png", title: 'Amelia', description: 'Streaming Shorts' },
    { src: "../../assets/sliders/Tech Review Shorts-BjRzJc8Z.png", title: 'William', description: 'Tech Review Shorts' },
    { src: "../../assets/sliders/TikTok Affiliate-Dka6IhO3.png", title: 'Charlotte', description: 'TikTok Affiliate' },
    { src: "../../assets/sliders/TikTok Shop-DzxUHX-e.png", title: 'Benjamin', description: 'TikTok Shop' },
    { src: "../../assets/sliders/Traval Tiktok-fIqPFtPJ.png", title: 'Elijah', description: 'Travel Tiktok' },
    { src: "../../assets/sliders/Youtube Influncer-BCikUbZm.png", title: 'Harper', description: 'Youtube Influencer' }
  ];
  
  
  const tripleImages = [...images, ...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    const slideWidth = track.children[0].offsetWidth;
    const totalWidth = slideWidth * images.length;

    const animate = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.7; 
        if (newPosition <= -totalWidth) {
          return 0;
        }
        return newPosition;
      });
    };

    const animationId = requestAnimationFrame(function animation() {
      animate();
      requestAnimationFrame(animation);
    });

    return () => cancelAnimationFrame(animationId);
  }, [images.length]);

  return (
    <div className="slideshow-container212 ">
     
      <div className="slideshow-track-container">
        <div
          className="slideshow-track212 Container-Spacing"
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
        >
          {tripleImages.map((image, index) => (
            <div key={index} className="slide212">
              <p className="slideshow-container-title">{image.title}</p>
              <p className="slideshow-container-desc">{image.description}</p>
              <div className="slide-content212">
                <div className="slideoverlay"></div>
                <img 
                loading="lazy"                
                src={image.src} alt={`Slide212 ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
