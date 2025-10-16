import React from 'react';
import profilePhoto from '../assets/profile-photo.txt';

const Home: React.FC = () => {
    return (
        <div className="home">
            <img src={profilePhoto} alt="Gabriel Kiprono Kitur" className="profile-photo" />
            <h1>Gabriel Kiprono Kitur</h1>
            <p className="professional-statement">
                Passionate software developer with a focus on building efficient and scalable applications.
            </p>
        </div>
    );
};

export default Home;