// export function devicon(name, { hasPlain = true } = {}) {
//     return {
//         deviconColor: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`,
//         deviconPlain: hasPlain
//             ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-plain.svg`
//             : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`
//     };
// }
// src/utils/devicon.js

export function devicon(iconName, options = {}) {
    const { hasPlain = true } = options;

    // base directory
    const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    // Special override: GraphQL (NO DEVICON AVAILABLE)
    if (iconName === "graphql") {
        return {
            deviconColor: `${BASE}/${iconName}/${iconName}-plain.svg`,   // custom svg in public/ or src/assets/
            deviconPlain: `${BASE}/${iconName}/${iconName}-plain.svg`
        };
    }

    return {
        deviconColor: `${BASE}/${iconName}/${iconName}-original.svg`,
        deviconPlain: hasPlain
            ? `${BASE}/${iconName}/${iconName}-plain.svg`
            : `${BASE}/${iconName}/${iconName}-original.svg`
    };
}
