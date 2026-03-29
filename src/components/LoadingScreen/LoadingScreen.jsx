import React from "react";
import "./LoadingScreen.css";
import logoimg from "../../assets/NEW-GOAT222 (1).webp";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo-wrapper">
          <img src={logoimg} alt="ClipperGoat" className="loading-logo" />
          <div className="loading-glow-ring"></div>
        </div>
        <p className="loading-brand-name">ClipperGoat</p>
        <div className="loading-bar-track">
          <div className="loading-bar-fill"></div>
        </div>
        <p className="loading-label">Loading your experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
