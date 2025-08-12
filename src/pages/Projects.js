import React from 'react';
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
          <Link to="/">Home</Link> > <span>Projects</span>
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
      </div>
    </div>
  );
};

export default Projects; 