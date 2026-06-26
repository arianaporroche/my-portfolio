import './App.css';
import ProjectCard from './components/ProjectCard';
import SkillColumn from './components/SkillColumn';
import SectionHeader from './components/SectionHeader';
import { projects } from './data/projects';
import { skillColumns } from './data/skills';

function App() {
  return (
    <div className="portfolio">
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
          <button className="hero-cta">
            Ver proyectos <span className="arrow">→</span>
          </button>
        </div>
      </section>

      <section>
        <SectionHeader title="Proyectos destacados" count={`${projects.length} trabajos`} />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Stack tecnológico" />
        <div className="about-strip">
          {skillColumns.map((column) => (
            <SkillColumn key={column.label} label={column.label} skills={column.skills} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
