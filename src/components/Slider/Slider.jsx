import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';


const Slider = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const images = [
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Comedy Reels-DEbXlLpl.png", title: 'Felix', description: 'Comedy Reels' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Cooking Youtube-BBUomc_9.png", title: 'Jane', description: 'Cooking Youtuber' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Crypto Shorts-D_nE0xtX.png", title: 'Max', description: 'Crypto Shorts' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/DIY Youtube-K_qqiXen.png", title: 'Emma', description: 'DIY Youtuber' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Ecom Affiliate-DarCuoO9.png", title: 'Liam', description: 'Ecom Affiliate' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/facebook short-BfKl-8lo.png", title: 'Sophia', description: 'Facebook Short' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Finance _ Investment Reels-ZJPLBh0f.png", title: 'Lucas', description: 'Finance & Investment Reels' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Gambaling Affilate-X8QwuSo1.png", title: 'Noah', description: 'Gambling Affiliate' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Fitness Affiliate-Dfkp4T5U.png", title: 'Mia', description: 'Fitness Affiliate' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Gambaling Affilate-X8QwuSo1.png", title: 'Olivia', description: 'Gambling Affiliate' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Gambaling Affilate-X8QwuSo1.png", title: 'Ethan', description: 'Gaming Reels' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Influncer -CuRdbXMl.png", title: 'Ava', description: 'Influencer' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Ecom Affiliate-DarCuoO9.png", title: 'Alexander', description: 'Prank Youtuber' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Prohibited Industries-Dw9iO4Ar.png", title: 'Isabella', description: 'Prohibited Industries' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Real estate shorts-DMnWXl6c.png", title: 'James', description: 'Real Estate Shorts' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Streaming Shorts-CgRvd7id.png", title: 'Amelia', description: 'Streaming Shorts' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Tech Review Shorts-BjRzJc8Z.png", title: 'William', description: 'Tech Review Shorts' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/TikTok Affiliate-Dka6IhO3.png", title: 'Charlotte', description: 'TikTok Affiliate' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/TikTok Shop-DzxUHX-e.png", title: 'Benjamin', description: 'TikTok Shop' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Traval Tiktok-fIqPFtPJ.png", title: 'Elijah', description: 'Travel Tiktok' },
    { src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Youtube Influncer-BCikUbZm.png", title: 'Harper', description: 'Youtube Influencer' }
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
