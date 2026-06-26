import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { projects } from './data/projects';
import { skillColumns } from './data/skills';
import ProyectosPage from './pages/ProyectosPage';
import SobreMiPage from './pages/SobreMiPage';
import ContactoPage from './pages/ContactoPage';

function LandingPage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="hero-eyebrow">Ingeniera informática</div>
          <h1 className="hero-name">
            ARIANA
            <br />
            <em>PORROCHE</em>
          </h1>
          <p className="hero-desc">
            Ingeniera de Software especializada en el desarrollo de aplicaciones
            multiplataforma con experiencias de usuario impecables, y backends robustos y
            mantenibles
          </p>
          <Link to="/proyectos" className="hero-cta">
            Ver proyectos <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      <section>
        <div className="section-header">
          <span className="section-title">Proyectos destacados</span>
          <span className="section-count">{projects.length} trabajos</span>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 2).map((project) => (
            <div key={project.title} style={{ all: 'unset', display: 'contents' }}>
              <div className="project-card" style={{ cursor: 'default' }}>
                <div className="mockup-area web-only" style={{ minHeight: 120 }} />
                <div className="project-body">
                  <div className="project-top">
                    <span className="project-type">{(project as any).type ?? 'Proyecto'}</span>
                    <span className="project-year">{(project as any).year ?? ''}</span>
                  </div>
                  <div className="project-title">{project.title}</div>
                  <p className="project-desc">{project.description}</p>
                </div>
              </div>
            </div>
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
