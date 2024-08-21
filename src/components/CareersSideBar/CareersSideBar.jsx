import React, { useState, useEffect } from 'react';
import './CareersSideBar.css';
import UIUXIcon from '../../assets/careers/settings_2097378.png';
import FrontIcon from '../../assets/careers/programming_2011760.png';
import Backend from '../../assets/careers/web-optimization_3247471.png';
import Marketing from '../../assets/careers/social-media_2518048.png';
import Sales from '../../assets/careers/businessman_646631.png';

const CareersSideBar = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.pageYOffset >= 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const jobs = [
    {
      companyLogo: UIUXIcon,
      title: 'UI/UX',
      description: 'Drive innovation and enhance the usability and visual appeal of our digital offerings.',
      rating: '4.3',
      applicants: '23 Applicants',
      verified: true,
    },
    {
      companyLogo: Backend,
      title: 'Backend',
      description: 'Drive innovation and enhance the usability and visual appeal of our digital offerings.',
      rating: '4.3',
      applicants: '23 Applicants',
      verified: true,
    },
    {
      companyLogo: FrontIcon,
      title: 'Frontend',
      description: 'Uncover valuable insights through user research to inform our design decisions.',
      rating: '4.3',
      applicants: '23 Applicants',
      verified: true,
    },
    {
      companyLogo: Marketing,
      title: 'Marketing',
      description: 'Uncover valuable insights through user research to inform our design decisions.',
      rating: '4.3',
      applicants: '23 Applicants',
      verified: true,
    },
    {
      companyLogo: Sales,
      title: 'Sales',
      description: 'Uncover valuable insights through user research to inform our design decisions.',
      rating: '4.3',
      applicants: '23 Applicants',
      verified: true,
    },
    {
      companyLogo: FrontIcon,
      title: 'Marketing',
      description: 'Uncover valuable insights through user research to inform our design decisions.',
      rating: '4.3',
      applicants: '23 Applicants',
      verified: true,
    },
    {
      companyLogo: FrontIcon,
      title: 'Marketing',
      description: 'Uncover valuable insights through user research to inform our design decisions.',
      rating: '4.3',
      applicants: '23 Applicants',
      verified: true,
    },
  ];

  return (

    <div className='job-sidebar-container'>
      <div className={`job-background ${isHeaderSticky ? 'sticky' : ''}`}>
          <div className={`job-sidebar-header ${isHeaderSticky ? 'sticky' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="glow-text-small" style={{ fontSize: '16px', color: 'white' }}>
          ClipperGOAT
          </span>
          <span style={{ fontSize: '12px', color: 'rgb(200, 200, 200)', marginTop: '10px' }}>28 Job Posting Available</span>
        </div>
        <div className="job-sidebar-sort">
          <div className="sort-dropdown">
            Sort by: <strong className="glow-text-small">Relevance</strong>
          </div>
        </div>
      </div>
      </div>
    <div className="job-sidebar">

      <div className="job-cards-container">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-card-content">
              <div className="company-logo">
                <img src={job.companyLogo} alt="Company Logo" />
              </div>
              <div className="job-info">
                <h3 className="glow-text-small">
                  {job.title} <span className="plus-icon">+</span>
                </h3>
                <p>{job.description}</p>
              </div>
            </div>
            <div className="job-meta">
              <div className="rating">
                <span className="star-icon">★</span> {job.rating} Trusted
              </div>
              <div className="applicants">{job.applicants}</div>
              {job.verified && <div className="verified">Company Verified</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CareersSideBar;