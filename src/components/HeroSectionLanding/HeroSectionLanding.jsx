import React from "react";
import "./HeroSectionLanding.css";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
 
function HeroSectionLandingHero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="clippergoat-hero">
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
        <button className="StartClipping" 
  text="Get Started!" 
  onClick={(e) => {
    scrollToPricing();
  }} 
 > Get Started!</button>

        </div>
        <div className="clipper-hero-right">
          <ChallengeCard />
        </div>
      </section>
    </>
  );
}

export default HeroSectionLandingHero;