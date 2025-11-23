export default function SkillIcon({ coloredSrc, plainSrc }) {

    // Always show original colored icon
    // Fallback: if colored is missing, use plain
    const safeSrc = coloredSrc || plainSrc;

    return (
        <img
            src={safeSrc}
            alt=""
            className="skill-icon"
        />
    );
}
