import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

// Import images
import ComedyReels from '../../assets/sliders/Comedy Reels-DEbXlLpl.png';
import CookingYoutube from '../../assets/sliders/Cooking Youtube-BBUomc_9.png';
import CryptoShorts from '../../assets/sliders/Crypto Shorts-D_nE0xtX.png';
import DIYYoutube from '../../assets/sliders/DIY Youtube-K_qqiXen.png';
import EcomAffiliate from '../../assets/sliders/Ecom Affiliate-DarCuoO9.png';
import FacebookShort from '../../assets/sliders/facebook short-BfKl-8lo.png';
import FinanceInvestmentReels from '../../assets/sliders/Finance _ Investment Reels-ZJPLBh0f.png';
import GamblingAffiliate from '../../assets/sliders/Gambaling Affilate-X8QwuSo1.png';
import FitnessAffiliate from '../../assets/sliders/Fitness Affiliate-Dfkp4T5U.png';
import Influncer from '../../assets/sliders/Influncer -CuRdbXMl.png';
import ProhibitedIndustries from '../../assets/sliders/Prohibited Industries-Dw9iO4Ar.png';
import RealEstateShorts from '../../assets/sliders/Real estate shorts-DMnWXl6c.png';
import StreamingShorts from '../../assets/sliders/Streaming Shorts-CgRvd7id.png';
import TechReviewShorts from '../../assets/sliders/Tech Review Shorts-BjRzJc8Z.png';
import TikTokAffiliate from '../../assets/sliders/TikTok Affiliate-Dka6IhO3.png';
import TikTokShop from '../../assets/sliders/TikTok Shop-DzxUHX-e.png';
import TravelTiktok from '../../assets/sliders/Traval Tiktok-fIqPFtPJ.png';
import YoutubeInfluncer from '../../assets/sliders/Youtube Influncer-BCikUbZm.png';

const Slider = () => {
  const [position, setPosition] = useState(0);
  const trackRef = useRef(null);
  const images = [
    { src: ComedyReels, title: 'Felix', description: 'Comedy Reels' },
    { src: CookingYoutube, title: 'Jane', description: 'Cooking Youtuber' },
    { src: CryptoShorts, title: 'Max', description: 'Crypto Shorts' },
    { src: DIYYoutube, title: 'Emma', description: 'DIY Youtuber' },
    { src: EcomAffiliate, title: 'Liam', description: 'Ecom Affiliate' },
    { src: FacebookShort, title: 'Sophia', description: 'Facebook Short' },
    { src: FinanceInvestmentReels, title: 'Lucas', description: 'Finance & Investment Reels' },
    { src: GamblingAffiliate, title: 'Noah', description: 'Gambling Affiliate' },
    { src: FitnessAffiliate, title: 'Mia', description: 'Fitness Affiliate' },
    { src: GamblingAffiliate, title: 'Olivia', description: 'Gambling Affiliate' },
    { src: GamblingAffiliate, title: 'Ethan', description: 'Gaming Reels' },
    { src: Influncer, title: 'Ava', description: 'Influencer' },
    { src: EcomAffiliate, title: 'Alexander', description: 'Prank Youtuber' },
    { src: ProhibitedIndustries, title: 'Isabella', description: 'Prohibited Industries' },
    { src: RealEstateShorts, title: 'James', description: 'Real Estate Shorts' },
    { src: StreamingShorts, title: 'Amelia', description: 'Streaming Shorts' },
    { src: TechReviewShorts, title: 'William', description: 'Tech Review Shorts' },
    { src: TikTokAffiliate, title: 'Charlotte', description: 'TikTok Affiliate' },
    { src: TikTokShop, title: 'Benjamin', description: 'TikTok Shop' },
    { src: TravelTiktok, title: 'Elijah', description: 'Travel Tiktok' },
    { src: YoutubeInfluncer, title: 'Harper', description: 'Youtube Influencer' }
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
