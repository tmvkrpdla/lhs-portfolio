import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Header({ profile }) {
    return (
        <header className="header">
            <div className="container">
                <h1>{profile.name}</h1>
                <p className="title">{profile.title}</p>
                <p className="bio">{profile.bio}</p>
                <div className="social-links">
                    <a href={profile.github} target="_blank" rel="noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href={`mailto:${profile.email}`}>
                        <FaEnvelope size={24} />
                    </a>
                </div>
            </div>
        </header>
    );
}