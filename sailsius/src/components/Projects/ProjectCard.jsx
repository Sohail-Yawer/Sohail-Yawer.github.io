import GithubIcon from "./GithubIcon";

export default function ProjectCard({ project }) {
    const { title, summary, tech, image, liveUrl, githubUrl } = project;

    const hasLive = Boolean(liveUrl);
    const hasGithub = Boolean(githubUrl);

    return (
        <article className="project-card">
            {/* IMAGE */}
            <div className="project-image-wrapper">
                {image ? (
                    <img src={image} alt={title} className="project-image" />
                ) : (
                    <div className="project-image placeholder">Image coming soon</div>
                )}
            </div>

            {/* CONTENT */}
            <div className="project-body">
                <h2 className="project-title">{title}</h2>
                <p className="project-summary">{summary}</p>

                <div className="project-tech-list">
                    {tech.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                    ))}
                </div>

                <div className="project-footer">
                    <div className="project-footer-left">
                        {hasLive && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                View Project →
                            </a>
                        )}
                    </div>

                    <div className="project-footer-right">
                        {hasGithub && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-github"
                            >
                                <GithubIcon />
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </article>
    );
}
