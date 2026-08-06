# Day 01 - MERN Stack Internship Tasks

This directory contains the completion of **Day 01** tasks for the MERN Stack Internship.

## Tasks Completed

- [x] **Environment Setup:** Configured VS Code terminal and verified Node.js and `npm` installation.
- [x] **React Frontend Application:**
  - Initialized a React application using `create-react-app`.
  - Built a basic webpage featuring a heading, text, and an interactive button.
  - Implemented a custom Modal popup (using React `useState`) to replace default browser alerts.
  - Executed successfully on local server at `http://localhost:3000`.
- [x] **Express Backend Server:**
  - Initialized a Node.js project environment using `npm init -y`.
  - Installed and configured the **Express.js** framework.
  - Created a basic server with API endpoints (`/` and `/api/status`).
  - Successfully executed server on `http://localhost:5000`.
- [x] **Project Architecture:** Understood MERN stack folder hierarchy and dual-port allocation (Port 3000 for React & Port 5000 for Express).

## Directory Structure

```text
Day-01/
├── frontend/             # React Application (Port 3000)
│   ├── src/
│   │   └── App.js       # Main React Component
│   └── package.json
│
└── backend/              # Express Server (Port 5000)
    ├── server.js        # Express API Server
    └── package.json

## How To Run Locally

- [x] **Run frontend:** 
- cd Day-01/frontend
- npm start

- [x] **Run backend:** 
- cd Day-01/backend
- node server.js