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

## ⚠️ Problems Encountered

### 1. Tailwind CSS Not Working
**Problem**: Tailwind styles were not being applied to components after initial setup.

**Root Cause**: While the configuration files were present, the dev server needed to be restarted or cache cleared for Tailwind to properly detect and process the utility classes.

**Solution**:
- Verified `tailwind.config.js` had correct content paths (`./src/**/*.{ts,tsx}`)
- Ensured `@tailwind` directives were properly imported in `index.css`
- Confirmed `postcss.config.js` included both `tailwindcss` and `autoprefixer` plugins
- Restarted the development server to force Tailwind rebuild

### 2. Styling Inconsistency Across Pages
**Problem**: Login and Register pages had mismatched themes; Dashboard had visibility issues with task names due to poor color contrast.

**Root Cause**: Each page was styled independently without a cohesive design system, leading to:
- Light theme on auth pages vs. dark theme inconsistency
- Task titles appeared with insufficient contrast against their backgrounds
- Button colors and focus states were inconsistent

**Solution**:
- Implemented a unified **dark theme** across all pages using `bg-gray-900`, `bg-gray-800`, and high-contrast text (`text-gray-100`)
- Standardized accent color to **teal** for buttons, focus rings, and badges
- Fixed task name visibility in Dashboard by explicitly setting `text-gray-900` with medium weight
- Created consistent form styling with `bg-gray-700` inputs and proper focus states

### 3. Poor Layout for Auth Pages
**Problem**: Login and Register pages lacked visual hierarchy and didn't showcase app features to new users.

**Root Cause**: Auth pages were simple centered forms with no context about the application's value.

**Solution**:
- Implemented a **two-column responsive layout**:
  - Left: Compact login/register form (`md:w-96`)
  - Right: Hidden on mobile, visible on desktop — info panel about the app features
- Created a reusable `InfoPanel` component with app description and feature bullets
- Used flexbox (`flex-1`) to make the right panel expand and fill remaining width
- Panel remains hidden on small screens to maintain mobile usability

### 4. Missing Error Handling
**Problem**: Failed login attempts had no error feedback; users didn't know what went wrong.

**Root Cause**: `handleSubmit` had no try-catch or error state management.

**Solution**:
- Added `error` state to capture and display API error messages
- Added `loading` state to prevent duplicate submissions during request
- Wrapped API call in try-catch to gracefully handle network/auth failures
- Display inline error alert with red background (`text-red-400 bg-red-900/20`)
- Disable and show "Signing in..." text on submit button during loading

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