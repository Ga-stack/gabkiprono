import React from 'react';
import contactsData from '../data/contacts.json';

const Contacts: React.FC = () => {
    return (
        <div className="contacts">
            <h2>Contact Information</h2>
            <ul>
                <li>Email: <a href={`mailto:${contactsData.email}`}>{contactsData.email}</a></li>
                <li>LinkedIn: <a href={contactsData.linkedin} target="_blank" rel="noopener noreferrer">{contactsData.linkedin}</a></li>
                <li>GitHub: <a href={contactsData.github} target="_blank" rel="noopener noreferrer">{contactsData.github}</a></li>
                <li>Phone: {contactsData.mobile}</li>
            </ul>
        </div>
    );
};

export default Contacts;