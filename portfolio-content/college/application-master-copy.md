# AP Path Planner — Application Master Copy

## Project Name

AP Path Planner

## Project Type

Full-stack academic planning web application

## Target Users

High school students taking AP courses

## Core Problem

Students often manage courses, assignments, study plans, grades, deadlines, and academic goals across multiple disconnected tools.

## Solution

AP Path Planner combines academic planning tools into one application so students can manage AP courses, assignments, study sessions, grades, calendars, goals, reminders, and profile settings.

## Main Features

- User authentication
- Course management
- Assignment management
- Assignment priorities and due dates
- Study Planner
- Scheduled study sessions
- Calendar
- Grade tracking
- Weekly study goals
- Reminders
- Profile settings
- Light / dark / system themes
- Data export
- Data clearing
- Account deletion

## Main Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Cloud Firestore
- Firestore Security Rules
- Firebase Emulator Suite
- Playwright
- Vitest
- GitHub Actions
- Vercel

## Engineering Work

- Designed reusable UI components
- Implemented authenticated user accounts
- Built per-user Firestore data storage
- Wrote Firestore Security Rules
- Added Firestore Rules tests
- Added authenticated browser tests
- Built Firebase emulator test workflows
- Added accessibility testing
- Added production-build testing
- Added deployed-site smoke testing
- Configured continuous integration
- Deployed the application

## Key Technical Challenges

### Authentication and Testing

Authenticated Playwright tests required predictable emulator users, browser authentication state, matching user IDs, Firestore setup, and controlled cleanup.

### Persistence

The UI could display local state before Firestore writes were fully confirmed, requiring careful reasoning about persistence and synchronization.

### Security Rules

Database access had to be tested independently from the UI so that users could access their own data but not another user's records.

### Deployment

Local development, Firebase emulator testing, production builds, Vercel Preview, and Vercel Production sometimes behaved differently.

### Accessibility

Automated checks found issues such as insufficient contrast that were not obvious through visual inspection alone.

## What I Learned

- Authentication and data ownership must agree
- Database security needs independent testing
- Browser tests need controlled setup and cleanup
- Cloud data can have multiple states
- Local and deployed environments can behave differently
- Accessibility should be tested, not assumed
- Documentation improves debugging
- The visible error is not always the root cause
- Large projects become manageable when divided into smaller systems

## Current Status

- Application built
- Application deployed
- GitHub repository public
- Technical README completed
- Portfolio case study completed
- Public launch preparation underway
- Product Hunt launch preparation underway
- Student feedback collection beginning

## Metrics

Registered users:
2 as of 8/11/2026

Unique visitors:
46 as of 8/11/2026

Student testers:
2 as of 8/11/2026

Feedback responses:
1 as of 8/1/2026

GitHub commits:
49 as of 8/11/2026

GitHub stars:
[VERIFY]

Product Hunt upvotes:
[VERIFY AFTER LAUNCH]

Product Hunt comments:
[VERIFY AFTER LAUNCH]

Reddit post views:
1217 as of 8/11/2026

Features changed because of user feedback:
[VERIFY]


## Public Evidence

### Live Application

https://ap-path-planner.vercel.app

### GitHub Repository

https://github.com/Leart-Kaceli/AP-Path-Planner

### Portfolio Case Study

https://personal-portfolio-eight-ecru-40.vercel.app/projects/ap-path-planner

### Personal Portfolio

https://personal-portfolio-eight-ecru-40.vercel.app

### Product Hunt

[ADD AFTER LAUNCH]

## Connection to Computer Science / Engineering

AP Path Planner strengthened my interest in computing because the most interesting problems extended beyond writing visible interface code.

I became interested in how authentication, databases, security rules, testing infrastructure, deployment environments, and client applications interact as parts of one system.

The project made me want to study computing more deeply rather than only learning individual frameworks.

## Intellectual Curiosity Version

What began as a planner led me into questions I had not expected to encounter. Why could a page display data that had not actually persisted? How should a database verify that a user owns a record? How can an automated browser test remain authenticated across runs? Why would code work locally but fail after deployment?

Following those questions became one of the most rewarding parts of the project.

## Failure / Persistence Version

Some of the most important progress came from failures that initially seemed unrelated to their real cause.

An assignment might fail to appear during an automated test, but the assignment UI itself could be correct. The real issue might be emulator authentication, Firestore ownership, Security Rules, test data, or timing.

Learning to isolate those layers taught me to treat debugging as investigation rather than trial-and-error.

## Community / Impact Version

I originally built AP Path Planner around problems I understood as a student. The next stage is intentionally different: instead of deciding what students need by myself, I am putting the application in front of other students, collecting feedback, and using that feedback to decide what deserves to be improved.

That shift from building for myself to building with users in mind has changed how I think about software.


## Accomplishments Inventory

### Product

- Designed application idea
- Built complete web interface
- Built authenticated accounts
- Built course management
- Built assignment management
- Built Study Planner
- Built grade tracking
- Built calendar integration within application
- Built profile/preferences
- Built data-management controls

### Engineering

- Created reusable components
- Added database persistence
- Added per-user data ownership
- Added Security Rules
- Added automated Rules testing
- Added unit testing
- Added browser E2E testing
- Added authenticated E2E testing
- Added accessibility testing
- Added production testing
- Added deployed smoke testing

### DevOps

- Git / GitHub
- GitHub Actions
- Firebase emulators
- Vercel Preview
- Vercel Production
- Environment variables

### Communication

- Technical README
- Portfolio case study
- Product screenshots
- Product Hunt listing
- Reddit launch materials
- User feedback collection

### Leadership / Initiative

- Independently identified problem
- Defined project scope
- Managed development roadmap
- Researched unfamiliar technologies
- Debugged production issues
- Planned public launch
- Planned user-feedback process

## Strongest College Application Evidence

1. Built a complete working product
2. Independently learned full-stack engineering concepts
3. Implemented authentication and private user data
4. Tested database security independently
5. Built authenticated automated browser testing
6. Debugged differences between development and production
7. Publicly launched the project
8. Gathered and responded to user feedback
9. Documented the engineering process
10. Continued improving the project over time