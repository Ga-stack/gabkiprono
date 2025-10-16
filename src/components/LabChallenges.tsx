import React, { useEffect, useState } from 'react';
import labChallengesData from '../data/lab-challenges.json';

const LabChallenges: React.FC = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        setChallenges(labChallengesData);
    }, []);

    return (
        <div>
            <h2>Lab Challenges</h2>
            {challenges.map((challenge, index) => (
                <div key={index} className="challenge">
                    <h3>{challenge.problemStatement}</h3>
                    <p><strong>Approach:</strong> {challenge.approach}</p>
                    <p><strong>Tools Used:</strong> {challenge.toolsUsed}</p>
                    <p><strong>Lessons Learned:</strong> {challenge.lessonsLearned}</p>
                    {challenge.screenshot && <img src={challenge.screenshot} alt={`Screenshot for ${challenge.problemStatement}`} />}
                </div>
            ))}
        </div>
    );
};

export default LabChallenges;