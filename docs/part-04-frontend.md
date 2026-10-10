# Part 4/10 — Build the Frontend with React (Vite)

**Goal:** Build a React frontend that talks to the backend API, with a clean UI to list, search, add, edit and delete contacts.

## Technologies

React (with Vite) · Axios (API calls) · CSS (styling)

## Folder structure (from the infographic) and this repo

```
frontend/src/
├── components/
│   ├── ContactList.jsx
│   └── ContactForm.jsx
├── pages/
│   └── Home.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## Key files

| # | Infographic file | Role | Repo file |
|---|------------------|------|-----------|
| 1 | API Service | Axios calls (`getContacts`, `addContact`, `updateContact`, `deleteContact`) | `frontend/src/services/api.js` |
| 2 | Contact Form | Form to add and edit contacts | `frontend/src/components/ContactForm.jsx` |
| 3 | Contact List | Display, search, edit and delete | `frontend/src/components/ContactList.jsx` |
| 4 | Home Page | Combines form and list | `frontend/src/pages/Home.jsx` |
| 5 | Run the frontend | `npm run dev` → `http://localhost:5173` | — |

> The repo versions add search-as-you-type (debounced, server-side), edit mode, loading and error states, and use Mongo `_id` instead of SQLite `id`.

## How to use Kiro in this part

Prompt for Kiro:

> "Build the React (Vite) frontend for the Address Book App in `frontend/`. Create `services/api.js` using Axios against `http://localhost:3000/api`, `components/ContactForm.jsx`, `components/ContactList.jsx` (with search, edit and delete buttons) and `pages/Home.jsx`. Keep CSS simple and responsive."

Useful follow-ups:

- "The form should switch to edit mode when I click Edit."
- "Show a loading message and an error message if the API is down."
- "Move the API URL to an environment variable `VITE_API_URL`."

Run it (backend must be running too):

```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
```

## Checklist

- [ ] UI loads at `http://localhost:5173`
- [ ] List shows data from the backend
- [ ] Add, search, edit and delete all work

**Previous:** [Part 3](part-03-backend.md) · **Next:** [Part 5 — Testing](part-05-testing.md)
