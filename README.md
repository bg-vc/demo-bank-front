# BG Bank Frontend Application

A modern banking dashboard application built with Next.js and React, featuring a clean and intuitive user interface.

## Technology Stack

- **Framework:** Next.js 13+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** 
  - Custom React components
  - Headless UI components
- **State Management:** React Hooks
- **Charts:** Recharts
- **Icons:** Heroicons
- **Authentication:** Built-in Next.js authentication

## Project Structure

```
bg-bank-front/
├── public/              # Static files (images, avatar)
├── src/
│   ├── app/            # Next.js 13 app directory
│   │   ├── (auth)/     # Authentication related pages
│   │   ├── (dashboard)/# Dashboard related pages
│   │   │   ├── dashboard/    # Main dashboard
│   │   │   ├── analytics/    # Analytics page
│   │   │   └── settings/     # User settings
│   │   └── page.tsx    # Landing page
│   ├── components/     # React components
│   │   ├── features/   # Feature-specific components
│   │   ├── layouts/    # Layout components
│   │   └── ui/         # Reusable UI components
│   └── lib/           # Utility functions and configurations
└── tailwind.config.js  # Tailwind CSS configuration
```

## Features and Modules

### 1. Authentication
- User login/signup
- Profile management
- Session handling

### 2. Dashboard
- Overview of financial status
- Transaction history
- Revenue charts and analytics
- Quick actions menu

### 3. Transaction Management
- Transaction list view
- Transaction details
- Add/manage friends
- Transfer functionality

### 4. Analytics
- Revenue charts
- Financial statistics
- Performance metrics
- Data visualization

### 5. Settings
- Profile settings
- Account management
- Preferences
- Security settings

### 6. UI Components
- Responsive layout
- Custom avatar system
- Interactive charts
- Modern dashboard design
- Loading states and animations

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Follow Next.js 13+ conventions
- Keep responsive design in mind
