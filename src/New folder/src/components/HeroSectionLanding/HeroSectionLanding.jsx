import React, { useRef, useState, useEffect } from "react";
import "./HeroSectionLanding.css";
// import ChallengeCard from "../ChallengeCard/ChallengeCard";
import NewCounter from "../NewCounter/NewCounter";
import StartClippingBtn from "../StartClippingBtn/StartClippingBtn";

function HeroSectionLandingHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoScaleX, setVideoScaleX] = useState(1);
  const [videoScaleY, setVideoScaleY] = useState(1);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      const newScaleX = Math.min(1 + position / 1000, 1.35);
      const newScaleY = Math.min(1 + position / 1500, 1.2);
      setVideoScaleX(newScaleX);
      setVideoScaleY(newScaleY);

      if (videoRef.current && position > 100) {
        videoRef.current.play();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroVideoSources = [
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/9_16 hero-BSZAWict.mp4",
      media: "(max-width: 600px)"
    },
    {
      src: "https://clippergoat.nyc3.digitaloceanspaces.com/assets/Updated final-BDiza0Ii.mp4",
      media: "(min-width: 601px)"
    }
  ];

  return (
    <>
      <section className="clippergoat-hero ">
        <div className="aurora aurora1"></div>
 
        <div className="aurora aurora2"></div>
    
        <div className="aurora aurora3"></div>
        <div className="clipper-hero-left">
          <h1 className="clippergoat-hero-title">
            <span className="clippergoat-highlight glow-text">
              Unlock Endless Virality with ClipperGoat!
            </span>
          </h1>
          <p className="clippergoat-hero-price">
            For just $120
          </p>
          <p className="clippergoat-hero-subtitle">
            Repurpose your most viral clips 1000 times a month using our
            AI-powered Short Form Editor. Perfect for any industry, ClipperGoat
            AI transforms your content into fresh, engaging videos in minutes.
          </p>
          <button
            className="StartClipping"
            onClick={scrollToPricing}
          >
            Get Started!
          </button>
        </div>
      </section>
      <div className="Hero-Second-Section" >
          <div className="Second-Section-Left">
       
          </div>
          <div className="hero-section-right">
          <NewCounter targetDate="2024-08-25T00:00:00" />
          <StartClippingBtn
            text="Challenge Accepted"
            to="/leaderboard"
          />      
          </div>     
        </div> 
      <div className="hero-video-container2 Container-Spacing">
        <video
          ref={videoRef}
          poster=""
          className={`video-hero ${isLoaded ? "loaded" : "blurred"}`}
          autoPlay
          onLoadedData={handleVideoLoad}
          loop
          muted
          playsInline
          style={{
            transform: `scaleX(${videoScaleX}) scaleY(${videoScaleY})`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          {heroVideoSources.map((source, index) => (
            <source key={index} src={source.src} media={source.media} type="video/mp4" />
          ))}
          <track kind="captions" srclang="en" label="English captions" />
          Your browser does not support the video tag.
        </video>
      </div>
      
    </>
  );
}

export default HeroSectionLandingHero;