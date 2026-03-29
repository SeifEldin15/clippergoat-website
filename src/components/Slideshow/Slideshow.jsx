import React, { useState, useRef, useEffect } from 'react';
import './Slideshow.css';

import imgAffiliateMarketing from '../../assets/sliders/TikTok Affiliate-Dka6IhO3.png';
import imgTikTokShop from '../../assets/sliders/TikTok Shop-DzxUHX-e.png';
import imgStreaming from '../../assets/sliders/Streaming Shorts-CgRvd7id.png';
import imgAgency from '../../assets/sliders/Youtube Influncer-BCikUbZm.png';
import imgComedy from '../../assets/sliders/Comedy Reels-DEbXlLpl.png';
import imgFood from '../../assets/sliders/Cooking Youtube-BBUomc_9.png';
import imgCrypto from '../../assets/sliders/Crypto Shorts-D_nE0xtX.png';
import imgDIY from '../../assets/sliders/DIY Youtube-K_qqiXen.png';
import imgEcommerce from '../../assets/sliders/Ecom Affiliate-DarCuoO9.png';
import imgFinance from '../../assets/sliders/Finance _ Investment Reels-ZJPLBh0f.png';
import imgFitness from '../../assets/sliders/Fitness Affiliate-Dfkp4T5U.png';
import imgGambling from '../../assets/sliders/Gambaling Affilate-X8QwuSo1.png';
import imgInfluencers from '../../assets/sliders/Influncer -CuRdbXMl (1).png';
import imgNoFace from '../../assets/sliders/facebook short-BfKl-8lo.png';
import imgProhibited from '../../assets/sliders/Prohibited Industries-Dw9iO4Ar.png';
import imgRealEstate from '../../assets/sliders/Real estate shorts-DMnWXl6c.png';
import imgTechReview from '../../assets/sliders/Tech Review Shorts-BjRzJc8Z.png';
import imgTravel from '../../assets/sliders/Traval Tiktok-fIqPFtPJ.png';


const slides = [
  {
    title: 'Affiliate Marketing',
    content: 'Enhance your campaigns with high-quality, repurposed videos. ClipperGoat helps you attract and convert more leads effectively.',
    image: imgAffiliateMarketing,
  },
  {
    title: 'TikTok Shop',
    content: 'Sharing product clips increases visibility and drives more sales.',
    image: imgTikTokShop,
  },
  {
    title: 'Streaming',
    content: 'Reposting highlights and clips boosts engagement and attracts more viewers.',
    image: imgStreaming,
  },
  {
    title: 'Agency & Course Owners',
    content: "Elevate your educational content and promotional materials with ClipperGoat's AI tools. Keep your training programs fresh and engaging by continuously updating your video content.",
    image: imgAgency,
  },
  {
    title: 'Comedy',
    content: 'Grows audience by sharing funniest stand-up bits, skits, and humorous moments, keeping followers entertained and engaged.',
    color: '#1f2937',
    image: imgComedy,
  },
  {
    title: 'Food Industries & Channels',
    content: 'Create mouth-watering recipe videos and cooking tutorials. Engage your audience and attract more followers with delicious content using ClipperGoat.',
    image: imgFood,
  },
  {
    title: 'Crypto',
    content: 'Attracts followers by highlighting market insights, investment tips, and significant trades, keeping the audience informed and engaged with timely and actionable financial content.',
    image: imgCrypto,
  },
  {
    title: 'DIY, Remodeling, Landscaping',
    content: 'Attracts new clients by showcasing how-to guides, before-and-after transformations, and client testimonials, demonstrating value and expertise in the service offered.',
    image: imgDIY,
  },
  {
    title: 'E-commerce',
    content: 'Drive traffic and boost sales with engaging product videos. Use ClipperGoat to create consistent, high-quality content for your online store.',
    color: '#1f2937',
    image: imgEcommerce,
  },
  {
    title: 'Finance & Investment',
    content: 'Provide valuable insights and investment tips through well-crafted videos. Keep your audience informed and engaged with ClipperGoat.',
    image: imgFinance,
  },
  {
    title: 'Fitness & Wellness',
    content: 'Keep your audience motivated by repurposing workout routines and wellness tips. ClipperGoat helps you maintain fresh and inspiring content.',
    image: imgFitness,
  },
  {
    title: 'Gambling',
    content: 'Engages audience by sharing big wins, betting strategies, and entertaining gameplay, creating excitement and drawing in viewers who are interested in the thrill of gambling.',
    image: imgGambling,
  },
  {
    title: 'Influencers',
    content: 'Maximize your online presence by repurposing your viral content. Stay relevant and engage your audience across all platforms with ClipperGoat.',
    color: '#1f2937',
    image: imgInfluencers,
  },
  {
    title: 'No Face Channels',
    content: "Create and edit videos without revealing your identity. Perfect for channels focusing on gaming, tutorials, and more, using ClipperGoat's AI capabilities.",
    image: imgNoFace,
  },
  {
    title: 'Prohibited Industries',
    content: 'Safely repurpose content to avoid restrictions and keep your audience engaged. ClipperGoat provides effective solutions for shadow-banned industries.',
    image: imgProhibited,
  },
  {
    title: 'Real Estate',
    content: 'Create stunning property tours and market updates. Attract more buyers and sellers with high-quality video content using ClipperGoat.',
    color: '#1f2937',
    image: imgRealEstate,
  },
  {
    title: 'Tech Review',
    content: 'Repurpose tech review videos and tutorials. Keep your content relevant and engaging for your tech-savvy audience with ClipperGoat',
    color: '#1f2937',
    image: imgTechReview,
  },
  {
    title: 'Travel',
    content: 'Repurpose travel footage and vlogs to keep your audience coming back for more adventures. Share your experiences through captivating videos.',
    image: imgTravel,
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const SlideshowRef = useRef(null);

  useEffect(() => {
    const updateMaxSlide = () => {
      if (SlideshowRef.current) {
        const containerWidth = SlideshowRef.current.clientWidth;
        const slideWidth = 320; 
        const visibleSlides = Math.floor(containerWidth / slideWidth);
        setMaxSlide(slides.length - visibleSlides);
      }
    };

    updateMaxSlide();
    window.addEventListener('resize', updateMaxSlide);

    return () => window.removeEventListener('resize', updateMaxSlide);
  }, []);

  const scrollToSlide = (index) => {
    const newIndex = Math.max(0, Math.min(index, maxSlide));
    setCurrentSlide(newIndex);
    if (SlideshowRef.current) {
      const slideWidth = 320; 
      SlideshowRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    scrollToSlide(currentSlide - 1);
  };

  const handleNext = () => {
    scrollToSlide(currentSlide + 1);
  };

  return (
    <div className="Slideshow-wrapper">
      <div className="Slideshow-Controls">
        <button onClick={handlePrev} className="Slideshow-Button" disabled={currentSlide === 0} aria-label="previous">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="Slideshow-Button" disabled={currentSlide === maxSlide} aria-label="next">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="Slideshow-container" ref={SlideshowRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`Slideshow-Slide ${index === currentSlide ? 'active2' : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <div className='Slideshowimgcontainer'>
              <img 
                loading="lazy"
                src={slide.image} alt={slide.title} className='Slideshowimg'/>
            </div>
            <div className="SlideShow-Overlay">
              <div className="slide-content2">
                <h2>{slide.title}</h2>
                <p className="Slideshow-Description">{slide.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;