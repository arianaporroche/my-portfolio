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
                        <span className="about-me-tag" key="contact">
                            Zaragoza, España
                        </span>
                        <span className="about-me-tag" key="contact">
                            Disponible
                        </span>
                    </div>
                    <Link to="/contacto" className="hero-cta">
                        Contacta conmigo <span className="arrow">→</span>
                    </Link>
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
