import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/projects';

function ProyectosPage() {
    return (
        <section>
            <SectionHeader title="Proyectos destacados" count={`${projects.length} trabajos`} />
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
}

export default ProyectosPage;
