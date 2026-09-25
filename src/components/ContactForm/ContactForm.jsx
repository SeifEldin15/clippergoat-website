import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-section__intro">
        <h2 className="contact-section__title glow-text">
          Contact us
        </h2>
        <p className="contact-section__description">
          We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
        </p>
        <div className="contact-info">
          {/* <div className="contact-info__item">
            <h3 className='glow-text'>Email</h3>
            <p>support@clippergoat.com</p>
          </div> */}
          <div className="contact-info__item">
            <h3 className='glow-text'>Phone</h3>
            <p> +1 (480) 236-4263</p>
          </div>
          <div className="contact-info__item">
            <h3 className='glow-text'>Support</h3>
            <p>support@clippergoat.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form__content">
            <h3 className="contact-form__header glow-text">How can we help you?</h3>
            <div className="contact-form__row">
              <input
                type="text"
                name="firstName"
                className="contact-form__input"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                className="contact-form__input"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form__row">
              <input
                type="email"
                name="email"
                className="contact-form__input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                className="contact-form__input"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form__row">
              <input
                type="text"
                name="companyName"
                className="contact-form__input"
                placeholder="Company Name (optional)"
                value={formData.companyName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                className="contact-form__input"
                placeholder="Message Title"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form__message-wrapper">
              <textarea
                name="message"
                className="contact-form__message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="contact-form__submit-btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
