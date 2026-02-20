# Lift & Live

Lift & Live is a web application that generates personalized strength, cardio, mobility, and recovery plans focused on longevity and sustainable fitness.

The application is designed to help adults 40+ build consistent, joint-friendly exercise routines that improve strength, mobility, and long-term health.

This project serves both as a real product in development and a portfolio project demonstrating modern React architecture, type-safe domain modeling, and scalable frontend design.

Currently frontend-only with LocalStorage persistence. Backend integration and progress tracking are planned next steps.

---

# Screenshots

## Profile Page

![Profile Page](docs/profile.png)

## Plan Page

![Plan Page](docs/plan.png)

---

# Features

## Current

- Profile-based training plan generation
- Strength, cardio, mobility, and recovery session scheduling
- Exercise selection from structured catalog
- Persistent profile and plan storage using LocalStorage
- Responsive UI with reusable components
- Strong type safety using TypeScript domain models

## Planned

- Progress tracking dashboard
- Exercise descriptions, instructions, and icons
- Authentication and persistent user accounts
- Exercise progression tracking (reps, sets, weights)
- Equipment- and injury-aware plan generation
- Backend integration for persistent storage
- Mobile and accessibility improvements

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- React Router
- CSS (component-scoped)

## Data & Persistence

- LocalStorage (current)
- Backend API (planned)

## Planned Improvements

- Zod for schema validation
- React Hook Form for form management
- REST or GraphQL backend integration

---

# Architecture Overview

Lift & Live uses a feature-based architecture designed for scalability, maintainability, and separation of concerns.

Key architectural principles:

- Feature-based organization (`profile`, `plan`, `dashboard`)
- Clear separation between UI, business logic, and persistence layers
- Domain-driven TypeScript models for strong type safety
- Deterministic, testable plan generation independent of UI
- Storage abstraction layer to support future backend integration

Example structure:

src/
app/ – application shell and routing
features/ – core product features (profile, plan, dashboard)
lib/ – shared utilities and storage abstraction

---

# Roadmap

## Product Features

- Progress dashboard and completion tracking
- Exercise progression tracking (reps, sets, weights)
- Equipment-aware and injury-aware plan generation
- Exercise instructions, descriptions, and visual indicators

## Backend Integration

- User authentication and account management
- Persistent storage of profiles, plans, and progress
- Cross-device synchronization
- Plan history and longitudinal tracking

## Engineering Improvements

- Schema validation with Zod
- Form management with React Hook Form
- Automated testing
- Backend API integration
- Performance optimization

---

# Purpose

Lift & Live is being developed as both a functional product and a demonstration of production-quality frontend architecture using React and TypeScript, with emphasis on scalability, maintainability, and clean separation of concerns.
