import React from 'react';
import profilePhoto from '../assets/photme1.jpeg';

const Home: React.FC = () => {
    return (
        <div className="home container">
            <img src={profilePhoto} alt="Gabriel Kiprono Kitur" className="profile-photo" />
            <div>
                <h1>👋 Hi, I’m Gabriel Kiprono Kitur</h1>
                <h3>Cybersecurity Analyst | Network &amp; Systems Professional | IT Innovator</h3>

                <p className="professional-statement">
                    I’m a dynamic IT professional with solid expertise in networks, cybersecurity, and IT systems. Known for innovative problem-solving, I thrive on tackling challenges from fresh angles. My goal is to leverage my experience to build secure digital ecosystems and drive technological advancement.
                </p>

                <h2>🎓 Education</h2>
                <p>
                    <strong>Bachelor of Science in Information Technology</strong><br />
                    KCA University, Kenya — Second Class Upper Division (2017–2021)
                </p>

                <h2>💼 Professional Experience</h2>
                <h4>Cybersecurity Analyst – Directorate of eCitizen</h4>
                <p>April 2024 – Present</p>
                <ul>
                    <li>Threat monitoring and detection across the eCitizen ecosystem</li>
                    <li>Incident response and forensic analysis</li>
                    <li>Documentation and reporting of security events</li>
                    <li>Conducting cybersecurity awareness sessions</li>
                    <li>Developing and testing incident response plans</li>
                </ul>

                <h4>Networks &amp; Cybersecurity Intern – MicroLAN Solutions</h4>
                <p>February 2023 – Present</p>
                <ul>
                    <li>Vulnerability scanning using Tenable</li>
                    <li>Endpoint protection deployment with Sophos</li>
                    <li>Network troubleshooting and cable management</li>
                    <li>User support and client device maintenance</li>
                    <li>Drafting technical documentation and quotations</li>
                </ul>

                <h4>ICT Attaché – Kenya Post Office Savings Bank</h4>
                <p>August – December 2021</p>
                <ul>
                    <li>User support and hardware maintenance</li>
                    <li>Network testing and troubleshooting</li>
                    <li>POS configuration and system setup</li>
                    <li>Assisted with server mounting and device configuration</li>
                </ul>

                <h2>🧠 Certifications &amp; Skills</h2>
                <ul>
                    <li>Certified in Cybersecurity (ISC)²</li>
                    <li>Sophos Firewall Engineer – v19.5</li>
                    <li>Sophos Central Endpoint &amp; Server Engineer</li>
                    <li>Google – Foundations of UX Design</li>
                    <li>SOC Operations &amp; Procedures</li>
                    <li>Network Administration &amp; Troubleshooting</li>
                    <li>Security Awareness &amp; Incident Response</li>
                    <li>Microsoft 365, SharePoint, Power Apps</li>
                    <li>Adobe Photoshop, Illustrator, XD, Premiere Pro</li>
                </ul>

                <h2>💻 Projects</h2>
                <h4>DoctorAppointment System</h4>
                <p>A doctor appointment booking system built with React, Node.js, and MongoDB.</p>
                <p><strong>Tools:</strong> Node.js, React, MongoDB, Express, CSS</p>
                <ul>
                    <li>Enables patients to book appointments online.</li>
                    <li>Admin dashboard for viewing and managing schedules.</li>
                    <li>Sends notifications to patients upon booking confirmation.</li>
                </ul>
                <p>🔗 View on GitHub</p>

                <h4>SOC Training Dashboard</h4>
                <p>A simulated Security Operations Center (SOC) training environment for interns.</p>
                <p><strong>Tools:</strong> Splunk, Wireshark, Suricata, Linux</p>
                <ul>
                    <li>Demonstrates log collection, analysis, and alerting.</li>
                    <li>Introduces interns to real-world threat detection workflows.</li>
                </ul>

                <h4>KFS Oracle SOA Integration Monitoring</h4>
                <p>Supported the integration between Oracle SOA and Pesaflow systems.</p>
                <p><strong>Tools:</strong> Oracle SOA Suite, Linux, Network Monitoring Tools</p>
                <ul>
                    <li>Monitored transaction logs and system connectivity.</li>
                    <li>Contributed to resolving integration bottlenecks.</li>
                </ul>

                <h2>🧩 Lab Challenges</h2>
                <h4>Broken Access Control – Hack The Box</h4>
                <p><strong>Problem:</strong> Unauthorized access due to improper session validation.</p>
                <p><strong>Approach:</strong> Intercepted HTTP requests via Burp Suite and tested parameter tampering.</p>
                <p><strong>Tools:</strong> Burp Suite, OWASP ZAP</p>
                <p><strong>Lesson:</strong> Reinforced the importance of role-based access control.</p>

                <h4>SQL Injection – TryHackMe</h4>
                <p><strong>Problem:</strong> Database exposure through insecure form inputs.</p>
                <p><strong>Approach:</strong> Identified vulnerable endpoints and used SQLMap to extract data.</p>
                <p><strong>Tools:</strong> SQLMap, Burp Suite</p>
                <p><strong>Lesson:</strong> Highlighted the need for prepared statements and proper input sanitization.</p>

                <h4>Network Traffic Analysis – HTB Academy</h4>
                <p><strong>Problem:</strong> Detecting abnormal network activity.</p>
                <p><strong>Approach:</strong> Used Wireshark and tcpdump to analyze packets and identify indicators of compromise.</p>
                <p><strong>Tools:</strong> Wireshark, tcpdump</p>
                <p><strong>Lesson:</strong> Strengthened understanding of network behavior and packet-level inspection.</p>

                <h2>📬 Contact Me</h2>
                <p>📧 Email: kipronogabriel04@gmail.com</p>
                <p>💼 LinkedIn: <a href="https://linkedin.com/in/gabriel-kitur" target="_blank" rel="noopener noreferrer">linkedin.com/in/gabriel-kitur</a></p>
                <p>💻 GitHub: <a href="https://github.com/ga-stack" target="_blank" rel="noopener noreferrer">github.com/ga-stack</a></p>
                <p>📱 Mobile: +254 700 699 001</p>

                <p style={{fontStyle: 'italic'}}>“Securing the digital future, one packet at a time.”</p>
            </div>
        </div>
    );
};

export default Home;