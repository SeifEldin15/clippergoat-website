import React from 'react';
import './RightSiderCareers.css';
import UIUXIcon from '../../assets/careers/settings_2097378.png';

function RightSiderCareers() {
  return (
    <div className="right-siderbar-containerrrrr">
      <div className="product-designer">
      <div className="custom-rightside-header">
        <div style={{ display: 'flex', alignItems:'center'}}>
          <div style={{ display: 'flex', alignItems:'center' }}>
            <img 
              src={UIUXIcon} 
              style={{ width:"50px", height:"50px", borderRadius:"50%", marginRight:"10px" }} 
              alt="Company Logo" 
            />
          </div>
          <div style={{ display: 'flex', flexDirection:'column' }}>
            <h1 className='glow-text-small'>Product Designer <span className="plus-icon">+</span></h1>
            <p>Sitemap Analytics Sitemap Analytics. ask Sitemap Analytics Sitemap Analytics</p>
          </div>
        </div>
        <div className="actions">
          <button className="apply-now box-custom-smaller">Apply Now</button>
        </div>
      </div>
      <div className="job-overview">
        <h2 className='glow-text-small'>Job Overview <span className="plus-icon">+</span></h2>
        <p>
          Mekari is Indonesia's no. 1 Software-as-a-Service (SaaS) company. Our mission is to empower businesses and professionals to progress effortlessly. Our products (Mekari Talenta, Mekari Jurnal, Mekari KlikPajak, & Mekari Gontak) have been used by tens of thousands of businesses in Indonesia.
        </p>
        <p>
          To reach millions, we need more people like you: entrepreneurs, builders, owners inside the company who are eager to grow at scale. Join us to empower more businesses with technology.
        </p>
        <h2 className='glow-text-small'>What You Will Do <span className="plus-icon">+</span></h2>
        <ul>
          <li className="">
            <i className="fa-solid fa-check "></i>
            Sitemap Analytics Sitemap Analytics. ask Sitemap Analytics Sitemap Analytics
          </li>
          <li className="">
            <i className="fa-solid fa-check "></i>
            Sitemap Analytics Sitemap Analytics. ask Sitemap Analytics Sitemap Analytics
          </li>
          <li className="">
            <i className="fa-solid fa-check "></i>
            Sitemap Analytics Sitemap Analytics. ask Sitemap Analytics Sitemap Analytics
          </li>
        </ul>
        <h2 className='glow-text-small'>We are seeking a Product Designer (UI/UX Designer) to join our team! <span className="plus-icon">+</span></h2>
        <p>
          As a Product Designer, you will be responsible for creating intuitive and visually appealing digital products that meet the needs of our users. You will collaborate with cross-functional teams to design and deliver high-quality products that are user-friendly, efficient, and scalable.
        </p>
      </div>
      <div className="about-twitter">
        <div style={{ display: 'flex', justifyContent:'space-between', alignItems:"center", margin:"30px 0" }}>
          <h2 className='glow-text-small'>About Twitter <span className="plus-icon">+</span></h2>
          <button className="follow box-custom-smaller">Follow</button>
        </div>
        <p>
          Makro PRO is an exciting new digital venture by the iconic Makro. Our proud purpose is to build a technology platform that will help make business possible for restaurant owners, hotels, and independent retailers, and open the door for sellers. Makro PRO brings together the best talent across multi-nationals to transform.
        </p>
      </div></div>
    </div>
  );
}

export default RightSiderCareers;
