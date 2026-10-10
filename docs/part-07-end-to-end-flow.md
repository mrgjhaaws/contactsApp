# Part 7/10 — Understand the Complete End-to-End Flow

**Goal:** Understand how data flows through the Address Book App for every user action (add, view, edit, delete).

## Key components

| Component | Tech | Port |
|-----------|------|------|
| Frontend | React + Vite | 5173 |
| Backend | Node.js + Express | 3000 |
| Database | MongoDB Atlas (cloud) | — |

## Flow overview — "user adds a new contact"

```
User ──(1) fills form, clicks Save──▶ React UI (5173)
React UI ──(2) Axios POST /api/contacts──▶ Express API (3000)
Express ──(3) Mongoose save()──▶ MongoDB Atlas
MongoDB ──(4) saved document──▶ Express
Express ──(5) JSON response (201)──▶ React UI
React UI ──(6) reloads list──▶ User sees the new contact
```

## Real example — Add Contact flow, mapped to files

| Step | What happens | File / function |
|------|--------------|-----------------|
| 1 | User fills the form and clicks Save | `components/ContactForm.jsx` → `handleSubmit` |
| 2 | Frontend sends `POST /api/contacts` via Axios | `services/api.js` → `addContact` |
| 3 | Backend receives the request and builds a document | `routes/contacts.js` → `router.post('/')` |
| 4 | Mongoose validates and saves to MongoDB | `models/Contact.js` schema |
| 5 | Backend returns the saved contact (JSON) | `res.status(201).json(saved)` |
| 6 | Frontend reloads the list and shows the contact | `pages/Home.jsx` → `handleSave` → `load()` |

## Sample request and response

Request body:

```json
{ "name": "Raj Sharma", "phone": "9876543210", "email": "raj@example.com", "address": "Bangalore" }
```

Response:

```json
{
  "_id": "66f9c8e2a1b2c3d4e5f6a7b8",
  "name": "Raj Sharma",
  "phone": "9876543210",
  "email": "raj@example.com",
  "address": "Bangalore",
  "createdAt": "2026-09-19T10:30:00.000Z",
  "updatedAt": "2026-09-19T10:30:00.000Z"
}
```

## Same pattern for the other actions

| Action | HTTP | Frontend function | Backend |
|--------|------|-------------------|---------|
| View | GET `/api/contacts` | `getContacts` | `Contact.find()` |
| Search | GET `/api/contacts?search=…` | `getContacts(search)` | regex filter |
| Edit | PUT `/api/contacts/:id` | `updateContact` | `findByIdAndUpdate` |
| Delete | DELETE `/api/contacts/:id` | `deleteContact` | `findByIdAndDelete` |

## How to use Kiro in this part

Prompt for Kiro:

> "Explain the complete flow of the Address Book App for Add, View, Search, Edit and Delete. For each, show which frontend function, HTTP request, backend route and Mongoose call is involved, referencing the actual files in this project."

Good learning exercises with Kiro:

- "Trace what happens if the email is invalid, from the form to the error shown on screen."
- "Add `console.log` statements so I can watch a request travel through the stack, then show me how to remove them."
- "Draw a sequence diagram of Delete."

## Key takeaways

- Frontend and backend talk over HTTP/REST.
- Axios makes the API calls; Mongoose talks to MongoDB.
- Data flows both ways (request and response).
- The same pattern works for every feature and most web apps.

**Previous:** [Part 6](part-06-mongodb.md) · **Next:** [Part 8 — Deployment](part-08-deployment.md)
