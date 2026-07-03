import { skillColumns } from '../../data/skills';
import './TechStackSection.css';


function TechStackSection({ style }) {
    return (
        <section style={style}>
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
    );
}

export default TechStackSection;
