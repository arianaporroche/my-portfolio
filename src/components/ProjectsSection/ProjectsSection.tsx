import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './ProjectsSection.css';

type ProjectsSectionProps = {
    preview?: boolean;
};

function ProjectsSection({ preview = false }: ProjectsSectionProps) {
    const visibleProjects = preview ? projects.slice(0, 2) : projects;

    return (
        <section>
            <div className="section-header">
                <span className="section-title">Proyectos destacados</span>
            </div>
            <div className="projects-container">
                <div className="projects-grid">
                    {visibleProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            type={project.type}
                            year={project.year}
                            title={project.title}
                            summary={project.summary}
                            techStack={project.techStack}
                            image={project.image}
                            alt={project.alt}
                        />
                    ))}
                </div>
                {preview && (
                    <div className="projects-btn">
                        <Link to="/proyectos" className="btn-primary">
                            Ver todos los proyectos <span className="arrow">→</span>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectsSection;
