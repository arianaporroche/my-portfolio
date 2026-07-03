import SkillColumn from '../../components/SkillColumn';
import SectionHeader from '../../components/SectionHeader';
import { skillColumns } from '../../data/skills';
import { logros } from '../../data/logros';
import { Link } from 'react-router-dom';
import "./AboutMe.css";

function AboutMe() {
    return (
        <>
            <section className="about-me">
                <div>
                    <h1 className="about-me-name">
                        Hola, soy Ariana Porroche
                    </h1>
                    <p className="about-me-desc">
                        <em>Ingeniera informática</em> por la Universidad de Zaragoza, apasionada por construir sistemas que resuelven problemas reales.
                    </p>
                    <p className="about-me-desc">
                        Busco mi primera oportunidad profesional donde seguir aprendiendo y creciendo como desarrolladora de software.
                    </p>
                    <div className="about-me-tags-container">
                        <span className="about-me-tag" key="location">
                            <svg className="about-me-tag-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M8 1.5a5 5 0 0 1 5 5c0 3.5-5 8-5 8s-5-4.5-5-8a5 5 0 0 1 5-5Z" />
                            </svg>
                            Zaragoza, España
                        </span>
                        <span className="about-me-tag" key="available">
                            <svg className="about-me-tag-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <circle cx="8" cy="8" r="3.5" fill="currentColor" />
                                <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
                            </svg>
                            Disponible
                        </span>
                    </div>
                    <Link to="/contacto" className="btn-primary">
                        Contacta conmigo <span className="arrow">→</span>
                    </Link>
                </div>
            </section>

            <section>
                <SectionHeader title="Formación académica" />
                <div className="edu-grid">

                    {/* Educación */}
                    <div className="edu-card">
                        <div className="edu-card-label">Educación</div>
                        <div className="edu-entry">
                            <div className="edu-entry-main">
                                <span className="edu-entry-title">Grado en Ingeniería Informática</span>
                                <span className="edu-entry-badge">2022 – 2026</span>
                            </div>
                            <div className="edu-entry-sub">Universidad de Zaragoza · EINA</div>
                        </div>
                    </div>

                    {/* Idiomas */}
                    <div className="edu-card">
                        <div className="edu-card-label">Idiomas</div>
                        <div className="edu-entry">
                            <div className="edu-entry-main">
                                <span className="edu-entry-title">Español</span>
                                <span className="edu-entry-badge edu-entry-badge--level">Nativo</span>
                            </div>
                        </div>
                        <div className="edu-entry">
                            <div className="edu-entry-main">
                                <span className="edu-entry-title">Inglés</span>
                                <span className="edu-entry-badge edu-entry-badge--level">B2</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <SectionHeader title="Experiencia extracurricular" />
                <div className="logros-grid">
                    {logros.map((logro) => (
                        <div className="logro-card" key={logro.title}>
                            <div className="logro-card-title">{logro.title}</div>
                            <div className="logro-card-info">{logro.place} · {logro.year}</div>
                            <p className="logro-card-desc">{logro.description}</p>
                            <div className="logro-card-skills">
                                {logro.skills.map((skill) => (
                                    <span className="logro-skill-tag" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
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
        </>
    );
}

export default AboutMe;
