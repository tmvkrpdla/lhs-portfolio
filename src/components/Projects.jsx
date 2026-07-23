import React from 'react';

export default function Projects({ projects }) {
    return (
        <section className="section">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tag">{tech}</span>
                                ))}
                            </div>
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noreferrer" className="link-btn">
                                    GitHub
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}