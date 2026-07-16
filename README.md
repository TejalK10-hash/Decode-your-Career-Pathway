# Decode Your Career Pathways

A little quiz app I built to help high schoolers (like me) figure out what career path might actually fit them — instead of just picking a field because it sounds impressive or "safe."

## What it does

You answer 5 quick questions about your strongest subjects, what kind of work excites you, what motivates you, how long you're willing to study, and how you naturally work. Behind the scenes, each answer is weighted against 24 careers spanning Medicine, Technology, Business, Engineering, Law, Education, and more.

At the end, you get your top 5 career matches, each with:
- A match score
- Salary range and job outlook
- Which high school subjects to focus on
- What degree (and minor/specialization) to aim for
- Top universities for that field

Click into any result for the full breakdown, or hit retake if you want to see how different answers change your matches.

## How it's built

A lightweight, static web app — just HTML, CSS, and JS, no frameworks or backend. The career data, scoring weights, and university lists all live in plain JS objects/arrays, so it's easy to expand with more careers or tweak the scoring logic. Deployable straight from the folder (e.g. Netlify Drop).

## Why I made it

I was doing my own university/career research and realized how scattered the process is — subject choices, degree paths, and school rankings all live in different places. This pulls it into one quick, interactive tool.
