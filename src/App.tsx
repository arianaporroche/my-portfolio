import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import { skillColumns } from './data/skills';
import ProyectosPage from './pages/ProyectosPage';
import SobreMiPage from './pages/SobreMiPage';
import ContactoPage from './pages/ContactoPage';
import { Carousel } from './components/Carousel/Carousel';

const misProyectos = [
  '/mockups/a-darts.png',
  '/mockups/codelab.png',
  '/mockups/dartly.png',
  '/mockups/geoada.png',
  '/mockups/montgomery-safety-map.png',
  '/mockups/plan-my-weather.png',
];

function LandingPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-header-box">
          <h1 className="hero-name">
            ARIANA PORROCHE
          </h1>
          <p className="hero-meta">
            <span className="item">Ingeniera informática</span>
            <span className="item">Desarrollo software</span>
            <span className="item">Zaragoza, España</span>
          </p>
          <p className="hero-desc">
            <span className="desc-line line-1">[Diseño y desarrollo soluciones de software</span>
            <span className="desc-line line-2">robustas, combinando experiencias de usuario impecables y</span>
            <span className="desc-line line-3">código mantenible]</span>
          </p>
        </div>
      </section>

      <Carousel images={misProyectos} />

      <section>
        <div className="section-header">
          <span className="section-title">Proyectos destacados</span>
          <span className="section-count">{projects.length} trabajos</span>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.title}
              type={project.type}
              year={project.year}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              webImage={project.webImage}
              webAlt={project.webAlt}
              mobileImage={project.mobileImage}
              mobileAlt={project.mobileAlt}
            />
          ))}
        </div>
        <div style={{ padding: '1.5rem 3rem 0' }}>
          <Link to="/proyectos" className="btn-primary">
            Ver todos los proyectos <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <div className="section-header">
          <span className="section-title">Stack tecnológico</span>
        </div>
        <div className="about-strip">
          {skillColumns.map((col) => (
            <div key={col.label} className="about-column">
              <div className="about-label">{col.label}</div>
              {col.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <span className="skill-name">{s.name}</span>
                  {s.domain && <span className="skill-domain">{s.domain}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/sobre-mi" element={<SobreMiPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
