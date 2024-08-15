import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('large');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 777) {
        setScreenSize('small');
      } else if (width <= 1000) {
        setScreenSize('medium');
      } else if (width <= 1324) {
        setScreenSize('avg');
      } else {
        setScreenSize('large');
      }
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    
    if (screenSize === 'small') {
      closeMenu();
    }
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

  const navItems = [
    { name: 'Features', href: '/home', largeScreenScrollTo: 1500, avgScreenScrollTo: 1500, mediumScreenScrollTo: 2400, smallScreenScrollTo: 1800 },
    { name: 'Pricing', href: '/home', largeScreenScrollTo: 5000, avgScreenScrollTo: 6000, mediumScreenScrollTo: 6700, smallScreenScrollTo: 6200 },
    { name: 'FAQ', href: '/home', largeScreenScrollTo: 7200, avgScreenScrollTo: 9000, mediumScreenScrollTo: 9800, smallScreenScrollTo: 9900 },
    { name: 'Affiliates', href: '/leaderboard', link: '/leaderboard' },
    { name: 'Contact Us', href: '/contactus', link: '/contactus' },
  ];

  return (
    <nav className={`navbar Container ${screenSize === 'small' ? 'small-screen scrolled' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div style={{
        maxWidth:"90%",
        display:"flex",
        width:"100%",
        alignItems:"center",
        margin:"0 auto"
      }}>
      <div className='navbar-header'>
        <Logo />
        {screenSize === 'small' && (
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            ☰
          </div>
        )}
      </div>
      <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links hover-effect-links">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <NavLink exact to={item.link} onClick={closeMenu}>{item.name}</NavLink>
              ) : (
                <a href={item.href} onClick={(e) => {
                  e.preventDefault(); 
                  scrollToSection(item.largeScreenScrollTo, item.avgScreenScrollTo, item.mediumScreenScrollTo, item.smallScreenScrollTo);
                  closeMenu();
                }}>
                  {item.name}
                </a> 
              )}
            </li>
          ))}
<li className='nav-buttons-small glow-text-test nav-buttons-small'>
  <a href="https://app.clippergoat.com/" onClick={closeMenu}>
    Login
  </a>
</li>
        </ul>
      </div>
      {screenSize !== 'small' && (
        <div className="nav-buttons">
<a href="https://app.clippergoat.com/" className="register-btn glow-text-test">
  Login
</a>

        </div>
      )}</div>
    </nav>
  );
};

export default Navbar;
