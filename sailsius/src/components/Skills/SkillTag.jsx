export default function SkillTag({ skill, iconColor }) {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // Skills that do NOT exist in SimpleIcons CDN
    const specialIcons = ["csharp", "java"];
    const isSpecial = specialIcons.includes(skill.iconKey);

    let iconUrl;

    if (isSpecial) {
        // 🎯 Java & C# (special case)
        if (!currentTheme || currentTheme === "default") {
            // Default theme → colorful DevIcon
            iconUrl = skill.devIcon;
        } else {
            // Dark / custom theme → monochrome Iconify with recolor
            iconUrl = `${skill.monoIcon}?color=%23${iconColor}`;
        }
    } else {
        // 🎯 All other languages/frameworks (SimpleIcons)
        iconUrl =
            !currentTheme || currentTheme === "default"
                ? `https://cdn.simpleicons.org/${skill.iconKey}`
                : `https://cdn.simpleicons.org/${skill.iconKey}/${iconColor}`;
    }

    return (
        <div className="skill-tag">
            <img
                src={iconUrl}
                alt={`${skill.name} icon`}
                className="skill-icon"
            />
            <span>{skill.name}</span>
        </div>
    );
}
