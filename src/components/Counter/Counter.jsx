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
    padding: 10px;
    margin-top: 15px;
  }
`;

const DigitBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;

  @media screen and (max-width: 410px) {
    margin: 0 6px;
  }
`;

const DigitBox = styled.div`
 box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
  font-size: 1.7em;
  color:white
  text-transform: uppercase;  font-weight: bold;
  padding: 6px;
  background-color: #2a2a2a00;
  border-radius: 5px;
  min-width: 70px;  min-width: 60px;
  text-align: center;
  transition: all 0.3s ease;
  -webkit-text-stroke: 1.5px #3a78ff;
  animation: ${neonPulse} 1.5s infinite;
  
  @media screen and (min-width: 1900px) {
    min-width: 80px;
    font-size: 30px;
    padding: 8px;
  }
  @media screen and (max-width: 410px) {
    font-size: 22px;
    padding: 5px;
    min-width: 45px;
  }
`;

const TimeLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  display: block;

  @media screen and (max-width: 410px) {
    font-size: 13px;
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