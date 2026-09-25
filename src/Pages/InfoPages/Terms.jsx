import React from 'react';
import './InfoPages.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className='Pirvacy-Container'>
        <h1 className="information-container-header custom-header-title">Terms &<div className="break-div"><br/></div> <span className="glow-text">Conditions</span></h1>
        
        <div>
          <p className='custom-header-subtitle-no-centner glow-text'>Clippergoat Terms of Service (TOS)</p>
          <p className='InfoPagesParagraph'>Last Updated: July 1st, 2024</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>Acceptance of Terms</p>
          <p className='InfoPagesParagraph'>By accessing and using the services provided by Clippergoat AI, you agree to be bound by these Terms of Service ("TOS"). If you do not agree to these terms, please do not use our services.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>Description of Service</p>
          <p className='InfoPagesParagraph'>Clippergoat provides AI-powered editing tools designed to assist users in creating and editing content. Our services are subject to the terms and conditions outlined in this TOS.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>Use of Service</p>
          <p className='InfoPagesParagraph'>You agree to use Clippergoat services only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the service. Clippergoat grants you a non-exclusive, non-transferable, limited right to access and use the services for your personal, non-commercial purposes, subject to these TOS.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>User Conduct</p>
          <p className='InfoPagesParagraph'>You are solely responsible for any content you create, transmit, or display while using Clippergoat services and for the consequences of your actions. You agree not to upload, communicate, transmit, or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>Intellectual Property</p>
          <p className='InfoPagesParagraph'>You retain all ownership rights to the content you create or upload. However, by using Clippergoat services, you grant Clippergoat a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, and display the content in connection with the service. Clippergoat owns all rights to the service itself.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
