import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faLandmark,
  faIndustry,
  faWarehouse,
  faSeedling,
  faLeaf,
  faSolarPanel,
  faHouseChimney,
  faBorderTopLeft,
  faSquare,
  faBuilding,
  faRoadBarrier,
} from '@fortawesome/free-solid-svg-icons';
import './Projects.css';

const whatWeDoItems = [
  { label: 'Marriage hall buildings', icon: faLandmark },
  { label: 'Industrial buildings', icon: faIndustry },
  { label: 'Indoor Stadium', icon: faWarehouse },
  { label: 'Polyhouses', icon: faSeedling },
  { label: 'Green houses', icon: faLeaf },
  { label: 'Solar structures', icon: faSolarPanel },
  { label: 'Terrace roofs', icon: faHouseChimney },
  { label: 'Tile roof works', icon: faBorderTopLeft },
  { label: 'Glass houses', icon: faSquare },
  { label: 'Commercial Buildings', icon: faBuilding },
  { label: 'Toll plaza frames', icon: faRoadBarrier },
];

const successfulProjects = [
  'MV marriage hall, Koyembedu, Chennai',
  'Bannari Amman spinning mills, Vadamadurai, Dindigul',
  'ACV spinning mills, Nlakottai, Dindigul',
  'Gokul Diary farm, Pollachi',
  'Strings Sports, Dindigul',
  'TCR Exports, Eppothum Vendran, Thoothukudi',
  'KPN Readymades, Karaikudi',
  'IG homes, Kodaikanal',
  'Toll gate, Vathalakundu',
  'H and H precisions, Karwar, Karnataka',
  'Krishna Northwood apartments, Bangalore',
  'Badminton court, Salem',
  'Industrial building, Mecheri, Salem',
  'Multi store building, Rameshwaram',
  'Sunil industries, Palayam, Dindigul',
  'Saravana Tex, Rajapalayam',
  'Rama spinners, Dindigul',
  'Aavin milk center, Madurai',
  'PGT exports, Sempatty, Dindigul',
  'Amma Park, Mayanur, Karur',
  'Amma Park, Venjamankoodalur',
  'Tamilnadu Hardwares, Chinnalapatty, Dindigul',
  'Sri Mariamman Temple, Dindigul',
  'Micro composite center, Dindigul',
  'PLM marriage hall, Ponnamaravathy',
];

const Projects = () => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoading(false);
  };

  const handleVideoError = () => {
    setVideoLoading(false);
    setVideoError(true);
  };

  return (
    <div className="projects-page">
      {/* Header */}
      <header className="projects-header">
        <div className="container">
          <h1>Projects</h1>
          <p>What we do and some of our successful projects</p>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> {" > "} <span>Projects</span>
        </div>
      </nav>

      <div className="container">
        {/* What We Do */}
        <section className="section what-we-do">
          <h2 className="section-title">What We Do</h2>
          <div className="what-grid">
            {whatWeDoItems.map((item) => (
              <div key={item.label} className="what-card">
                <div className="what-icon hollow">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="what-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Successful Projects */}
        <section className="section success-projects">
          <h2 className="section-title">Successful Projects</h2>
          <ol className="success-list">
            {successfulProjects.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ol>
        </section>

        {/* Project Video */}
        <section className="section project-video">
          <h2 className="section-title">Project Walkthrough</h2>
          
          {/* YouTube Video - Primary */}
          <div className="youtube-video-wrapper primary-video">
            <div className="youtube-embed">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/CSd8Ih5hpgU"
                title="Project Walkthrough Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)' }}
              ></iframe>
            </div>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <a 
                href="https://youtu.be/CSd8Ih5hpgU" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: 'var(--secondary-color)', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}
              >
                Open in YouTube ↗
              </a>
            </div>
          </div>
          
          {/* Local Video - Alternative */}
          <div className="local-video-wrapper alternative-video">
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--text-primary)' }}>
              Alternative: Download Video
            </h3>
            <div className={`video-wrapper ${videoLoading ? 'loading' : ''}`}>
              {!videoError ? (
                <video 
                  controls 
                  preload="metadata"
                  width="100%"
                  height="auto"
                  onLoadedData={handleVideoLoad}
                  onError={handleVideoError}
                >
                  <source src="/assets/video/naval.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag. 
                    <a href="/assets/video/naval.mp4" download>Download the video</a> instead.
                  </p>
                </video>
              ) : (
                <div style={{ padding: '40px 20px', textAlign: 'center', color: '#fff', background: '#2d3748' }}>
                  <p>Video could not be loaded.</p>
                  <a href="/assets/video/naval.mp4" download style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: '600' }}>
                    Download the video instead
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects; 