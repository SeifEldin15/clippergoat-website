import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();



  const scrollToSection = (largeScreenY, avgScreenY, mediumScreenY, smallScreenY) => {
    const targetY =
      screenSize === 'small' ? smallScreenY :
      screenSize === 'medium' ? mediumScreenY :
      screenSize === 'avg' ? avgScreenY :
      largeScreenY;

    // Scroll to top first, then navigate and scroll to section
    window.scrollTo(0, 0); // Scroll to top immediately
    setTimeout(() => {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          slowScrollTo(targetY, 1500); // 1.5 seconds duration for scrolling
        }, 1000);
      } else {
        slowScrollTo(targetY, 1500); // 1.5 seconds duration for scrolling
      }
    }, 100);
  };

  const slowScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const diffY = targetY - startY;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + diffY * easeInOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  return (
    <footer className="footer Container-Spacing">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <Logo />
            </div>
            <p className="footer-description">
              Clippergoat is an AI-powered software company specializing in editing social media content to enable seamless reposting without detection, helping creators maintain originality and engagement while efficiently managing content reuse.
            </p>

            <div className="social-icons social-icons-normal">
              <a href="https://www.instagram.com/officialclippergoat" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563942300945" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.tiktok.com/@clippergoat.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://x.com/TheClipperGoat" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/@OFFICIALCLIPPERGOAT" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <ul className="footer-links hover-effect-links">
          <li>
            <NavLink exact to="/leaderboard" onClick={() => scrollToSection(0)}>
              Affiliates
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/investors" onClick={() => scrollToSection(0)}>
              Investors
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/terms" oonClick={() => scrollToSection(0)}>
              Terms & Conditions
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/privacy"onClick={() => scrollToSection(0)}>
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/refund" onClick={() => scrollToSection(0)}>
              Refund Policy
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contactus" onClick={() => scrollToSection(0)}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="footer-links">
          <br />
          <p className="contact-info-footer">Email: support@clippergoat.com</p>
          <br />
          <p className="contact-info-footer">Phone: +1 (480) 236-4263</p>
        </div>

        <div className="social-icons social-icons-phone">
          <a href="https://www.instagram.com/officialclippergoat" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61563942300945" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.tiktok.com/@clippergoat.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://x.com/TheClipperGoat" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/@OFFICIALCLIPPERGOAT" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-youtube"></i>
              </a>
        </div>

        <p className="footer-copyright">
          Gilbert, Arizona USA.
          <br />
          <br />
          <br />
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
