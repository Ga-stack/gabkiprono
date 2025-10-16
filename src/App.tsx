import React from 'react';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import LabChallenges from './components/LabChallenges';
import Contacts from './components/Contacts';

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Resume />
      <Projects />
      <LabChallenges />
      <Contacts />
    </div>
  );
};

export default App;