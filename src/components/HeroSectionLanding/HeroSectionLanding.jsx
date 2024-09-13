import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./HeroSectionLanding.css";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
function Card3D({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

function HeroSectionLandingHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoWidth, setVideoWidth] = useState(50);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Calculate new width based on scroll position
      const newWidth = Math.min(50 + (position / 15), 72);
      setVideoWidth(newWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value to change when the video starts/stops
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          setIsVideoVisible(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      });
    }, options);

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
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
            Unlock Endless Virality <div className="break-div-2"></div> <br className="large-screen-br" /> with ClipperGoat!
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
        <a
  className="StartClipping"
  href="https://app.clippergoat.com/checkout"
>
  Start Your Free Trial!<i className="fa-regular fa-arrow-right"></i>
</a>
      </div>
    </section>
  </div>

  <div className="hero-right ">
    <section className="counter-container ">
      <ChallengeCard />
    </section>
  </div>
  </div>
        
  <div className="hero-video-container2" ref={videoContainerRef}>
        <Card3D>
          <video
            ref={videoRef}
            poster=""
            preload="true"
            className={`video-hero ${isLoaded ? "loaded" : "blurred"}`}
            autoPlay={isVideoVisible}
            onLoadedData={handleVideoLoad}
            loop
            muted
            playsInline
            style={{
              width: `${videoWidth}%`,
              transition: 'width 0.3s ease-out',
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          >
            {heroVideoSources.map((source, index) => (
              <source key={index} src={source.src} media={source.media} type="video/mp4" />
            ))}
            <track kind="captions" srclang="en" label="English captions" />
            Your browser does not support the video tag.
          </video>
        </Card3D>
      </div>

      <div className="hero-card-phone ">
    <section className="counter-container ">
      <ChallengeCard />
    </section>
  </div>
    </>  );
}


export default HeroSectionLandingHero;
