import SkillSection from "../components/Skills/SkillSection";

export default function Skills() {
    return (
        <main className="skills-page">
            <header className="skills-header">
                <h1 className="skills-title">Skills</h1>
                <p className="skills-subtitle">
                    A summary of the tools and technologies I’ve worked with.
                </p>
            </header>

            <SkillSection
                title="Languages"
                skills={[
                    { name: "CSS",        icon: "https://cdn.simpleicons.org/css" },
                    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
                    { name: "HTML",       icon: "https://cdn.simpleicons.org/html5" },
                    { name: "Python",     icon: "https://cdn.simpleicons.org/python" },
                    { name: "C#",         icon: "https://cdn.simpleicons.org/c#" },
                    { name: "SQL",        icon: "https://cdn.simpleicons.org/postgresql" },
                ]}
            />

            <SkillSection
                title="Frameworks & Libraries"
                skills={[
                    { name: "React",      icon: "https://cdn.simpleicons.org/react" },
                    { name: "Unity",      icon: "https://cdn.simpleicons.org/unity" },
                    { name: "NumPy",      icon: "https://cdn.simpleicons.org/numpy" },
                    { name: "OpenCV",     icon: "https://cdn.simpleicons.org/opencv" },
                    { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
                    { name: "Pandas",     icon: "https://cdn.simpleicons.org/pandas" },
                ]}
            />
        </main>
    );
}
