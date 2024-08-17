import React, { useState, useEffect } from 'react';

import "./BackToTopPhone.css"
const BackToTopPhone = () => {
  const [isSmallScreen, setIsSmallScreen1] = useState(false);
  const [isScrolled, setIsScrolled1] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen1(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled1(window.scrollY > 500);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleBackToTop = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button onClick={handleBackToTop} className={`BackToTopPhone ${isSmallScreen ? '' : ''} ${isScrolled ? 'scrolled-backtotop' : ''}`} aria-label="back to top">
               <span className="sr-only">Back to top</span>
               <i className="fa-solid fa-chevron-up"></i>
    </button>
  )
}

export default BackToTopPhone
