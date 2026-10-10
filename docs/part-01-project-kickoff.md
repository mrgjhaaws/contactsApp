# Part 1/10 — Project Kickoff

**Goal:** Define the project and get Kiro oriented **before writing any code**.

## What we are building

An Address Book App where you can **add, view, search, edit and delete** contacts.

## Architecture plan

```
Frontend (React + Vite)  ⇄  HTTP / REST  ⇄  Backend (Node.js + Express)  ⇄  Database (MongoDB or SQLite)
```

In this repository: `frontend/` ⇄ `backend/` ⇄ MongoDB (final state).

## Your prompt to Kiro (verbatim from the infographic)

> "I want to build a simple Address Book App to learn full-stack development. It should have a React frontend and a Node.js REST API backend, and let me add, view, search, edit and delete contacts (name, phone, email, address). Walk me through this step by step: plan the architecture first, then help me generate, debug and improve the code as we go. Don't write any code yet — just confirm the plan and the tech stack (React + Vite, Node.js + Express, MongoDB or SQLite for storage)."

## How to use it with this project

1. Open an **empty** folder (or this repo with the code hidden/renamed) in Kiro.
2. Paste the prompt above.
3. Kiro should reply with a plan, not code. Check that it confirms:
   - React + Vite frontend, Node.js + Express backend
   - SQLite (simple start) or MongoDB (later)
   - The five features and four contact fields
4. Compare Kiro's plan with this repo's structure in the [README](../README.md).

## What you get

- A confirmed project plan
- The selected tech stack
- A high-level architecture diagram
- A roadmap for the next 9 parts
- Confidence to start building

## Checklist

- [ ] Kiro confirmed the stack
- [ ] Kiro did **not** write code yet
- [ ] You know the 10-part roadmap

**Next:** [Part 2 — Environment Setup](part-02-environment-setup.md)
