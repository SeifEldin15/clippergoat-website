import React from 'react';
import './RightSiderCareers.css';

function RightSiderCareers({ selectedJob }) {
  if (!selectedJob) {
    return <div className="right-siderbar-containerrrrr">Select a job to view details</div>;
  }

  const responsibilities = selectedJob.responsibilities || [];
  const whatWeOffer = selectedJob.whatWeOffer || [];

  return (
    <div className="right-siderbar-containerrrrr" id="career-offer">
      <div className="product-designer">
        <div className="custom-rightside-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={selectedJob.companyLogo}
                style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
                alt="Company Logo"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 className=''>{selectedJob.title} <span className="plus-icon glow-text-small">+</span></h1>
              <p>{selectedJob.description}</p>
            </div>
          </div>
          <div className="actions">
            <button className="apply-now box-custom-smaller">Apply Now</button>
          </div>
        </div>

        <div className="job-overview">
          <h2 className=''>Company <span className="plus-icon glow-text-small">+</span></h2>
          <p>ClipperGOAT</p>

          <h2 className=''>Location <span className="plus-icon glow-text-small">+</span></h2>
          <p>Multiple Locations (Arizona, Dallas, Austin)</p>
          <h2 className=''>Job Type <span className="plus-icon glow-text-small">+</span></h2>
          <p>Full-Time</p>
          <h2 className=''>Salary <span className="plus-icon glow-text-small">+</span></h2>
          <p>{selectedJob.salary}</p>

          <h2 className=''>Job Description <span className="plus-icon glow-text-small">+</span></h2>
          <p>{selectedJob.jobdesc}</p>
          
          <h2 className=''>Key Responsibilities <span className="plus-icon glow-text-small">+</span></h2>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="">
                <i className="fa-solid fa-check "></i>
                {responsibility}
              </li>
            ))}
          </ul>

          {selectedJob.title !== 'Developers' && (
            <>
              <h2 className=''>Qualifications <span className="plus-icon glow-text-small">+</span></h2>
              <ul>
                {selectedJob.qualifications && selectedJob.qualifications.map((qualification, index) => (
                  <li key={index} className="">
                    <i className="fa-solid fa-check "></i>
                    {qualification}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2 className=''>What We Offer <span className="plus-icon glow-text-small">+</span></h2>
          <ul>
            {whatWeOffer.map((offer, index) => (
              <li key={index} className="">
                <i className="fa-solid fa-check "></i>
                {offer}
              </li>
            ))}
          </ul>
          
          <h2 className=''>How to apply <span className="plus-icon glow-text-small">+</span></h2>
          <p>{selectedJob.apply}</p>
        </div>

        <div className="about-Company">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", margin: "30px 0" }}>
            <h2 className=''>About Company <span className="plus-icon glow-text-small">+</span></h2>
            <button className="follow box-custom-smaller">Follow</button>
          </div>
          <p>{selectedJob.about}</p>
        </div>
      </div>
    </div>
  );
}

export default RightSiderCareers;