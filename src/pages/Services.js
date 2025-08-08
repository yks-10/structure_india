import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faCogs, 
  faTools, 
  faShieldAlt,
  faHardHat,
  faLightbulb,
  faChartLine,
  faUsers,
  faClipboardCheck,
  faRulerCombined,
  faIndustry,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      icon: faBuilding,
      title: "Structural Design",
      description: "Complete structural design services for residential, commercial, and industrial buildings.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/structural-design"
    },
    {
      icon: faCogs,
      title: "Structural Analysis",
      description: "Comprehensive analysis of existing structures to assess integrity and recommend solutions.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/structural-analysis"
    },
    {
      icon: faTools,
      title: "Retrofit & Rehabilitation",
      description: "Specialized services for strengthening existing structures and extending their service life.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/retrofit-rehabilitation"
    },
    {
      icon: faShieldAlt,
      title: "Seismic Design",
      description: "Expert design services to enhance structural resistance against seismic forces.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/seismic-design"
    },
    {
      icon: faHardHat,
      title: "Construction Management",
      description: "Professional oversight throughout the construction process ensuring quality execution.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/construction-management"
    },
    {
      icon: faLightbulb,
      title: "Consulting Services",
      description: "Expert advice on feasibility studies, value engineering, and peer reviews.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80",
      link: "/services/consulting"
    }
  ];

  const specializedServices = [
    {
      icon: faRulerCombined,
      title: "Foundation Design",
      description: "Custom foundation solutions for various soil conditions and structural requirements."
    },
    {
      icon: faIndustry,
      title: "Pre-Engineered Buildings",
      description: "Cost-effective structural solutions for industrial and commercial applications."
    },
    {
      icon: faSearch,
      title: "Structural Audits",
      description: "Comprehensive assessment of existing structures to ensure safety and compliance."
    },
    {
      icon: faChartLine,
      title: "Load Testing",
      description: "Professional load testing services to verify structural capacity and performance."
    },
    {
      icon: faUsers,
      title: "Expert Witness",
      description: "Professional testimony and technical support for legal proceedings."
    },
    {
      icon: faClipboardCheck,
      title: "Quality Assurance",
      description: "Comprehensive quality control and assurance services for construction projects."
    }
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <div className="services-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive engineering solutions tailored to your needs</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> {'>'} <span>Our Services</span>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>What We Offer</h2>
            <p>
              At KRISHNA STRUCTURALS, we provide a comprehensive range of structural engineering services to meet the diverse needs of our clients. 
              Whether you're planning a new construction project, renovating an existing structure, or need consultation on structural integrity, 
              our team of experienced engineers is here to help.
            </p>
            <p>
              Our services are backed by over 7 years of industry experience and a commitment to excellence in every project we undertake. 
              We combine technical expertise with innovative thinking to deliver solutions that are not only structurally sound but also 
              cost-effective and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section main-services-section">
        <div className="container">
          <div className="section-title">
            <h2>Explore our specialized engineering solutions</h2>
          </div>
          <div className="services-grid">
            {mainServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-info">
                  <FontAwesomeIcon icon={service.icon} className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="read-more">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="section specialized-services-section">
        <div className="container">
          <div className="section-title">
            <p>Additional specialized services</p>
          </div>
          <div className="specialized-services">
            {specializedServices.map((service, index) => (
              <div key={index} className="specialized-service">
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Contact our team today for a consultation and discover how we can help bring your vision to life. 
              Our experts are ready to discuss your project requirements and provide tailored solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn primary-btn">
                Request a Quote
              </Link>
              <Link to="/projects" className="btn secondary-btn">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 