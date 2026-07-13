type TechStackItem = {
    name: string;
    domain?: string;
};

type TechStackColumnProps = {
    label: string;
    items: TechStackItem[];
};

function TechStackColumn({ label, items }: TechStackColumnProps) {
    return (
        <div className="about-column">
            <div className="about-label">{label}</div>
            {items.map((item) => (
                <div className="skill-row" key={item.name}>
                    <span className="skill-name">{item.name}</span>
                    {item.domain && <span className="skill-domain">{item.domain}</span>}
                </div>
            ))}
        </div>
    );
}

export default TechStackColumn;
