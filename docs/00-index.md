# Documentation Index — Using Kiro with the Address Book Project

This folder explains **how to use each part of the Kiro series with this project**. The Kiro parts themselves (the infographics, their prompts and their story) are untouched; these guides map every part onto the files in this repository.

## How to use these guides

1. Open this project folder in VS Code (`File → Open Folder → address-book-app`).
2. Open Kiro on the same folder, so Kiro can see `backend/` and `frontend/`.
3. For each part, read its guide, then paste the **Kiro prompt** from the guide into Kiro.
4. Compare what Kiro generates with the matching files in this repo. Use the repo as your reference solution.

## Working loop for every part

```
Prompt Kiro  →  Review the plan/diff  →  Accept  →  Run  →  Test  →  Ask Kiro to fix/improve
```

Tips for good Kiro sessions:

- Give Kiro **one part at a time** and name the files it should touch.
- Ask for a **plan first**, then code (Part 1 does exactly this).
- Paste the **exact error message** when something breaks — Kiro debugs best with real output.
- Commit to Git after each accepted part so you can roll back.

## Part → files map

| Part | Main files touched in this repo |
|------|--------------------------------|
| 1 Kickoff | none (planning only) |
| 2 Environment | `backend/package.json`, `frontend/package.json`, `vite.config.js` |
| 3 Backend | `backend/server.js`, `backend/routes/contacts.js` (SQLite stage; final repo uses Mongoose) |
| 4 Frontend | `frontend/src/**` |
| 5 Testing | no new code; Postman + browser checks, small validation fixes |
| 6 MongoDB | `backend/models/Contact.js`, `server.js`, `routes/contacts.js`, `.env` |
| 7 End-to-end flow | read-only walkthrough of all layers |
| 8 Deployment | `.env` values, Render and Vercel settings |
| 9 Extensions | new files per feature (auth, categories, CSV…) |
| 10 Final review | checklist, no code |

## Series at a glance

1. Project Kickoff → 2. Environment → 3. Backend → 4. Frontend → 5. Testing → 6. MongoDB → 7. End-to-End Flow → 8. Deployment → 9. Extensions → 10. Final Review

Stuck? See [troubleshooting.md](troubleshooting.md).
