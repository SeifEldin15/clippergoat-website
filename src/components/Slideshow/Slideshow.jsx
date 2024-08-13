import React, { useState, useRef, useEffect } from 'react';
import './Slideshow.css';


const slides = [
  {
    
    title: 'Affiliate Marketing',
    content: 'Enhance your campaigns with high-quality, repurposed videos. ClipperGoat helps you attract and convert more leads effectively.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Affiliate Marketing-BXRAL6s_.webp"
  },
  {
    
    title: 'TikTok Shop',
    content: 'Sharing product clips increases visibility and drives more sales.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/TIKTOK SHOP-qBrs8Hvn.png"
  },
  {
    
    title: 'Streaming',
    content: 'Reposting highlights and clips boosts engagement and attracts more viewers.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/STREAMING -DZjOH9tO.png"
  },
  {
    
    title: 'Agency & Course Owners',
    content: 'Elevate your educational content and promotional materials with ClipperGoats AI tools. Keep your training programs fresh and engaging by continuously updating your video content.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/spencer__3_-THllFHyw.webp"
  },
  {
    
    title: 'Automotive',
    content: 'Showcase car reviews, maintenance tips, and automotive news. Keep your audience engaged with high-quality, informative videos using ClipperGoat.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Automotive -CJcH9mtA.webp"
  },
  {
    author: 'Marcus Perez',
    title: 'Comedy',
    content: 'Grows audience by sharing funniest stand-up bits, skits, and humorous moments, keeping followers entertained and engaged.',
    color: '#1f2937',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Comedy-DjlxDi2I.webp"
  },
  {
    
    title: 'Food Industries & Channels',
    content: 'Create mouth-watering recipe videos and cooking tutorials. Engage your audience and attract more followers with delicious content using ClipperGoat.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Cooking _ Food Review-BMHFI8pg.webp"
  },
  {
    
    title: 'Crypto',
    content: 'Attracts followers by highlighting market insights, investment tips, and significant trades, keeping the audience informed and engaged with timely and actionable financial content.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Crypto-D7hx3ZQr.webp"
  },

  {
    
    title: 'DIY, Remodeling, Landscaping',
    content: 'Attracts new clients by showcasing how-to guides, before-and-after transformations, and client testimonials, demonstrating value and expertise in the service offered.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/DIY_ Remodeling_ Landscaping-CyAT0LNi.webp"
  },
  {
    author: 'Marcus Perez',
    title: 'E-commerce',
    content: 'Drive traffic and boost sales with engaging product videos. Use ClipperGoat to create consistent, high-quality content for your online store.',
    color: '#1f2937',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/E-commerce-OQL_SLwR.webp"
  },
  {
    
    title: 'Finance & Investment',
    content: 'Provide valuable insights and investment tips through well-crafted videos. Keep your audience informed and engaged with ClipperGoat.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Finance _ Investment-BsTs7vMM.webp"
  },
  {
    
    title: 'Fitness & Wellness',
    content: 'Keep your audience motivated by repurposing workout routines and wellness tips. ClipperGoat helps you maintain fresh and inspiring content.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Fitness _ Wellness_-D0YrcPUX.webp"
  },
  {
    
    title: 'Gaming',
    content: 'Repurpose gameplay highlights and tutorials to keep your content fresh. Engage your gaming community with ClipperGoats AI tools.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Gaming Reels-Cxt6oR_t.png"
  },
  {
    
    title: 'Gambling',
    content: 'Engages audience by sharing big wins, betting strategies, and entertaining gameplay, creating excitement and drawing in viewers who are interested in the thrill of gambling.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/248281584_669313307384591_6746345535741826702_n-BWFy9H_2.webp"
  },
  {
    
    title: 'Influencers',
    content: 'Maximize your online presence by repurposing your viral content. Stay relevant and engage your audience across all platforms with ClipperGoat.',
    color: '#1f2937',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/unnamed-CgatswIj.webp"
  },
  {
    
    title: 'No Face Channels',
    content: 'Create and edit videos without revealing your identity. Perfect for channels focusing on gaming, tutorials, and more, using ClipperGoats AI capabilities.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/No Face Channels-BF6rTK4v.webp"
  },
  {
    title: 'Prohibited Industries',
    content: 'safely repurpose content to avoid restrictions and keep your audience engaged. ClipperGoat provides effective solutions for shadow-banned industries.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/spencer__1_-Dm_cEp9R.webp<"
  },
  {
    
    title: 'Podcast',
    content: 'Transform your audio content into engaging video snippets. Expand your reach and keep your audience entertained with ClipperGoat.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Podcast-D3tXv5Vg.webp"
  },
  {
    author: 'Marcus Perez',
    title: 'Real Estate',
    content: 'Create stunning property tours and market updates. Attract more buyers and sellers with high-quality video content using ClipperGoat.',
    color: '#1f2937',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Real Estate-CjBEfvM7.webp"
  },
  {
    author: 'Marcus Perez',
    title: 'Tech Review',
    content: 'Repurpose tech review videos and tutorials. Keep your content relevant and engaging for your tech-savvy audience with ClipperGoat',
    color: '#1f2937',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Tech Review -DJUzvOu2.webp"
  },

  {
    
    title: 'Travel',
    content: 'Repurpose travel footage and vlogs to keep your audience coming back for more adventures. Share your experiences through captivating videos.',
    image: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/spencer__2_-Cm4gMwCo.webp"
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
        <button onClick={handlePrev} className="Slideshow-Button" disabled={currentSlide === 0}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="Slideshow-Button" disabled={currentSlide === maxSlide}>
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