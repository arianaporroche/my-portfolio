import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './ProjectsSection.css';

function ProjectsSection() {
    return (
        <section>
            <div className="section-header">
                <span className="section-title">Proyectos destacados</span>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        type={project.type}
                        year={project.year}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        image={project.image}
                        alt={project.alt}
                    />
                ))}
            </div>
            <div style={{ padding: '1.5rem 3rem 0' }}>
                <Link to="/proyectos" className="btn-primary">
                    Ver todos los proyectos <span className="arrow">→</span>
                </Link>
            </div>
        </section>
    );
}

export default ProjectsSection;
