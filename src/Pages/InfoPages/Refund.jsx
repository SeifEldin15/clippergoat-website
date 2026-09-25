import React from 'react';
import './InfoPages.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Refund = () => {
  return (
    <>
      <Navbar />
      <div className='Pirvacy-Container'>
        <h1 className="information-container-header custom-header-title">Refund <span className="glow-text">policy</span></h1>
        
        <div>
          <p className='custom-header-subtitle-no-centner glow-text'>Effective Date: July 1st, 2024</p>
          <p className='InfoPagesParagraph'>Thank you for choosing ClipperGoat. We value your business and strive to provide the best possible service. Please review our No Refund Policy carefully before purchasing our services.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>1. General Policy</p>
          <p className='InfoPagesParagraph'>All sales of ClipperGoat services, including but not limited to subscriptions, upgrades, and add-ons, are final. Once a purchase is completed, it is non-refundable. We do not offer refunds or credits for any part of a billing cycle, including but not limited to unused or partially used services, unless otherwise specified in this policy.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>2. Subscription Services</p>
          <p className='InfoPagesParagraph'>ClipperGoat operates on a subscription basis, with fees charged periodically (monthly, quarterly, or annually). By subscribing to our services, you acknowledge and agree that:
          <br/>• Subscription fees are non-refundable.
          <br/>• Subscriptions will automatically renew at the end of each billing cycle unless canceled at least 24 hours before the renewal date.
          <br/>• Cancellations will take effect at the end of the current billing cycle. No refunds will be provided for the remaining period of the subscription.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>3. Trials and Promotional Offers</p>
          <p className='InfoPagesParagraph'>If ClipperGoat offers any free trials or promotional discounts, these offers are subject to specific terms and conditions that will be outlined at the time of the offer. Once the trial or promotional period ends, standard subscription fees will apply, and these fees are non-refundable.</p>
          
          <p className='custom-header-subtitle-no-centner glow-text'>4. Exceptional Circumstances</p>
          <p className='InfoPagesParagraph'>While our general policy is no refunds, we understand that exceptional circumstances may arise. In such cases, please contact our support team, and we will review your situation on a case-by-case basis.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Refund;
