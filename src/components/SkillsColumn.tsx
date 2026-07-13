import ReactMarkdown from "react-markdown";

type SkillsColumnProps = {
    label: string;
    description: string;
};

function SkillsColumn({ label, description }: SkillsColumnProps) {
    return (
        <div className="skills-row">
            <div className="skills-label">{label}</div>
            <div className="skills-description">
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
        </div>
    );
}

export default SkillsColumn;
