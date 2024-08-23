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
              <h1 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> {selectedJob.title} </h1>
              <p className='job-info-p'>{selectedJob.description}</p>
            </div>
          </div>
          <div className="actions">
            <button className="apply-now box-custom-smaller">Apply Now</button>
          </div>
        </div>

        <div className="job-overview">
          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> Company </h2>
          <p className='job-info-p'>ClipperGOAT</p>

          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> Location </h2>
          <p className='job-info-p'>Multiple Locations (Arizona, Dallas, Austin)</p>
          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> Job Type </h2>
          <p className='job-info-p'>Full-Time</p>
          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> Salary </h2>
          <p className='job-info-p'>{selectedJob.salary}</p>

          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> Job Description </h2>
          <p className='job-info-p'>{selectedJob.jobdesc}</p>
          
          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> Key Responsibilities </h2>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index} className='job-info-li'>
                <i className="fa-solid fa-check "></i>
                {responsibility}
              </li>
            ))}
          </ul>

          {selectedJob.title !== 'Developers' && (
            <>
              <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> Qualifications </h2>
              <ul>
                {selectedJob.qualifications && selectedJob.qualifications.map((qualification, index) => (
                  <li key={index} className='job-info-li'>
                    <i className="fa-solid fa-check "></i>
                    {qualification}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> What We Offer </h2>
          <ul>
            {whatWeOffer.map((offer, index) => (
              <li key={index} className='job-info-li'>
                <i className="fa-solid fa-check "></i>
                {offer}
              </li>
            ))}
          </ul>
          
          <h2 className='careers-headlline'><span className="plus-icon glow-text-small">+</span> How to apply </h2>
          <p className='job-info-p'>{selectedJob.apply}</p>
        </div>

        <div className="about-Company">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", margin: "30px 0" }}>
            <h2 className=''><span className="plus-icon glow-text-small">+</span> About Company </h2>
            <a href="https://discord.gg/uawJjJD5Ks" className="follow box-custom-smaller">Join    Discord
            </a>
          </div>
          <p className='job-info-p'>{selectedJob.about}</p>
        </div>
      </div>
    </div>
  );
}

export default RightSiderCareers;