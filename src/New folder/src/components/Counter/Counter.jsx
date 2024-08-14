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

const DigitBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 35px rgba(20, 110, 255, 0.6), inset 0 0 85px rgba(20, 110, 255, 0.6);
  background-color: rgba(17, 24, 39, 0.8);
  padding: 20px;
  border-radius: 15px;
  z-index: 1000;
  border: 2px solid rgba(52, 130, 255, 1);
  ${props => props.shake && css`
    animation: ${shake} 0.5s ease-in-out;
  `}

  @media screen and (max-width: 410px) {
    padding: 10px;
    margin-top: 15px;
  }
`;

const DigitBox = styled.div`
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
  font-size: 24px;
  font-weight: bold;
  padding: 8px;
  margin: 0 8px;
  border-radius: 10px;
  min-width: 60px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(52, 130, 255, 1);
  -webkit-text-stroke: 1.5px #3a78ff;
  animation: ${neonPulse} 1.5s infinite;

  @media screen and (max-width: 410px) {
    font-size: 22px;
    padding: 5px;
    min-width: 45px;
    margin: 0 6px;
  }
`;

const TimeLabel = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin: 8px 8px;

  @media screen and (max-width: 410px) {
    font-size: 13px;
    margin: 6px 6px;
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
              <DigitBox>{formatNumber(timeLeft.days || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.hours || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.minutes || 0)}</DigitBox>
              <DigitBox>{formatNumber(timeLeft.seconds || 0)}</DigitBox>
            </DigitBoxContainer>
            <DigitBoxContainer>
              <TimeLabel>days</TimeLabel>
              <TimeLabel>hours</TimeLabel>
              <TimeLabel>minutes</TimeLabel>
              <TimeLabel>seconds</TimeLabel>
            </DigitBoxContainer>
          </CounterWrapper>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;