import saildexImg from "../assets/saildex.png";
import mysticElementsImg from "../assets/mystic-elements.png";
import signLangImg from "../assets/sign-language-interpreter.png";

const projects = [
    {
        id: 1,
        title: "SailDex",
        summary: "Pokémon-inspired web app to explore cards and stats.",
        tech: ["React", "REST API", "JavaScript"],
        image: saildexImg, // replace later
        liveUrl: "https://sohail-yawer.github.io/saildex/",
        githubUrl: "https://github.com/Sohail-Yawer/saildex"
    },

    {
        id: 2,
        title: "Mystic Elements",
        summary:
            "Unity 2D platformer where the hero unlocks elemental powers to defeat Vaatu.",
        tech: ["Unity", "C#", "2D Platformer"],
        image: mysticElementsImg,
        liveUrl: "https://sohail-yawer.github.io/Mystic_Elements/gold",
        githubUrl: "https://github.com/Sohail-Yawer/Mystic_Elements"
    },

    {
        id: 3,
        title: "Sign Language Interpreter",
        summary:
            "Real-time sign language detection using webcam, OpenCV, and TensorFlow.",
        tech: ["Python", "OpenCV", "TensorFlow","CNN"],
        image: signLangImg,
        liveUrl: "",   // no live project
        githubUrl: "https://github.com/Sohail-Yawer/Sign-Language"
    }
];

export default projects;
