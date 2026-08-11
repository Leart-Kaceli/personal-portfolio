# AP Path Planner

## Overview

AP Path Planner is a full-stack planning platform designed to help students organize demanding AP coursework. It combines courses, assignments, study sessions, grades, academic goals, calendar information, reminders, and profile preferences in one application.

The project began as a student productivity idea but developed into a complete software-engineering project involving interface design, authentication, cloud data, database security, automated testing, accessibility, monitoring, continuous integration, and production deployment.

## Overview

AP Path Planner is a full-stack planning platform designed to help students organize demanding AP coursework. It combines courses, assignments, study sessions, grades, academic goals, calendar information, reminders, and profile preferences in one application.

The project began as a student productivity idea but developed into a complete software-engineering project involving interface design, authentication, cloud data, database security, automated testing, accessibility, monitoring, continuous integration, and production deployment.

## The problem

AP students often manage their academic responsibilities through several disconnected systems. Assignments may be listed in a school portal, study plans may exist in a notebook, grades may be tracked separately, and reminders may be placed in a calendar or phone application.

When these responsibilities are separated, students may have difficulty answering important questions:

- Which assignments need attention first?
- How much study time is already scheduled?
- Which courses require more focus?
- How are recent grades affecting progress?
- Which deadlines and study sessions are coming next?
- Are weekly academic goals being met?

I wanted to create one platform that connected these areas and provided a clearer view of a student’s workload.

## The problem

AP students often manage their academic responsibilities through several disconnected systems. Assignments may be listed in a school portal, study plans may exist in a notebook, grades may be tracked separately, and reminders may be placed in a calendar or phone application.

When these responsibilities are separated, students may have difficulty answering important questions:

- Which assignments need attention first?
- How much study time is already scheduled?
- Which courses require more focus?
- How are recent grades affecting progress?
- Which deadlines and study sessions are coming next?
- Are weekly academic goals being met?

I wanted to create one platform that connected these areas and provided a clearer view of a student’s workload.

## Why I built it

I built AP Path Planner because academic planning often becomes fragmented. Students may know that they have several responsibilities, but the information is spread across different tools and does not always provide a clear overall picture.

I also wanted to challenge myself to build more than a simple front-end project. AP Path Planner gave me the opportunity to work through the complete development process:

1. Identify a practical problem
2. Plan a solution
3. Design the interface
4. Create reusable components
5. Store and synchronize user data
6. Add authentication
7. Protect private records
8. Write automated tests
9. Fix accessibility issues
10. Deploy and verify the application
11. Prepare it for real user feedback


## My solution

I designed AP Path Planner as one central workspace for academic planning.

Students can create an account and use the application to:

- Organize courses
- Create and manage assignments
- Schedule study sessions
- View assignments and study sessions on a calendar
- Record grades
- Monitor academic progress
- Set weekly study goals
- Configure reminder preferences
- Change profile and appearance settings
- Export or clear application data
- Permanently delete an account

The application stores each student’s information under their authenticated user account. This allows the data to remain available across sessions while Firestore Security Rules restrict access to the correct user.

## Main features

### Authentication

Users can create an account, sign in, remain authenticated across page refreshes, sign out, and permanently delete their account.

### Course management

Users can add, edit, and delete AP courses. Course data can include information such as the course name, teacher, target score, and progress.

### Assignment management

Users can create assignments, connect them to courses, assign due dates and priorities, mark them complete, edit them, and delete them.

### Study planning

Users can schedule study sessions with a date, start time, duration, course, and study topic.

### Calendar

Assignments and study sessions appear in calendar and agenda-style views, helping users understand upcoming responsibilities.

### Grade tracking

Users can record earned and possible points, organize grades by category, and view course averages or weighted estimates.

### Profile settings

Users can manage their display name, school, graduation year, weekly study goal, appearance preference, reminder preferences, and browser-notification options.

### Themes

The application supports light, dark, and system-based appearance settings.

### Data management

Users can export their information, clear application data while keeping the login account, or permanently delete the account.

### Privacy and monitoring

The application includes privacy information, controlled client-error reporting, security headers, metadata routes, and production monitoring checks.

## User experience

I wanted the application to feel understandable without requiring a long tutorial.

The interface uses:

- Clear page headings
- Labeled form controls
- Reusable cards
- Consistent buttons
- Loading indicators
- Empty-state messages
- Success and error messages
- Responsive layouts
- Light and dark appearance modes
- Visible status information for synchronization and notifications

I also tested the application at mobile and desktop sizes and corrected accessibility issues such as insufficient text contrast and unclear test expectations.

## Technology

### Next.js

I used Next.js with the App Router to organize the application’s pages, layouts, metadata, API routes, loading behavior, error handling, and deployment structure.

### React

React powers the interactive interface, including forms, course and assignment managers, profile settings, network indicators, reminders, and reusable user-interface components.

### TypeScript

TypeScript defines and checks the application’s courses, assignments, study sessions, grades, profiles, synchronization data, and component properties.

