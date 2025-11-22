import SkillIcon from "./SkillIcon";

export default function SkillSection({ title, skills, iconColor }) {

    const currentTheme = document.documentElement.getAttribute("data-theme");
    const isDefaultTheme = !currentTheme || currentTheme === "default";

    return (
        <section className="skill-section">
            <h2>{title}</h2>

            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>

                        <SkillIcon
                            coloredSrc={skill.deviconColor}
                            plainSrc={skill.deviconPlain}
                            iconColor={iconColor}
                            isDefaultTheme={isDefaultTheme}
                        />

                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
