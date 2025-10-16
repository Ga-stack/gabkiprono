import React from 'react';

const Resume: React.FC = () => {
    return (
        <div>
            <h1>Resume</h1>
            <section>
                <h2>Education</h2>
                <ul>
                    <li>Bachelor of Science in Computer Science - University Name (Year)</li>
                    <li>Master of Science in Software Engineering - University Name (Year)</li>
                </ul>
            </section>
            <section>
                <h2>Professional Experience</h2>
                <ul>
                    <li>Job Title - Company Name (Year - Year)
                        <ul>
                            <li>Responsibility/Task 1</li>
                            <li>Responsibility/Task 2</li>
                        </ul>
                    </li>
                    <li>Job Title - Company Name (Year - Year)
                        <ul>
                            <li>Responsibility/Task 1</li>
                            <li>Responsibility/Task 2</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Certifications</h2>
                <ul>
                    <li>Certification Name - Issuing Organization (Year)</li>
                    <li>Certification Name - Issuing Organization (Year)</li>
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;