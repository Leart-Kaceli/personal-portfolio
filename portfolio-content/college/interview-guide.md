# AP Path Planner Interview Guide

## 30-Second Version

AP Path Planner is a full-stack academic planning app I built for students taking AP classes. I noticed that assignments, studying, grades, deadlines, and goals are often spread across different systems, so I wanted to bring them into one place. I built it with Next.js, TypeScript, and Firebase, then added authentication, database security, automated testing, accessibility checks, and production deployment.


## 60-Second Version

AP Path Planner started from a problem I saw in academic planning. Students taking multiple AP classes often manage assignments, study schedules, grades, deadlines, and goals using several different systems.

I built AP Path Planner to combine those into one application. Students can manage courses and assignments, schedule study sessions, track grades, use a calendar, set goals, and manage reminders.

Technically, I built it with Next.js, React, TypeScript, Firebase Authentication, and Cloud Firestore. As the project grew, I added Firestore Security Rules, automated browser testing with Playwright, emulator testing, accessibility checks, GitHub Actions, and Vercel deployment.

The biggest lesson was realizing that building a production application involves much more than making the interface work.

## 90-Second Technical Version

AP Path Planner is a full-stack planning application I built for AP students.

The front end uses Next.js, React, TypeScript, and Tailwind CSS. Firebase Authentication manages users, and Cloud Firestore stores private planning records.

One of the areas I spent the most time on was making sure authentication, Firestore ownership, and testing worked together correctly. I wrote Firestore Security Rules that restrict private records by user ID and created automated Rules tests against the Firebase Emulator Suite.

I also built authenticated Playwright tests. Those required creating predictable emulator users, saving browser authentication state, resetting test data, and controlling the test environment.

I eventually added accessibility tests, production-build tests, GitHub Actions, and deployed smoke tests against Vercel.

What started as a planning app became a project where I learned a lot about testing, security, deployment, and debugging distributed application behavior.


# Interview Questions

## Why did you build AP Path Planner?

I wanted to solve a problem I understood personally: academic planning gets fragmented across different tools. I also wanted a project large enough that I would have to learn more than just front-end development.

What made the project especially valuable was that the original idea led me into authentication, databases, testing, security, accessibility, and deployment.


## What was the hardest part?

One of the hardest parts was authenticated end-to-end testing.

At first, an assignment test could fail because the assignment was not appearing, but the real cause might be authentication state, a mismatched Firebase user ID, Firestore Security Rules, emulator data, or setup timing.

I had to learn to debug the system layer by layer instead of assuming the visible failure was the root cause.


## What are you most proud of?

I'm most proud that the project became more than a visual prototype.

I kept developing the less visible parts of the application: authentication, database ownership, security rules, testing, accessibility, CI, documentation, and production deployment.

That changed how I think about what it means for software to be finished.

## What would you change if you started again?

I would involve users earlier.

I initially spent a lot of time deciding what students might want based on my own assumptions. Now I think a better process is to build the smallest useful version, get it in front of students, and let real feedback influence what gets built next.

That is why the next stage of AP Path Planner is focused on launch, feedback, and iteration.

## What did you learn?

The biggest lesson was that a working interface is only one layer of a software product.

I learned that authentication has to align with database ownership, Security Rules need their own tests, browser tests require predictable environments, deployment environments can behave differently, and accessibility has to be measured rather than assumed.

I also became much more systematic about debugging.

## College Essay Bridge

AP Path Planner can support essays about:

- Intellectual curiosity
- Problem solving
- Persistence
- Computer science interest
- Learning independently
- Building for others
- Responding to failure
- Turning an idea into a real product
- Community impact
- Growth through debugging

