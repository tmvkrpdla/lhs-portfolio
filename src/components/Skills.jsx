import React from 'react';

export default function Skills({ skills }) {
    return (
        <section className="section">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <h3>{skill.name}</h3>
                            <span className="skill-level">{skill.level}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}