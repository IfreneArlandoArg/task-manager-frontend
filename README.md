# Task Manager App - Frontend

A modern, dark-themed task management application built with React, TypeScript, and Tailwind CSS.



## 🛠 Tech Stack

- **React 19.2**: UI library with hooks for state management
- **TypeScript**: Type-safe development and improved code quality
- **Vite 7.2**: Fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS 3.4**: Utility-first CSS framework for responsive design
- **React Router 7.11**: Client-side routing for multi-page navigation
- **Axios 1.13**: HTTP client for API communication
- **ESLint & TypeScript ESLint**: Code quality and linting

## 📋 Features

- **Authentication**: Login and Register pages with error handling
- **Task Management**: Create, view, and track task status
- **Dark Theme**: Modern dark UI with teal accent colors
- **Responsive Design**: Mobile-friendly layout with info panels
- **Protected Routes**: Token-based authentication with redirect to login
- **Error Handling**: User-friendly error messages and loading states


## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The app will be available at `http://localhost:5173` with HMR enabled.

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── pages/          # Page components (Login, Register, Dashboard)
├── components/     # Reusable UI components (InfoPanel, ProtectedRoute)
├── auth/          # Authentication context and logic
├── api/           # API client (Axios instance)
├── assets/        # Static assets
├── App.tsx        # Main app router
├── main.tsx       # React entry point
└── index.css      # Global styles (Tailwind directives)
```

## 🔐 Authentication

Protected routes use `ProtectedRoute` component which checks for a valid JWT token in localStorage. If no token is found, users are redirected to `/login`.

Token is stored after successful login and cleared on logout.


**Author**: Ifrene Arlando A.