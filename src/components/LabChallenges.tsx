import React, { useEffect, useState } from 'react';
// require the JSON to avoid parser issues with certain TS 'as' assertions in the build toolchain
const labChallengesData: any = require('../data/lab-challenges.json');

interface Challenge {
    problemStatement: string;
    approach: string;
    toolsUsed: string[];
    lessonsLearned: string;
    screenshots?: string[];
}

const LabChallenges: React.FC = () => {
    const [challenges, setChallenges] = useState<Challenge[]>([]);

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
                    {challenge.screenshots && challenge.screenshots.length > 0 && (
                        <div className="screenshots">
                            {challenge.screenshots.map((src, i) => (
                                <img key={i} src={src} alt={`Screenshot ${i + 1} for ${challenge.problemStatement}`} />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LabChallenges;