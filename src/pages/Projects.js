import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Residential Buildings');

  const categories = [
    "Residential Buildings",
    "Commercial Buildings",
    "Hotels and Entertainment buildings",
    "Institutional Buildings",
    "Hospitals"
  ];

  const projectsData = {
    "Residential Buildings": [
      {
        id: 1,
        title: "Mubarak Ali Residence",
        location: "Spurtank Road, Chennai",
        year: "2023",
        description: "Modern residential complex with contemporary design",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 2,
        title: "Senthilnathan Residence",
        location: "Adyar, Chennai",
        year: "2022",
        description: "Luxury villa with premium amenities",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 3,
        title: "Badri's Beach House",
        location: "E.C.R, Chennai",
        year: "2023",
        description: "Coastal villa with ocean views",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    "Commercial Buildings": [
      {
        id: 4,
        title: "ABC Corporate Tower",
        location: "Bangalore",
        year: "2023",
        description: "25-story office complex with modern facilities",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 5,
        title: "XYZ Shopping Mall",
        location: "Mumbai",
        year: "2022",
        description: "Multi-level retail complex with entertainment zones",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    "Hotels and Entertainment buildings": [
      {
        id: 6,
        title: "Luxury Resort",
        location: "Goa",
        year: "2023",
        description: "5-star beachfront resort with spa facilities",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80"
      },
      {
        id: 7,
        title: "Grand Cinema Hall",
        location: "Delhi",
        year: "2022",
        description: "Multi-screen cinema with premium seating",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    "Institutional Buildings": [
      {
        id: 8,
        title: "SRM University Campus",
        location: "Chennai",
        year: "2023",
        description: "Modern educational complex with state-of-the-art facilities",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 9,
        title: "Crescent Institute of Technology",
        location: "Chennai",
        year: "2022",
        description: "Engineering college with advanced laboratories",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ],
    "Hospitals": [
      {
        id: 10,
        title: "Galaxy Hospitals",
        location: "Mumbai",
        year: "2023",
        description: "Multi-specialty hospital with modern medical equipment",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 11,
        title: "Apollo Medical Center",
        location: "Delhi",
        year: "2022",
        description: "Specialized medical center with advanced diagnostics",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80"
      }
    ]
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="projects-page">
      {/* Header */}
      <header className="projects-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>We take pride that these are some of our projects.</p>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> > <span>Our Projects</span>
        </div>
      </nav>

      {/* Projects Content */}
      <div className="container">
        <div className="projects-content">
          {/* Categories Sidebar */}
          <aside className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </aside>

          {/* Projects Grid */}
          <div className="projects-grid">
            <div className="projects-list">
              {projectsData[activeCategory] ? (
                projectsData[activeCategory].map((project) => (
                  <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} />
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-location">{project.location}</p>
                      <p className="project-year">{project.year}</p>
                      <p className="project-description">{project.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No projects available for this category.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 