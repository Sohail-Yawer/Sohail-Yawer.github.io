import SkillIcon from "./SkillIcon";

export default function SkillSection({ title, skills }) {

    return (
        <section className="skill-section">
            <h2>{title}</h2>

            <div className="skill-grid">
                {skills.map((skill, idx) => (
                    <div className="skill-card" key={idx}>

                        <SkillIcon
                            coloredSrc={skill.deviconColor}
                            plainSrc={skill.deviconPlain}
                        />

                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
