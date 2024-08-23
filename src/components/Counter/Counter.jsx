import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const neonPulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 4px #3a78ff, 0 0 8px #3a78ff, 0 0 12px #3a78ff;
  }
  50% {
    text-shadow: 0 0 6px #3a78ff, 0 0 12px #3a78ff, 0 0 18px #3a78ff;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  z-index: 1000;
  ${props => props.shake && css`
    animation: ${shake} 0.5s ease-in-out;
  `}

  @media screen and (max-width: 410px) {
    // margin-top: 15px;
      padding: 0px;

  }
`;

const DigitBoxContainer = styled.div`
  display: flex;
  justify-content: center;
    gap: 10px;
  margin-top:10px;

  // @media screen and (max-width: 700px) {
  //   gap: 5px;
  //   margin: 5px 0;
  // }

  // @media screen and (max-width: 400px) {
  // }
`;

const TimeUnit = styled.div`
  display: flex;
  box-shadow: 0 0 11px 5px rgba(20, 110, 255, 0.2);
  border-radius: 15px;
  padding:5px;
  flex-direction: column;
  align-items: center;
  text-align: center; // Add this line
`;

const DigitBox = styled.div`
  font-size: 1.8em;
  color: white;
  font-weight: bold;
  padding: 0px 0px;
  background-color: #2a2a2a00;
  border-radius: 5px;
  min-width: 70px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex; // Add this line
  justify-content: center; // Add this line
  align-items: center; // Add this line
  
  @media screen and (max-width: 700px) {
    font-size: 1.4em;
    min-width: 60px;
    padding: 2px 0px;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2em;
    min-width: 50px;
    padding: 2px 0px;
  }
`;

const TimeLabel = styled.p`
  font-size: 0.7em;
  color: rgb(35, 119, 255);
  text-transform: uppercase;
  text-align: center; // Add this line
  width: 100%; // Add this line

  @media screen and (max-width: 700px) {
    font-size: 0.6em;
  }


`;



const AnimatedCounter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [shakeCounter, setShakeCounter] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const shakeTimer = setInterval(() => {
      setShakeCounter(true);
      setTimeout(() => setShakeCounter(false), 500);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(shakeTimer);
    };
  }, [targetDate]);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
  
    <div className='counter-container'>
      <div className='counter-content'>
        <div className="landing-counter-container-header">
          <p className='glow-text-test'>Join the $10 Million</p>
          <p className='glow-text-test'>ClipperGoat Challenge!</p>
        </div>
        <div className="counter-content-header">
      <CounterWrapper shake={shakeCounter}>
          <DigitBoxContainer>
        <TimeUnit>
          <DigitBox>{formatNumber(timeLeft.days || 0)}</DigitBox>
          <TimeLabel>days</TimeLabel>
        </TimeUnit>
        <TimeUnit>
          <DigitBox>{formatNumber(timeLeft.hours || 0)}</DigitBox>
          <TimeLabel>hours</TimeLabel>
        </TimeUnit>
        <TimeUnit>
          <DigitBox>{formatNumber(timeLeft.minutes || 0)}</DigitBox>
          <TimeLabel>minutes</TimeLabel>
        </TimeUnit>
        <TimeUnit>
          <DigitBox>{formatNumber(timeLeft.seconds || 0)}</DigitBox>
          <TimeLabel>seconds</TimeLabel>
        </TimeUnit>
      </DigitBoxContainer>
    </CounterWrapper>
    </div>
      </div>
    </div>
  );
};


export default AnimatedCounter;