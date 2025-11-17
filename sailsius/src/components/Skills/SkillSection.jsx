import SkillTag from "./SkillTag";

export default function SkillSection({ title, skills }) {
    return (
        <section className="skill-section">
            <h2 className="skill-category-title">{title}</h2>

            <div className="skill-tags-container">
                {skills.map((skill) => (
                    <SkillTag key={skill.name} skill={skill} />
                ))}
            </div>
        </section>
    );
}
