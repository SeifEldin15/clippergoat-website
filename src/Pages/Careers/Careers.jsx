import React, { useState } from 'react';
import CareersSideBar from "../../components/CareersSideBar/CareersSideBar";
import RightSiderCareers from "../../components/RightSiderCareers/RightSiderCareers";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import UIUXIcon from '../../assets/careers/settings_2097378.png';
// import FrontIcon from '../../assets/careers/programming_2011760.png';
import Backend from '../../assets/careers/web-optimization_3247471.png';
import Marketing from '../../assets/careers/social-media_2518048.png';
import Sales from '../../assets/careers/businessman_646631.png';
import BackToTopPhone from "../../components/BackToTopPhone/BackToTopPhone";

import "./Careers.css"

const Careers = () => {
  const jobs = [
    {
      companyLogo: Sales,
      title: 'Sales Agents',
      description: 'We are seeking enthusiastic and motivated Sales Agents to join our growing sales team.',
      date: '8/22/2024',
      applicants: '23 Applicants',
      type: 'Full time',
      position: 'Remote',
      salary: 'Uncapped commission potential',
      jobdesc: "We are seeking enthusiastic and motivated Sales Agents to join our growing sales team. As a Sales Agent at ClipperGOAT, you will play a crucial role in driving the company's growth by generating leads, closing sales, and building lasting relationships with customers. You will work in a fast-paced, goal-oriented environment where your efforts directly contribute to your success.",
      about: "ClipperGOAT is at the forefront of revolutionizing content creation with cutting-edge tools designed for influencers, marketers, and content creators. Our innovative platform empowers users to create viral content and scale their social media presence effortlessly. As we continue to expand, we are looking for driven and ambitious Sales Agents to join our dynamic team.",
      apply: "Ready to join the ClipperGOAT team and take your sales career to the next level? Submit your resume and a brief cover letter explaining why you’re the perfect fit for this role.",

      responsibilities: [
        "Lead Generation: Utilize social media platforms (TikTok, Twitter, YouTube Shorts, Meta) and SEO operations (LinkedIn, Reddit, Pinterest, Google My Business) to generate leads.",
        "Sales Execution: Engage potential clients, deliver compelling sales pitches, and close deals, focusing on upselling higher-tier packages ($297 and $1,000).",
        "Content Posting: Manage 3 profiles per platform, posting 4-7 times daily with provided content (120 videos per month).",
        "Customer Engagement: Follow up with leads via email, social media, or phone to ensure timely conversion.",
        "Performance Monitoring: Track daily sales numbers, lead conversion rates, and content engagement to meet or exceed monthly sales targets.",

      ],
      qualifications: [
        "Experience: Previous sales experience is preferred but not required. We provide comprehensive training.",
        "Skills: Strong communication and interpersonal skills, with the ability to engage and persuade potential clients.",
        "Tech Savvy: Comfortable with social media platforms, SEO tools, and sales automation software.",
        "Goal-Oriented: Highly motivated to achieve and exceed sales targets.",
        "Adaptability: Ability to thrive in a fast-paced, evolving environment.",

      ],
      
      whatWeOffer: [
        "Competitive Salary: Base salary with uncapped commission potential.",
        "Career Growth: Opportunities for advancement to Sales Lead or Sales Manager positions based on performance.",
        "Training & Development: Ongoing training and workshops to enhance your sales skills and platform knowledge.",
        "Incentives: Performance-based bonuses, recognition programs, and the opportunity to earn luxury rewards (e.g., a Cybertruck wrapped in ClipperGOAT branding).",
        "Dynamic Work Environment: Work alongside a high-energy team with a culture of excellence and collaboration.",
        "Swag: Get outfitted with ClipperGOAT merchandise, including T-shirts, hats, and more.",
      ],
    },
    {
      companyLogo: Backend,
      title: 'Developers',
      description: 'We are looking for skilled developers across various specializations to join our dynamic team.',
      date: '6/12/2024',
      applicants: '51 Applicants',
      type: 'Full time',
      position: 'Remote',
      salary: 'Competitive base salary + performance-based bonuses',
      jobdesc: "We are looking for skilled developers across various specializations to join our dynamic team. You will be working in a collaborative environment to develop, test, and deploy high-quality applications that meet the needs of our users and clients. If you have a passion for technology, innovation, and teamwork, we want to hear from you.",
      about: "ClipperGOAT is a cutting-edge technology company that provides innovative content creation tools for influencers, marketers, and digital creators. As we rapidly expand, we are seeking talented developers to join our team and help build the next generation of applications that will shape the future of digital content.",
      apply: "Submit your resume and a portfolio of your work (if applicable) along with a cover letter explaining why you’re the ideal fit for the role. Highlight your relevant experience, technical skills, and any projects that demonstrate your ability to contribute to ClipperGOAT’s success.",

      responsibilities: [
        "Front-End Developers: Focus on creating intuitive and responsive user interfaces, ensuring cross-platform compatibility.",
        "Back-End Developers: Develop server-side logic, manage databases, and ensure data security and application scalability.",
        "Full-Stack Developers: Handle both front-end and back-end development tasks, providing complete solutions from design to deployment.",
        "Data Management Specialists: Focus on data scraping, storage, processing, and analysis, ensuring data integrity and security.",
        "Integration Engineers: Manage API integrations, third-party software, and ensure smooth data flow between systems.",
        "Project Managers: Oversee development projects, ensuring they are completed on time, within scope, and to the highest quality.",
    
      ],
    
      qualifications: [
        "Front-End Developers: Proficiency in React, Angular, Vue.js, HTML/CSS, and JavaScript/TypeScript. Experience in UI/UX design is a plus.",
        "Back-End Developers: Strong experience with Node.js, Python, Java, PHP, or Ruby on Rails. Knowledge of MySQL, PostgreSQL, or MongoDB is preferred.",
        "Full-Stack Developers: Expertise in full-stack development, with proficiency in both front-end and back-end technologies.",
        "Data Management Specialists: Experience with Hadoop, Spark, Kafka, and Elasticsearch. Strong background in data engineering and management.",
        "Integration Engineers: Proficiency in RESTful, GraphQL, SOAP APIs, and experience with cloud services like AWS, Azure, or Google Cloud.",
        "Project Managers: Experience in project management within the tech industry, with proficiency in Agile methodologies and tools like Jira or Trello.",
        
      
      ],
    
      whatWeOffer: [
        "Competitive Salary: Base salary with performance-based bonuses.",
        "Career Growth: Opportunities for advancement into specialized roles or leadership positions within the development team.",
        "Cutting-Edge Technology: Work with the latest tools and technologies in a fast-paced, innovative environment.",
        "Training & Development: Continuous learning opportunities with regular workshops, certifications, and knowledge-sharing sessions.",
        "Collaborative Environment: Be part of a high-energy team that values collaboration, innovation, and personal growth.",
  
      ],
    },    

  
    {
      companyLogo: Marketing,
      title: 'Marketing Agents',
      description: 'We are looking for creative and motivated Marketing Agents to be a part of our innovative marketing team.',
      date: '4/13/2024',
      applicants: '413 Applicants',
      type: 'Part time',
      position: 'Remote',
      salary: '50/50 Commission base',
      jobdesc: "We are looking for creative and motivated Marketing Agents to be a part of our innovative marketing team. In this role, you will be responsible for generating content, driving engagement, optimizing SEO, and contributing to our overall marketing strategy. You will work in a fast-paced environment where your creativity and strategic thinking will directly impact the company’s growth and success.",
      about: "ClipperGOAT is at the cutting edge of digital content creation, offering powerful tools designed for influencers, marketers, and content creators to elevate their social media game. As we expand our footprint, we are seeking talented and driven Marketing Agents to join our dynamic and rapidly growing team.",
      apply: "If you are ready to take your marketing career to the next level and be a part of an innovative and fast-growing company, submit your resume and a cover letter explaining why you’re the ideal fit for this role.",

      responsibilities: [
        "Content Creation: Develop 40 high-quality videos per month focusing on general marketing, influencer promotion, and AI-generated sales.",
        "Lead Generation: Utilize social media platforms (TikTok, Twitter, YouTube Shorts, Meta) and SEO operations (LinkedIn, Reddit, Pinterest, Google My Business) to generate leads and drive engagement.",
        "SEO Optimization: Create and manage backlinks, generate reviews, and optimize content for search engines.",
        "Viral Trend Identification: Stay on top of viral trends and replicate successful content strategies to boost visibility and engagement.",
        "Social Media Management: Manage 3 profiles per platform, posting 4-7 times daily using created content across various platforms.",
        "Review Generation: Focus on generating a 1-10% review rate from all clients and driving positive engagement on social media platforms.",
      ],
      
      qualifications: [
        "Experience: Previous experience in digital marketing, content creation, or social media management is preferred but not required. We provide comprehensive training.",
        "Skills: Strong creativity, communication, and content creation skills.",
        "Tech Savvy: Comfortable with social media platforms, SEO tools, and marketing automation software.",
        "Goal-Oriented: Highly motivated to meet and exceed marketing and revenue targets.",
        "Adaptability: Ability to thrive in a fast-paced, evolving environment.",
      ],
      
      whatWeOffer: [
        "Competitive Salary: Base salary with performance-based bonuses.",
        "Career Growth: Opportunities for advancement to Marketing Lead or Marketing Manager positions based on performance.",
        "Training & Development: Continuous learning opportunities with regular workshops, coaching sessions, and peer learning activities.",
        "Incentives: Performance-based bonuses, recognition programs, and the chance to earn luxury rewards (e.g., high-end electronics, travel vouchers).",
        "Dynamic Work Environment: Collaborate with a high-energy team in a creative, goal-driven culture.",
        "Swag: Receive ClipperGOAT merchandise, including T-shirts, hats, and more.",
      ],
    },

  ];  
  

  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <>
    <BackToTopPhone />
      <Navbar />
      <div className='careers-page Container-Spacing'>
        <div className='Container-Spacing '>
          <CareersSideBar jobs={jobs} onJobSelect={handleJobSelect} selectedJob={selectedJob} />
          <br />
          <RightSiderCareers selectedJob={selectedJob} />
        </div>
      </div>
      <div className="footer-career "></div>
      <Footer />
    </>
  )
}

export default Careers