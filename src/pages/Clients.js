import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Clients.css';

// Import local images
import client1 from '../assets/images/1.jpeg';
import client2 from '../assets/images/2.jpeg';
import client3 from '../assets/images/3.jpeg';
import client4 from '../assets/images/4.jpeg';
import client5 from '../assets/images/5.jpeg';
import client6 from '../assets/images/6.jpeg';
import client7 from '../assets/images/7.jpeg';

const Clients = () => {
  const clients = [
    client7,
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,

  ];

  // Same testimonials data as Home page
  const testimonials = [
    {
      name: "Er.Durairajan",
      position: "Chairman – Samy builders",
      quote: "Excellent service! The team delivered beyond our expectations."
    },
    {
      name: "Thillaiselvam",
      position: "GM-sunil industries limited",
      quote: "Highly professional and skilled. Would love to work with them again."
    }
  ];

  return (
    <div className="clients-page">
      {/* Header */}
      <div className="contact-header">
        <div className="container">
          <h1>Our Clients</h1>
          <p>We take pride in working with these amazing companies</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> {" > "} <span>Our Clients</span>
        </div>
      </nav>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <h2 className="clients-title">Our Clients</h2>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client}
                alt={`Client ${index + 1}`}
                className="client-logo"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Same as Home page */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar hollow">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <h4 className="testimonial-author">
                  {testimonial.name} <span>{testimonial.position}</span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients; 