import SkillColumn from '../components/SkillColumn';
import SectionHeader from '../components/SectionHeader';
import { skillColumns } from '../data/skills';

function SobreMiPage() {
    return (
        <section>
            <SectionHeader title="Stack tecnológico" />
            <div className="about-strip">
                {skillColumns.map((column) => (
                    <SkillColumn key={column.label} label={column.label} skills={column.skills} />
                ))}
            </div>
        </section>
    );
}

export default SobreMiPage;
