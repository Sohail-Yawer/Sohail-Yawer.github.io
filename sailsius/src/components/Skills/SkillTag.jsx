export default function SkillTag({ skill }) {
    const { name, icon } = skill;

    return (
        <div className="skill-tag">
            <img src={icon} alt={`${name} logo`} className="skill-icon" />
            <span>{name}</span>
        </div>
    );
}
