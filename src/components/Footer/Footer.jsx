import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";
import LogoFooter from "../../assets/NEW-GOAT222 (1).webp";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (targetY) => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          slowScrollTo(targetY, 1500);
        }, 1000);
      } else {
        slowScrollTo(targetY, 1500);
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
              <img src={LogoFooter} className="LogoFooter" alt="" />
            </div>
            <p className="footer-description">
            Yes, we offer a 1$ trail that includes 30 credits. This allows you to start using Clippergoat's features at Virtually no cost and upgrade as you grow.
            </p>

            <div className="social-icons social-icons-normal">
              <a href="https://www.instagram.com/officialclippergoat" target="_blank" rel="noopener noreferrer" aria-label="Go to Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563942300945" target="_blank" rel="noopener noreferrer" aria-label="Go to Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.tiktok.com/@clippergoat.com" target="_blank" rel="noopener noreferrer" aria-label="Go to TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://x.com/TheClipperGoat" target="_blank" rel="noopener noreferrer" aria-label="Go to X">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/@OFFICIALCLIPPERGOAT" target="_blank" rel="noopener noreferrer" aria-label="Go to YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <ul className="footer-links hover-effect-links">
          <li>
            <Link exact to="/leaderboard" onClick={() => scrollToSection(0)}>
              Affiliates
            </Link>
          </li>
          <li>
            <Link exact to="/investors" onClick={() => scrollToSection(0)}>
              Investors
            </Link>
          </li>
          <li>
            <Link exact to="/terms" onClick={() => scrollToSection(0)}>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link exact to="/privacy" onClick={() => scrollToSection(0)}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link exact to="/refund" onClick={() => scrollToSection(0)}>
              Refund Policy
            </Link>
          </li>
          <li>
            <Link exact to="/contactus" onClick={() => scrollToSection(0)}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="footer-links">
          <br />
          <p className="contact-info-footer">Email: support@clippergoat.com</p>
          <br />
          <p className="contact-info-footer">Phone: +1 (480) 236-4263</p>
        </div>

        <div className="social-icons social-icons-phone">
          <a href="https://www.instagram.com/officialclippergoat" target="_blank" rel="noopener noreferrer" aria-label="Go to Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61563942300945" target="_blank" rel="noopener noreferrer" aria-label="Go to Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.tiktok.com/@clippergoat.com" target="_blank" rel="noopener noreferrer" aria-label="Go to TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://x.com/TheClipperGoat" target="_blank" rel="noopener noreferrer" aria-label="Go to X">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/@OFFICIALCLIPPERGOAT" target="_blank" rel="noopener noreferrer" aria-label="Go to YouTube">
            <i className="fa-brands fa-youtube"></i>
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