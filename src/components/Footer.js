import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram,
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF as faFacebookBrand,
  faTwitter as faTwitterBrand,
  faLinkedinIn as faLinkedinBrand,
  faInstagram as faInstagramBrand
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">
              <h3>KRISHNA STRUCTURALS</h3>
                              <p>THE FUTURE SOLUTIONS</p>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/services">Structural Design</Link></li>
              <li><Link to="/services">Construction Management</Link></li>
              <li><Link to="/services">Retrofitting Solutions</Link></li>
              <li><Link to="/services">Project Planning</Link></li>
              <li><Link to="/services">Quality Inspection</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <address>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                1/224, kolinjippaty road,<br />
                Kattunayakkanpatty, Nilakottai taluk<br />
                Tamilnadu-624206
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                +91 9787706411
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                kamarajkrishna1@gmail.com
              </p>
            </address>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookBrand} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitterBrand} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedinBrand} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagramBrand} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} KRISHNA STRUCTURALS. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 