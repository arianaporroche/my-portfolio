type Skill = {
    name: string;
    domain?: string;
};

type SkillColumnProps = {
    label: string;
    skills: Skill[];
};

function SkillColumn({ label, skills }: SkillColumnProps) {
    return (
        <div className="about-column">
            <div className="about-label">{label}</div>
            {skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    {skill.domain && <span className="skill-domain">{skill.domain}</span>}
                </div>
            ))}
        </div>
    );
}

export default SkillColumn;
