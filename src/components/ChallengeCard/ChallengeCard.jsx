import React from 'react'
import AnimateCounter from "../Counter/Counter";
import StartClippingBtn from "../StartClippingBtn/StartClippingBtn";
import "./ChallengeCard.css"
const ChallengeCard = () => {
  return (
    <div className="challenge-card21edwv13 Container-Spacing">

    <div className="">
      <AnimateCounter targetDate="2024-09-31T23:59:59" />
      <div className="clippergoat-cta-hero-div">
        <div className="challenge-btn-phone">
          <StartClippingBtn
            text="Join The Challenge"
            to="/leaderboard"
          />
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default ChallengeCard
