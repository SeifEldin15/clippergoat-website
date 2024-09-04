// LeaderboardHeroSection.js
import React from 'react';
import AnimateCounterLeader from '../Counter/AnimateCounterLeader';
import StartClippingBtn from '../StartClippingBtn/StartClippingBtn';

import './HeroSectionLeader.css';

function HeroSectionLeader() {
  return (
    <div className="clippergoat-app-header">
      <LeaderboardHero />
    </div>
  );
}

export default HeroSectionLeader;

function LeaderboardHero() {
  return (
    <>
      <section className="clippergoat-leaderboard-hero">
        <AnimateCounterLeader targetDate="2024-09-31T23:59:59" />
        <div className="leaderboard-getoffer-btn">
          <StartClippingBtn
            style={{ marginTop: '30px' }}
            text="Become an Affiliate"
            to="https://affiliate.clippergoat.com/create-account"
          />
        </div>
        <div>
        </div>
      </section>
    </>
  );
}