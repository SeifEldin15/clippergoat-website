import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import './HomeCounter.css'

const shake = keyframes`
  /* Define your shake animation here */
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  background: #1F2937;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  top: 20px;
  right: 20px;
  animation: ${shake} 0.5s ease-in-out infinite;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 20px;
  }
`;

const DigitBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DigitBox = styled.div`
  box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  background: #111827;
  color: white;
  font-size: 27px;
  font-weight: bold;
  padding: 8px;
  margin: 0 5px;
  border-radius: 5px;
  min-width: 40px;
  text-align: center;
  transition: all 0.3s ease;
`;

const AnimatedCounterHome = ({ targetValue }) => {
  const [counter, setCounter] = useState(0);
  const slideInStyles = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0)' },
    config: { tension: 170, friction: 36 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter < targetValue) {
          return prevCounter + 1;
        }
        clearInterval(interval);
        return prevCounter;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [targetValue]);

  const counterString = counter.toString().padStart(6, '0');

  return (
    <animated.div style={slideInStyles} className='counter-container'>
      <CounterWrapper>
        <DigitBoxContainer>
          {counterString.split('').map((digit, index) => (
            <DigitBox key={index}>{digit}</DigitBox>
          ))}
        </DigitBoxContainer>
        <div className="time-container">
          <p className="time">week</p>
          <p className="time">day</p>
          <p className="time">hours</p>
        </div>
      </CounterWrapper>
    </animated.div>
  );
};

export default AnimatedCounterHome;
