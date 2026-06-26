import SkillColumn from '../components/SkillColumn';
import SectionHeader from '../components/SectionHeader';
import { skillColumns } from '../data/skills';
import { Link } from 'react-router-dom';

function SobreMiPage() {
    return (
        <>
            <section className="about-me">
                <div>
                    <h1 className="about-me-name">
                        <em>Hola, soy</em> Ariana Porroche
                    </h1>
                    <p className="about-me-desc">
                        Ingeniera Informática por la Universidad de Zaragoza, apasionada por construir sistemas que resuelven problemas reales.
                        Busco mi primera oportunidad profesional donde seguir aprendiendo y contribuir desde el primer día.
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
                    <Link to="/contacto" className="hero-cta">
                        Contacta conmigo <span className="arrow">→</span>
                    </Link>
                </div>
            </section>

            <section>
                <SectionHeader title="Formación académica" />
                <div className="education-list">
                    <div className="education-item">
                        <div className="education-row">
                            <span className="education-degree">Grado en Ingeniería Informática</span>
                            <span className="education-year">2022 – 2026</span>
                        </div>
                        <div className="education-institution">Universidad de Zaragoza · Escuela de Ingeniería y Arquitectura</div>
                    </div>
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

export default SobreMiPage;
