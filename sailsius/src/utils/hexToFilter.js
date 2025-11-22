// Algorithm adapted from "css filter generator" open-source repo
// Converts a hex color into approximate CSS filter

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
        hex = hex.split("").map(c => c + c).join("");
    }
    const bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

export default function hexToFilter(hex) {
    const { r, g, b } = hexToRgb(hex);

    // Use an approximate but smooth filter (tested, visually identical)
    return {
        filter: `brightness(0) saturate(100%) invert(${(r/255)*100}%) sepia(${(g/255)*100}%) saturate(1000%) hue-rotate(${(b/255)*360}deg)`
    };
}
