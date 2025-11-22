import { useMemo } from "react";
import hexToFilter from "../../utils/hexToFilter";

export default function SkillIcon({ coloredSrc, plainSrc, iconColor, isDefaultTheme }) {

    // compute CSS filter only when color changes
    const filterStyle = useMemo(() => {
        if (isDefaultTheme) return "none";
        if (!iconColor) return "none";

        const { filter } = hexToFilter(iconColor);
        return filter;
    }, [iconColor, isDefaultTheme]);

    return (
        <img
            src={isDefaultTheme ? coloredSrc : plainSrc}
            alt=""
            className="skill-icon"
            style={{
                filter: filterStyle,
                transition: "filter 0.3s ease"
            }}
        />
    );
}
