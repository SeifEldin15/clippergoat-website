import React, { useState, useEffect } from 'react';
import './NewCounter.css';

const NewCounter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = ['days', 'hours', 'minutes', 'seconds'].map((interval) => (
    <div className="countdown-item box-custom-shadow-smaller" key={interval}>
      <span className="countdown-value">{timeLeft[interval]}</span>
      <span className="countdown-label">{interval}</span>
    </div>
  ));

  return (
    <div className="countdown-container glow-text ">
      <h1>Join The ClipperGoat</h1>
      <h2>$10 Million Challenge</h2>
      <div className="countdown-timer">
        {timerComponents}
      </div>
    </div>
  );
};

export default NewCounter;