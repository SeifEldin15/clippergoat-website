import React, { useRef, useState, useEffect } from "react";
import "./HeroSectionLanding.css";
// import NewCounter from "../NewCounter/NewCounter";
import ChallengeCard from "../ChallengeCard/ChallengeCard";

function HeroSectionLandingHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoWidth, setVideoWidth] = useState(50);
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
      
      // Calculate new width based on scroll position
      const newWidth = Math.min(50 + (position / 10), 72);
      setVideoWidth(newWidth);

      if (videoRef.current && position > 350) {
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


<div className="hero-wrapper">
<div className="aurora aurora1"></div>
  <div className="aurora aurora2"></div>
  <div className="aurora aurora3"></div>

  <div className="hero-left">
    <section className="clippergoat-hero">
      <div className="clipper-hero-left">
        <h1 className="clippergoat-hero-title">
          <span className="clippergoat-highlight glow-text">
            Unlock Endless Virality <div className="break-div-2"></div> with ClipperGoat!
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
  </div>

  <div className="hero-right ">
    <section className="counter-container ">
      <ChallengeCard />
      {/* <div className="counter ">
        <NewCounter targetDate="2024-09-25T00:00:00" />
        <button className="chlng-btn " >
          Challenge Accepted
          <i class="fa-regular fa-arrow-right"></i>
        </button> 
      </div> */}
    </section>
  </div>
  </div>
        
<div className="hero-video-container2 ">
        <video
          ref={videoRef}
          poster=""
          preload="true"
          className={`video-hero ${isLoaded ? "loaded" : "blurred"}`}
          autoPlay
          onLoadedData={handleVideoLoad}
          loop
          muted
          playsInline
          style={{
            width: `${videoWidth}%`,
            transition: 'width 0.3s ease-out'
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