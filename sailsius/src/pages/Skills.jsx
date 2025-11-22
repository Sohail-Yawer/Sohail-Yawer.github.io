import { devicon } from "../utils/devicon";
import { useEffect, useState } from "react";
import SkillSection from "../components/Skills/SkillSection";

export default function Skills() {

    const [iconColor, setIconColor] = useState("");

    useEffect(() => {
        const css = getComputedStyle(document.documentElement);
        const c = css.getPropertyValue("--icon-color").trim();
        setIconColor(c.replace("#", ""));
    }, []);

    return (
        <main className="skills-page">
            <h1 className="skills-title">Skills</h1>

            {/* LANGUAGES */}
            <SkillSection
                title="Languages"
                skills={[
                    { name: "JavaScript", ...devicon("javascript") },
                    { name: "Python", ...devicon("python") },
                    { name: "C#", ...devicon("csharp") },
                    { name: "Java", ...devicon("java") },
                    { name: "HTML", ...devicon("html5") },
                    { name: "CSS", ...devicon("css3") },
                    { name: "C", ...devicon("c") }
                ]}
                iconColor={iconColor}
            />

            {/* LIBRARIES & FRAMEWORKS */}
            <SkillSection
                title="Frameworks & Libraries"
                skills={[
                    { name: "React", ...devicon("react", { hasPlain: false }) },
                    { name: "Unity", ...devicon("unity") },
                    { name: "NumPy", ...devicon("numpy", { hasPlain: false }) },
                    { name: "OpenCV", ...devicon("opencv", { hasPlain: false }) },
                    { name: "TensorFlow", ...devicon("tensorflow") },
                    { name: "Pandas", ...devicon("pandas", { hasPlain: false }) },
                    { name: "AngularJS", ...devicon("angularjs") },
                    { name: "PyTorch", ...devicon("pytorch", { hasPlain: false }) },
                    { name: "jQuery", ...devicon("jquery") },
                    { name: "Scikit-Learn", ...devicon("scikitlearn", { hasPlain: false }) },
                    { name: "Matplotlib", ...devicon("matplotlib") },
                    { name: "GraphQL", ...devicon("graphql")},
                    { name: "Android Studios", ...devicon("androidstudio") },
                    { name: "Keras", ...devicon("keras", { hasPlain: false }) }
                ]}
                iconColor={iconColor}
            />

            {/* DATABASES */}
            <SkillSection
                title="Databases"
                skills={[
                    { name: "MongoDB", ...devicon("mongodb") },
                    { name: "PostgreSQL", ...devicon("postgresql") },
                    { name: "SQLite", ...devicon("sqlite") },
                    { name: "MySQL", ...devicon("mysql") }
                ]}
                iconColor={iconColor}
            />

        </main>
    );
}
