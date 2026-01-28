# Student Management Dashboard

A modern frontend dashboard to manage student records including marks, attendance, subjects, and results with visual analytics.

---

## Overview

The Student Management Dashboard is a React + TypeScript application designed to demonstrate real-world frontend concepts such as forms, validation, charts, and state management.  
All data is stored locally using LocalStorage, making it lightweight and easy to run.

---

## Features

- Add, edit, and delete student records
- Multi-step student form with validation
- Subject-wise marks tracking
- Pass / Fail result calculation
- Attendance percentage tracking
- Dashboard charts using Recharts
- Persistent data using LocalStorage
- Responsive and clean UI

---

## Tech Stack

- **Frontend:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS / Tailwind CSS
- **Charts:** Recharts
- **Storage:** Browser LocalStorage

---

## Folder Structure

ADMIN-PANEL-REACT-TS


├── public/
│   ├── admin-panel.png
│   └── vite.svg
│
├── src/
│   ├── auth/
│   │   └── AuthContext.tsx       
│   │
│   ├── components/
│   │   ├── DashboardCharts.tsx    
│   │   ├── Header.tsx             
│   │   ├── Sidebar.tsx           
│   │   ├── StudentForm.tsx        
│   │   └── StudentTable.tsx      
│   │
│   ├── pages/
│   │   └── AdminDashboard.tsx    
│   │
│   ├── utils/
│   │   ├── Data.ts                
│   │   └── localStorage.ts        
│   │
│   ├── App.tsx                    
│   ├── App.css            
│   ├── index.css                 
│   └── main.tsx                   
│
├── index.html                     
├── node_modules/                 
├── .gitignore
├── eslint.config.js               
├── package.json                   
├── package-lock.json              
├── tsconfig.json                  
├── tsconfig.app.json              
├── tsconfig.node.json             
├── vite.config.ts              
└── README.md                     


---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation
```bash
npm install

### run the project 
npm run dev


GitHub: https://github.com/Het-Rasadiya-Opash/React-TypeScript

Deployement : https://react-admin-panel-ts.vercel.app/