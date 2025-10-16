# Portfolio Website

## Description
This portfolio website showcases the professional work and projects of Gabriel Kiprono Kitur. It includes sections for a professional statement, resume outline, project showcases, completed lab challenges, and contact information.

## Features
- **Home Page**: Displays a photo, name, and professional statement.
- **Resume Section**: Outlines education, professional experience, certifications, and skills.
- **Projects Section**: Showcases at least three projects with details retrieved from a JSON file.
- **Lab Challenges Section**: Details completed lab challenges, including problem statements and lessons learned.
- **Contacts Section**: Provides links to professional profiles and contact information.

## Project Structure
```
portfolio-website
├── src
│   ├── assets
│   │   └── profile-photo.txt
│   ├── components
│   │   ├── Home.tsx
│   │   ├── Resume.tsx
│   │   ├── Projects.tsx
│   │   ├── LabChallenges.tsx
│   │   └── Contacts.tsx
│   ├── data
│   │   ├── projects.json
│   │   ├── lab-challenges.json
│   │   └── contacts.json
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage
Open your browser and navigate to `http://localhost:3000` to view the portfolio website. You can explore different sections to learn more about Gabriel Kiprono Kitur's work and achievements.

## License
This project is licensed under the MIT License.