### Tailwind CSS

Tailwind CSS provides responsive styling, consistent spacing, themes, focus states, and reusable design patterns.

### Firebase Authentication

Firebase Authentication manages user accounts, sign-in state, protected application behavior, and account deletion.

### Cloud Firestore

Cloud Firestore stores each user’s courses, assignments, study sessions, grades, settings, and profile information.

### Firestore Security Rules

Security Rules restrict users to their own private records and reject data that does not meet expected requirements.

### Vitest

Vitest runs unit and utility tests and produces coverage reports.

### Playwright

Playwright tests the application through a real browser, including public pages, authenticated behavior, accessibility, production builds, and deployed environments.

### Firebase Emulator Suite

The emulator suite allows authentication, Firestore behavior, and Security Rules to be tested without modifying production data.

### GitHub Actions

GitHub Actions automatically runs linting, tests, builds, and browser checks after code is pushed.

### Vercel

Vercel hosts Preview and Production deployments and provides analytics, logs, environment configuration, and deployment protection.

## Application architecture

The application follows a client-focused architecture built around Next.js and Firebase.

### Main application flow

```text
Student
  ↓
Next.js and React interface
  ↓
Firebase Authentication
  ↓
Cloud Firestore
  ↓
Firestore Security Rules

## Testing and reliability

I used several kinds of tests because no single test type can verify the entire application.

### Unit and utility tests

Vitest checks utility functions and isolated application behavior. Coverage reports show which files and logic paths have been exercised.

### Firestore Rules tests

The Firebase Rules testing library verifies allowed and denied database operations. These tests use the Firestore emulator instead of production data.

### Public browser tests

Playwright checks public pages such as the homepage, navigation, Privacy page, metadata routes, and not-found page.

### Authenticated browser tests

Authenticated Playwright tests create an emulator user and verify private workflows such as adding courses and assignments.

### Accessibility tests

Automated accessibility checks identify serious and critical issues such as insufficient color contrast and missing accessible labels.

### Production-build tests

The application is built and started in production mode before browser checks are run. This catches problems that may not appear during development.

### Deployed smoke tests

Deployed tests run against a real Vercel URL to confirm that the live application, metadata, security headers, navigation, and performance checks work outside the local environment.

### Visual tests

Visual-regression tests compare screenshots to approved baselines. These tests are separated from regular CI because operating systems can render screenshots differently.
## Technical challenges

- Synchronizing Firestore data
- Making course and assignment data persist correctly
- Handling authentication in Playwright tests
- Configuring Firebase emulators
- Writing and testing Firestore Security Rules
- Fixing accessibility contrast issues
- Separating visual, emulator, production, and deployed tests
- Handling Vercel Deployment Protection
- Debugging production environment variables


### Authenticated browser testing

One of the most difficult parts of the project was creating dependable Playwright tests for authenticated Firebase data. The tests needed a predictable emulator user, saved browser authentication state, matching user IDs, database cleanup, and controlled test order. Several failures initially looked like assignment or course bugs but were actually caused by authentication state, emulator ports, test-data paths, or Security Rules.

Solving these issues taught me to identify the first real failure rather than responding only to later symptoms.

### Deployment environments

The application behaved differently in local development, emulator testing, production builds, and Vercel Preview deployments. I had to configure environment variables carefully, distinguish real deployment URLs from dashboard URLs, handle Vercel Deployment Protection, and verify that tests were reaching AP Path Planner rather than an access page.

This taught me that deploying an application is not simply uploading the code. Every environment must be configured and tested separately.

## What I learned

AP Path Planner taught me that creating production software involves much more than implementing visible features.

### Technical lessons

- Authentication must be connected correctly to database ownership.
- Security Rules must be tested independently from the user interface.
- Real-time data requires careful handling of cache, pending writes, and confirmed persistence.
- Browser tests need controlled setup and cleanup.
- Development and production behavior can differ.
- Environment variables must be configured for each deployment environment.
- Accessibility requires measurable design decisions.
- Automated tests are most valuable when they verify realistic workflows.

### Project-management lessons

- Large tasks become manageable when divided into small parts.
- Documentation makes debugging and future work easier.
- A clean commit history helps explain the development process.
- Optional features should not delay a working release.
- The first version should be treated as a starting point for feedback.

### Personal lessons

- I became more comfortable investigating unfamiliar errors.
- I learned to continue working through long debugging sessions.
- I improved at explaining technical problems clearly.
- I gained experience taking a project from an idea to a deployed application.

## Future improvements

### Better onboarding

Create a short first-use walkthrough and sample data so that new users understand the application quickly.

### Google Calendar integration

Allow assignments and study sessions to be synchronized with an external calendar.

### Recurring assignments and sessions

Support repeating homework, weekly study blocks, and recurring review sessions.

### AI-assisted study planning

Use assignment deadlines, course difficulty, recent grades, and available study time to suggest a study schedule.

### Improved notifications

Add more dependable push, email, or scheduled reminders.

### Mobile experience

Continue improving small-screen layouts and consider a progressive web app or mobile application.

### Server-side account deletion

Move large or recursive data deletion to trusted server-side code.

### More user feedback

Test the application with students from different courses and schools and prioritize improvements based on their needs.

### Additional analytics

Measure feature usage and returning-user behavior while respecting privacy.

### Stronger security policies

Add a carefully tested Content Security Policy and continue reviewing dependencies and security reports.


## Firestore Security Rules

Firestore Security Rules protect private data independently from the user interface.

The Rules are designed to verify that:

- A user is signed in
- The authenticated UID matches the user path
- Users cannot read another user’s private data
- Users cannot write another user’s records
- Invalid assignment priorities are rejected
- Invalid course values are rejected
- Users may delete only their own records
- Signed-out requests cannot access private information

I created automated Rules tests with the Firebase Emulator Suite so that security behavior could be verified before deployment.

## Continuous integration and deployment

GitHub Actions runs automated checks when code is pushed.

The main workflow includes:

1. Repository checkout
2. Node.js setup
3. Java setup for Firebase emulators
4. Dependency installation
5. ESLint
6. Unit tests and coverage
7. Firestore Rules tests
8. Next.js production build
9. Playwright emulator browser tests
10. Test-report artifact uploads

A separate deployed-smoke workflow can test a Vercel Preview or Production URL.

Vercel creates deployments from Git branches and stores environment variables for Firebase and site configuration. Deployment Protection required a secure automation bypass for browser tests to reach protected Preview deployments.

### Real-time synchronization and persistence

One important challenge was keeping local interface state synchronized with Firestore.

A record could appear immediately in the interface even when a cloud write had not completed. This became especially visible when a course appeared after creation but was missing after navigation or page reload.

I learned to distinguish between:

- Optimistic local state
- Pending Firestore writes
- Cached data
- Confirmed server data
- Emulator data
- Production data

I also learned that test assertions should sometimes verify that a record survives navigation or reload rather than only checking that it appears immediately.


### Authenticated browser testing

Authenticated Playwright testing was one of the most difficult parts of the project.

The tests required:

- A Firebase Authentication Emulator
- A predictable test account
- Saved browser authentication state
- IndexedDB state
- A matching Firebase UID
- Clean Firestore data
- Correct emulator ports
- Sequential execution for shared emulator data

Several assignment-test failures initially appeared to be dropdown problems. The deeper causes included missing setup data, mismatched user IDs, unauthenticated seed requests, Rules rejections, and tests clearing shared data.

### Firestore Rules testing

Firestore Rules tests required careful setup and cleanup.

Some tests were accidentally nested inside another test because of misplaced closing braces. This caused later tests to be cancelled instead of clearly failing.

I fixed the test structure, ran Rules tests sequentially, and used `withSecurityRulesDisabled()` only when inserting trusted setup records.

This taught me that a test failure summary may show secondary cancellations, while the first earlier error contains the real cause.


### Accessibility

Automated accessibility testing identified issues that were not obvious during normal use.

One example was a Privacy footer link with insufficient contrast against a light background. The link looked visible, but its measured contrast ratio did not meet the expected standard.

I changed the text colors, rebuilt the production application, and reran the accessibility tests.

This showed me that accessibility should be measured and tested rather than judged only by appearance.


## Debugging process

The project taught me to debug systematically.

My most effective process became:

1. Reproduce the problem
2. Read the first real error
3. Isolate the failing test or feature
4. Verify the current file and environment
5. Check assumptions such as user identity, URL, port, and data path
6. Change one cause at a time
7. Run the smallest relevant test
8. Run the complete test suite after the focused test passes
9. Commit the verified fix

I also learned not to assume that the visible failure is the original cause.

Examples included:

- Cancelled Rules tests caused by incorrect test nesting
- Missing course options caused by setup and identity mismatches
- Accessibility failures caused by testing Vercel’s login page
- Production-test startup failures caused by deleting `.next` without rebuilding
- Old errors continuing because a stale deployment or build was being tested

## Conclusion

AP Path Planner is the first project in which I worked through nearly the entire software-development process, from identifying the problem to verifying a deployed production application.

The project strengthened my technical skills, but it also taught me patience, structured debugging, documentation, security awareness, and the importance of testing assumptions. The next step is to place the application in front of real students, study their feedback, and continue improving it based on evidence.


## Current results and feedback

AP Path Planner has been designed, developed, tested, and deployed as a complete full-stack application.

The next stage is gathering feedback from real students and measuring how they use the application.

I plan to track:

- Student testers
- Registered accounts
- Feedback responses
- Frequently used pages
- Reported bugs
- Returning users
- Features requested
- Improvements made because of feedback

I will include exact metrics only after verifying them through analytics, application data, GitHub, or documented feedback.


## Project links

### Live application

To be added after verifying the permanent production URL.

### GitHub repository

To be added after verifying the public repository URL.

### Demo video

To be added after recording the final project walkthrough.