import projects from "../data/projectData";
import ProjectCard from "../components/Projects/ProjectCard";

export default function Projects() {
    return (
        <main className="projects-page">
            <header className="projects-header">
                <h1 className="projects-title">Projects</h1>
                <p className="projects-subtitle">
                    A selection of things I’ve built recently.
                </p>
            </header>

            <section className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </section>
        </main>
    );
}
