import { techStackColumns, type TechStackColumnsProps, type TechStackItemProps } from '../../data/techStack';
import './TechStackSection.css';


function TechStackSection() {
    return (
        <section style={{ marginTop: '3rem' }}>
            <div className="section-header">
                <span className="section-title">Stack tecnológico</span>
            </div>
            <div className="about-strip">
                {techStackColumns.map((col: TechStackColumnsProps) => (
                    <div key={col.label} className="about-column">
                        <div className="about-label">{col.label}</div>
                        {col.items.map((s: TechStackItemProps) => (
                            <div className="skill-row" key={s.name}>
                                <span className="skill-name">{s.name}</span>
                                {s.domain && <span className="skill-domain">{s.domain}</span>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechStackSection;
