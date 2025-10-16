import React from 'react';
import projectsData from '../data/projects.json';

interface Project {
    title: string;
    description: string;
    toolsUsed: string[];
    link: string;
}

const Projects: React.FC = () => {
    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projectsData.map((project: Project, index: number) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tools Used:</strong> {project.toolsUsed.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;