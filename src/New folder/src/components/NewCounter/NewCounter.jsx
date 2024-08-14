import React, { useState, useEffect } from 'react';
import './NewCounter.css';

const NewCounter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

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

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div className="countdown-item" key={interval}>
        <span className="countdown-value">{timeLeft[interval]}</span>
        <span className="countdown-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      <h2>We're almost ready!</h2>
      <h1>Launching in...</h1>
      <div className="countdown-timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default NewCounter;