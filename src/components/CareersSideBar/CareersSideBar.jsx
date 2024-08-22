import React, { useState, useEffect } from 'react';
import './CareersSideBar.css';

const CareersSideBar = ({ jobs, onJobSelect, selectedJob }) => {
  const handleJobCardClick = (job) => {
    onJobSelect(job);
    
    if (window.innerWidth < 968) {
      const careerOfferElement = document.getElementById('career-offer');
      if (careerOfferElement) {
        const yOffset = -100; // 100px before the element
        const y = careerOfferElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='job-sidebar-container'>
      <div className={"job-sidebar-header"}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="glow-text-small" style={{ fontSize: '16px', color: 'white' }}>
            ClipperGOAT
          </span>
          <span style={{ fontSize: '12px', color: 'rgb(200, 200, 200)', marginTop: '10px' }}>28 Job Posting Available</span>
        </div>
        <div className="job-sidebar-sort">
          {/* <div className="sort-dropdown">
            Sort by: <strong className="glow-text-small">Relevance</strong>
          </div> */}
         </div>
      </div>
      <div className="job-sidebar">
        <div className="job-cards-container">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`job-card ${selectedJob && job.title === selectedJob.title ? 'selected' : ''}`}
              onClick={() => handleJobCardClick(job)}
            >
              <div className="job-card-content">
                <div className="company-logo">
                  <img src={job.companyLogo} alt="Company Logo" />
                </div>
                <p className="job-position">{job.position}</p>
                <div className="job-info">
                  <h3 className="">
                    {job.title} <span className="plus-icon glow-text-small">+</span>
                  </h3>
                  <p>{job.description}</p>
                </div>
              </div>
              <div className="job-meta">
                <div className="rating">
                  {job.date}
                </div>
                <div className="applicants">{job.applicants}</div>
                <p className="verified">{job.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersSideBar;