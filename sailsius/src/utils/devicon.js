// src/utils/devicon.js

export function devicon(iconName, options = {}) {
    const { hasPlain = true } = options;
    const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    // =======================
    // SPECIAL OVERRIDES
    // =======================

    // GraphQL (Devicon removed original)
    if (iconName === "graphql") {
        return {
            deviconColor: `${BASE}/graphql/graphql-plain.svg`,
            deviconPlain: `${BASE}/graphql/graphql-plain.svg`
        };
    }

    // C — original removed
    if (iconName === "c") {
        return {
            deviconColor: `${BASE}/c/c-original.svg`,
            deviconPlain: `${BASE}/c/c-original.svg`
        };
    }

    // MySQL — no plain variant
    if (iconName === "mysql") {
        return {
            deviconColor: `${BASE}/mysql/mysql-original-wordmark.svg`,
            deviconPlain: `${BASE}/mysql/mysql-original-wordmark.svg`
        };
    }

    // TensorFlow — plain missing
    if (iconName === "tensorflow") {
        return {
            deviconColor: `${BASE}/tensorflow/tensorflow-original.svg`,
            deviconPlain: `${BASE}/tensorflow/tensorflow-original.svg`
        };
    }

    // =======================
    // DEFAULT HANDLING
    // =======================

    return {
        deviconColor: `${BASE}/${iconName}/${iconName}-original.svg`,
        deviconPlain: hasPlain
            ? `${BASE}/${iconName}/${iconName}-plain.svg`
            : `${BASE}/${iconName}/${iconName}-original.svg`
    };
}
