type SectionHeaderProps = {
    title: string;
    count?: string;
};

function SectionHeader({ title, count }: SectionHeaderProps) {
    return (
        <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {count && <span className="section-count">{count}</span>}
        </div>
    );
}

export default SectionHeader;
