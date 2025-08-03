import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedinIn, 
  faTwitter, 
  faEnvelope,
  faChartLine,
  faBuilding,
  faUsers,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn as faLinkedinBrand,
  faTwitter as faTwitterBrand
} from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            const targetCounters = {
              experience: 35,
              projects: 500,
              satisfaction: 100,
              awards: 25
            };

            Object.keys(targetCounters).forEach((key) => {
              const target = targetCounters[key];
              const increment = target / 50;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                const element = document.querySelector(`[data-counter="${key}"]`);
                if (element) {
                  element.textContent = Math.floor(current);
                }
              }, 50);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: faChartLine,
      number: 35,
      suffix: "+",
      text: "Years of Experience",
      key: "experience"
    },
    {
      icon: faBuilding,
      number: 500,
      suffix: "+",
      text: "Successful Projects",
      key: "projects"
    },
    {
      icon: faUsers,
      number: 100,
      suffix: "%",
      text: "Client Satisfaction",
      key: "satisfaction"
    },
    {
      icon: faTrophy,
      number: 25,
      suffix: "+",
      text: "Industry Awards",
      key: "awards"
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      bio: "With over 40 years of experience in structural engineering, Rajesh leads Structures India with a vision of excellence and innovation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Priya Sharma",
      position: "Technical Director",
      bio: "Priya specializes in complex structural designs and has been instrumental in some of our most challenging projects.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Vikram Patel",
      position: "Operations Director",
      bio: "Vikram ensures the smooth execution of all projects, bringing efficiency and precision to our operations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const clients = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Structures India and our commitment to excellence in structural engineering</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> > <span>About Us</span>
        </div>
      </nav>

      {/* Overview Section */}
      <section className="section overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Structures India Office" />
            </div>
            <div className="overview-text">
              <h2>Our Company</h2>
              <p>
                Established in 1988, Structures India has evolved into one of the leading structural engineering firms in the country. 
                We provide innovative, sustainable, and cost-effective structural engineering solutions with a commitment to excellence.
              </p>
              <p>
                Our team of experienced engineers and architects work together to deliver projects that not only meet but exceed 
                client expectations. We believe in building relationships based on trust, quality, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                <h3 data-counter={stat.key}>0</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                "To provide innovative, sustainable, and cost-effective structural solutions that exceed client expectations 
                while maintaining the highest standards of quality and environmental responsibility."
              </p>
            </div>
            <div className="mission-box">
              <h2>Our Vision</h2>
              <p>
                "To be recognized as the industry leader in structural engineering, known for our technical excellence, 
                innovative approach, and commitment to sustainable development."
              </p>
            </div>
            <div className="mission-box">
              <h2>Our Values</h2>
              <p>
                "Excellence in all we do. Integrity and transparency. Innovation and creativity. 
                Commitment to sustainability. Respect for people and environment"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-title">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faLinkedinBrand} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faTwitterBrand} />
                    </a>
                    <a href="mailto:rajesh@structuresindia.in" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section clients-section">
        <div className="container">
          <h2 className="section-title">Our Top Clients</h2>
          <p className="section-subtitle">
            We've had the privilege of working with leading organizations across various sectors.
          </p>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-logo">
                <img src={client} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 