import React, { useEffect, useState } from 'react';
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
  const [statsLoaded, setStatsLoaded] = useState(false);

  useEffect(() => {
    const targetCounters = {
      experience: 7,
      projects: 75,
      satisfaction: 95
    };

    // Set initial values immediately for all devices
    const setInitialValues = () => {
      Object.keys(targetCounters).forEach((key) => {
        const element = document.querySelector(`[data-counter="${key}"]`);
        if (element) {
          element.textContent = targetCounters[key];
          // Ensure the element is visible
          element.style.opacity = '1';
          element.style.visibility = 'visible';
          element.style.display = 'block';
          
          // Debug logging for mobile
          console.log(`Set ${key} counter to ${targetCounters[key]}`);
        } else {
          console.log(`Counter element for ${key} not found`);
        }
      });
    };

    // Set values immediately
    setInitialValues();
    setStatsLoaded(true);

    // Also set values after a short delay to ensure DOM is ready
    setTimeout(setInitialValues, 100);
    setTimeout(setInitialValues, 500);

    // Mobile-specific visibility check
    const checkMobileVisibility = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        console.log('Mobile device detected, ensuring stats visibility');
        const statItems = document.querySelectorAll('.stat-item');
        console.log(`Found ${statItems.length} stat items`);
        
        statItems.forEach((item, index) => {
          const h3 = item.querySelector('h3');
          const p = item.querySelector('p');
          const icon = item.querySelector('.stat-icon');
          
          console.log(`Stat item ${index}:`, {
            h3: h3 ? h3.textContent : 'not found',
            p: p ? p.textContent : 'not found',
            icon: icon ? 'found' : 'not found'
          });
        });
      }
    };

    // Check visibility on mobile
    checkMobileVisibility();
    setTimeout(checkMobileVisibility, 200);
    setTimeout(checkMobileVisibility, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsLoaded) {
            // Animate counters
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Also observe on scroll for mobile devices
    const handleScroll = () => {
      const statsSection = document.querySelector('.stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !statsLoaded) {
          const counters = document.querySelectorAll('[data-counter]');
          counters.forEach(counter => {
            const key = counter.getAttribute('data-counter');
            const target = targetCounters[key];
            if (target && counter.textContent === '0') {
              // Trigger animation
              let current = 0;
              const increment = target / 50;
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
              }, 50);
            }
          });
        }
      }
    };

    // Add scroll listener for mobile
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Ensure stats are visible on mobile
    const ensureMobileVisibility = () => {
      const statItems = document.querySelectorAll('.stat-item');
      statItems.forEach(item => {
        item.style.display = 'block';
        item.style.visibility = 'visible';
        item.style.opacity = '1';
        
        const h3 = item.querySelector('h3');
        const p = item.querySelector('p');
        const icon = item.querySelector('.stat-icon');
        
        if (h3) {
          h3.style.display = 'block';
          h3.style.visibility = 'visible';
          h3.style.opacity = '1';
        }
        if (p) {
          p.style.display = 'block';
          p.style.visibility = 'visible';
          p.style.opacity = '1';
        }
        if (icon) {
          icon.style.display = 'block';
          icon.style.visibility = 'visible';
          icon.style.opacity = '1';
        }
      });
    };

    // Ensure visibility on mobile
    ensureMobileVisibility();
    setTimeout(ensureMobileVisibility, 200);
    setTimeout(ensureMobileVisibility, 500);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [statsLoaded]);

  const stats = [
    {
      icon: faChartLine,
      number: 7,
      suffix: "+",
      text: "Years of Experience",
      key: "experience"
    },
    {
      icon: faBuilding,
      number: 75,
      suffix: "+",
      text: "Successful Projects",
      key: "projects"
    },
    {
      icon: faUsers,
      number: 95,
      suffix: "%",
      text: "Client Satisfaction",
      key: "satisfaction"
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
              bio: "With over 40 years of experience in structural engineering, Rajesh leads KRISHNA STRUCTURALS with a vision of excellence and innovation.",
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
    "PGT Exoports Dindigul",
    "sunil industries limited",
    "Dharani Rubber company",
    "Rama spinners limited",
    "H and H precision limited",
    "Saravana Tex Rajapalayam",

  ];

  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about KRISHNA STRUCTURALS and our commitment to excellence in structural engineering</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> {'>'} <span>About Us</span>
        </div>
      </nav>

      {/* Overview Section - First Container */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="KRISHNA STRUCTURALS Office" />
            </div>
            <div className="overview-text">
              <h2>Our Company</h2>
              <p>
                Established in 2018, KRISHNA STRUCTURALS is a leading structural engineering firm in the country. 
                We provide innovative, sustainable, and cost-effective structural engineering solutions with a commitment to excellence.
              </p>
              <p>
                Our team of experienced engineers and architects work together to deliver projects that not only meet but exceed client expectations.
                We believe in building relationships based on trust, quality, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Second Container */}
      <section className="stats-section" id="stats-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <FontAwesomeIcon 
                  icon={stat.icon} 
                  className="stat-icon" 
                />
                <div className="stat-number" data-counter={stat.key}>
                  {stat.number}
                </div>
                <p>
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strengths Section - Third Container */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Our Core Strengths</h2>
          <div className="mission-content">
            <div className="mission-box">
              <h2>Customization</h2>
              <p>
                Tailored solutions for specific client needs.
              </p>
            </div>
            <div className="mission-box">
              <h2>Quality and Durability</h2>
              <p>
                High-quality materials and robust construction.
              </p>
            </div>
            <div className="mission-box">
              <h2>Professionalism and Expertise</h2>
              <p>
                Outstanding service and commitment to excellence.
              </p>
            </div>
            <div className="mission-box">
              <h2>Versatility</h2>
              <p>
                Adaptable steel structures for various uses.
              </p>
            </div>
            <div className="mission-box">
              <h2>Customer Satisfaction</h2>
              <p>
                Positive client experiences and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Hidden */}
      {/* <section className="section team-section">
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
                    <a href="mailto:rajesh@krishnastructurals.in" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Clients Section - Fourth Container */}
      <section className="clients-section">
        <div className="container">
          <h2 className="section-title">Our Top Clients</h2>
          <p className="section-subtitle">
            We've had the privilege of working with leading organizations across various sectors.
          </p>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-name">
                <h3>{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 