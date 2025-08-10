import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbz8_bM_E7IqS8slJlDzZ_LKzaq7B8axXLC8bUHvViBHOvzw_iiElStuBeEwytBqLADjUw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert('Message sent and data saved to Google Sheet!');
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Failed to save data. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Failed to connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or project discussions.</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Feel free to reach out to us through any of the following channels:</p>
              
              <div className="info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div>
                  <h3>Our Office</h3>
                  <p>1/224, kolinjippaty road,<br />
                  Kattunayakkanpatty, Nilakottai taluk<br />
                  Tamilnadu-624206</p>
                </div>
              </div>

              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} />
                <div>
                  <h3>Phone</h3>
                  <p>+91 9787706411</p>
                  <p>+91 7094047131</p>
                </div>
              </div>

              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <div>
                  <h3>Email</h3>
                  <p>kamarajkrishna1@gmail.com</p>
                  <p>krishnastruturals12@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <h3>Working Hours</h3>
                  <p>All Days: 6:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              {isSubmitted ? (
                <div className="form-success">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <h2>Thank You!</h2>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  <button className="btn" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send us a Message</h2>
                  
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn submit-btn" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <p>Visit our office location or get directions using the map below:</p>
          <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3926.7344246679045!2d77.88700507503395!3d10.202208989913743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEyJzA4LjAiTiA3N8KwNTMnMjIuNSJF!5e0!3m2!1sen!2sin!4v1754677642045!5m2!1sen!2sin"
              width="100%" 
              height="450" 
              style={{border:0}}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="KRISHNA STRUCTURALS Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 