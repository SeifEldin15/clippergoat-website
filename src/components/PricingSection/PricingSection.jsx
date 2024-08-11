import React from 'react';
import './PricingSection.css';
import StartClippingBtn from '../StartClippingBtn/StartClippingBtn';

const PricingCard = ({ title, price, description, features, soonToCome, popular }) => (
  <div className={`pricing-card ${popular ? 'pricing-card--popular' : ''} ${title === 'Agency' ? 'pricing-card--custom-highlight' : 'pricing-card--custom-normal'}`}>
    {popular && (
      <div className="popular-tag">
        <i className="popular-tag__icon fa-solid fa-info-circle"></i> Most Popular
      </div>
    )}
    <p className={`pricing-card__header ${title === 'Agency' ? 'pricing-card__header--custom' : ''}`}>{title}</p>
    <div className="pricing-card__price">${price}</div>
    <p className="pricing-card__billed-monthly">
      <i className="fa-solid fa-credit-card"></i> Billed Monthly
    </p>
    <p className="pricing-card__description">{description}</p>
   <div className="pricing-section-btn">
   <StartClippingBtn
      text="Get Started!" 
      to="/reviving-clips" 
    />
   </div>
    <ul className="pricing-card__features-list">
      {features.map((feature, index) => (
        <div className="pricing-card__soon-to-come-container">
          <i className="fa-solid fa-check pricing-card__soon-to-come-check"></i>
          <li key={index}>{feature}</li>
        </div>
      ))}
    </ul>
    <ul className="pricing-card__soon-to-come-list">
      <div>
        <strong>Soon to Come:</strong>
      </div>
      {soonToCome.map((feature, index) => (
        <div className="pricing-card__soon-to-come-container">
          <i className="fa-solid fa-check pricing-card__soon-to-come-check"></i>
          <li key={index}>{feature}</li>
        </div>
      ))}
    </ul>
  </div>
);

function PricingSection() {
  const plans = [
    {
      title: "Clippreneur",
      price: "120",
      description: "Ideal for solo editors managing 1-6 accounts, focused on streamlined content creation.",
      features: [
        "300 Credits",
        "300 Video Cleans or Downloads",
        "Meta Magic: (Metadata Removal + AI Video Editor)",
        "AI Advanced Photoshop Video Editor",
        "Bypass July 7th IG Patch on Content Detection",
        "25% Affiliate Commission",
      ],
      soonToCome: [
        "Video Game Splitter",
        "Auto-Poster",
        "Auto-DM'er",
        "Account Warmer",
      ]
    },
    {
      title: "Agency",
      price: "300",
      description: "Ideal for solo editors managing 1-6 accounts, focused on streamlined content creation.",
      features: [
        "1000 Credits",
        "Includes 1000 Short Video Downloads",
        "Includes all of the Features in Clippreneur",
        "Priority Support",
        "30% Affiliate Commission",
      ],
      soonToCome: [
        "Customer Relationship Managers",
        "Auto-Emailer",
        "Auto-Texter",
        "GUI Web Builder",
        "Custom Sites",
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "997",
      description: "Tailored for agencies needing custom solutions to maximize content and growth.",
      features: [
        "4000 Credits",
        "4000 Video Downloads",
        "Includes all Features You Can Get in Clippreneur & Agency",
        "Custom Integrations and Automations",
        "Personalized Enhancements and Optimizations",
      ],
      soonToCome: [
        "Account Management",
        "Advanced Analytics",
        "Full Suite of Automation Tools",
        "Includes Upcoming Features You Can Get in Clippreneur & Agency",

      ],
    },
  ];

  return (
    <div className="pricing-section" id="pricing-section">
      <h1 className="pricing-section__title custom-header-title">
        Choose Your <div className="break-div"><br /></div>
        <span className="information-container-header-span glow-text">Perfect Plan</span>
      </h1>
      <p className="custom-header-subtitle">Flexible pricing to suit your needs, whether you're a solo creator or a large agency.</p>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div className="pricing-card-container" key={index}>
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;