# Part 2/10 — Set Up the Development Environment

**Goal:** Install the required tools and create the project structure (frontend + backend).

## Tools needed

| Tool | Purpose | Check |
|------|---------|-------|
| Node.js (LTS) | Runs JavaScript on the server and builds the frontend | `node -v` |
| npm | Package manager (ships with Node) | `npm -v` |
| Git | Version control | `git --version` |
| Postman | Test the API | open the app |
| VS Code | Code editor | — |

## Commands from the infographic

```bash
# 1. Main folder
mkdir address-book-app
cd address-book-app

# 2. Backend (Node.js + Express)
mkdir backend && cd backend
npm init -y
npm install express cors sqlite3        # SQLite stage of the series
npm install nodemon --save-dev

# 3. Frontend (React + Vite)
cd ..
mkdir frontend && cd frontend
npm create vite@latest . -- --template react
npm install

# 4. Verify
node -v
npm -v
git --version
npx vite --version
```

> **This repo's final state:** `backend/package.json` lists `express`, `cors`, `mongoose`, `dotenv` (and `nodemon` for dev) because Part 6 swaps SQLite for MongoDB. If you are following the series literally, install `sqlite3` now and `mongoose` in Part 6.

## Final project structure

```
address-book-app/
├── backend/   (node_modules, routes, server.js, package.json)
└── frontend/  (node_modules, src, index.html, package.json, vite.config.js)
```

Two folders, one project — clean separation between frontend and backend.

## How to use Kiro in this part

Prompt for Kiro:

> "Set up the development environment for the Address Book App. Check that Node.js LTS, npm, Git and Postman are available. Create `address-book-app/` with a `backend/` (Express, cors, sqlite3, nodemon) and a `frontend/` (React + Vite). Don't write application code yet. At the end, give me the commands to verify the installs."

Then:

1. Let Kiro run or list the commands.
2. Run the **verify** commands yourself and confirm you see version numbers.
3. If `npm create vite` asks questions, choose **React** and **JavaScript**.

## Checklist

- [ ] `node -v` and `npm -v` print versions
- [ ] `backend/` and `frontend/` both exist with `package.json`
- [ ] `npx vite --version` works inside `frontend/`

**Previous:** [Part 1](part-01-project-kickoff.md) · **Next:** [Part 3 — Backend](part-03-backend.md)
