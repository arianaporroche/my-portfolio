import MonitorMockup from './MonitorMockup';
import PhoneMockup from './PhoneMockup';

type ProjectCardProps = {
    type: string;
    year: string;
    title: string;
    description: string;
    techStack: string[];
    webImage: string;
    webAlt: string;
    mobileImage?: string;
    mobileAlt?: string;
};

function ProjectCard({
    type,
    year,
    title,
    description,
    techStack,
    webImage,
    webAlt,
    mobileImage,
    mobileAlt,
}: ProjectCardProps) {
    const isWebOnly = !mobileImage;

    return (
        <div className="project-card">
            <div className={`mockup-area ${isWebOnly ? 'web-only' : ''}`}>
                <MonitorMockup src={webImage} alt={webAlt} />
                {mobileImage && <PhoneMockup src={mobileImage} alt={mobileAlt ?? webAlt} />}
            </div>
            <div className="project-body">
                <div className="project-top">
                    <span className="project-type">{type}</span>
                    <span className="project-year">{year}</span>
                </div>
                <h3 className="project-title">{title}</h3>
                <p className="project-desc">{description}</p>
                <div className="project-footer">
                    <div className="tech-stack">
                        {techStack.map((tech) => (
                            <span className="tech-tag" key={tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <button className="btn-primary">
                        Ver más <span className="arrow">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
