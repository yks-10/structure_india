import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Clients.css';

const Clients = () => {
  const clients = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
      <div className="clients-header">
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