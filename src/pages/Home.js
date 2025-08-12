import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faCogs, 
  faUsers, 
  faTrophy,
  faChartLine,
  faTools,
  faLightbulb,
  faMapMarkerAlt,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    satisfaction: 0,
    awards: 0
  });

  const heroSlides = [
    {
      title: "Building the Future with Strength & Innovation",
      subtitle: "Providing high-quality construction and engineering solutions.",
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    },
    {
              title: "The Future Solutions",
      subtitle: "Delivering innovative and sustainable structural solutions.",
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    },
    {
      title: "Your Trusted Partner in Construction",
      subtitle: "From concept to completion, we ensure quality and precision.",
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
    }
  ];

  const services = [
    {
      icon: faBuilding,
      title: "Structural Engineering",
      description: "We design safe, durable, and cost-effective structures."
    },
    {
      icon: faCogs,
      title: "Project Management",
      description: "From planning to execution, we ensure efficiency and quality."
    },
    {
      icon: faTools,
      title: "Consultancy",
      description: "Expert advice for your engineering and construction needs."
    }
  ];

  const stats = [
    {
      icon: faChartLine,
      number: 7,
      suffix: "+",
      text: "Years of Experience"
    },
    {
      icon: faBuilding,
      number: 75,
      suffix: "+",
      text: "Successful Projects"
    },
    {
      icon: faUsers,
      number: 95,
      suffix: "%",
      text: "Client Satisfaction"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Commercial Complex",
      description: "A modern 12-story commercial complex featuring sustainable design and state-of-the-art facilities.",
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Residential Tower",
      description: "Luxury residential tower with 200+ premium apartments and world-class amenities.",
      location: "Delhi, NCR",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Industrial Facility",
      description: "Advanced manufacturing facility built with precision engineering and innovative structural solutions.",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Er.Durairajan",
      position: "Chairman – Samy builders",
      quote: "Excellent service! The team delivered beyond our expectations.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      placeholder: "👨‍💼"
    },
    {
      name: "Thillaiselvam",
      position: "GM-sunil industries limited",
      quote: "Highly professional and skilled. Would love to work with them again.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      placeholder: "👨‍💻"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            const targetCounters = {
              experience: 7,
              projects: 75,
              satisfaction: 95
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
                setCounters(prev => ({
                  ...prev,
                  [key]: Math.floor(current)
                }));
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

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: slide.background }}
            >
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <Link to="/contact" className="btn primary-btn">
                  Get in Touch
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About KRISHNA STRUCTURALS</h2>
          <p>
            With over 7 years of experience, we specialize in delivering innovative and sustainable engineering solutions. 
            Our team of experts combines technical excellence with creative problem-solving to create structures that stand the test of time.
          </p>
          <Link to="/about" className="btn secondary-btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                <div className="stat-number">
                  {counters[Object.keys(counters)[index]]}{stat.suffix}
                </div>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Hidden */}
      {/* <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Our Recent Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                    }}
                  />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>Click to learn more about this project</p>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-info-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-location">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
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

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Let's Build Something Great Together</h2>
          <p>Contact us today to discuss your project requirements.</p>
          <Link to="/contact" className="btn primary-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 