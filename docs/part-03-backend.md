# Part 3/10 — Build the Backend with Node.js + Express

**Goal:** Create a Node.js + Express backend with a database and CRUD APIs (Create, Read, Update, Delete) for contacts.

## Technologies

Node.js · Express · SQLite (series stage) / MongoDB (final repo) · REST CRUD (GET, POST, PUT, DELETE)

## Steps in the infographic

1. **Create `server.js`** — Express server, `cors`, `express.json()`, listen on port 3000.
2. **Create the database and table** — a `contacts` table (`id`, `name`, `phone`, `email`, `address`).
3. **Create `routes/contacts.js`** — GET all, POST add, PUT update, DELETE remove.
4. **Wire the router** — `app.use('/api/contacts', contactsRouter)`.
5. **Test with Postman** — see table below.
6. **Sample POST body** — `{ "name": "Raj Sharma", "phone": "9876543210", "email": "raj@example.com", "address": "Bangalore" }`.

| Method | URL | Action |
|--------|-----|--------|
| GET | `http://localhost:3000/api/contacts` | List all |
| POST | `http://localhost:3000/api/contacts` | Add |
| PUT | `http://localhost:3000/api/contacts/1` | Update |
| DELETE | `http://localhost:3000/api/contacts/1` | Delete |

## Where this lives in the repo

| Infographic step | File in this repo |
|------------------|-------------------|
| `server.js` | `backend/server.js` |
| Table / schema | `backend/models/Contact.js` (Mongoose schema; SQLite `CREATE TABLE` in the appendix below) |
| Routes | `backend/routes/contacts.js` |

## How to use Kiro in this part

Prompt for Kiro:

> "Build the backend for the Address Book App in `backend/` using Node.js + Express. Create `server.js` (cors, express.json, port 3000), a SQLite `contacts` table (id, name, phone, email, address) and `routes/contacts.js` with GET, POST, PUT and DELETE under `/api/contacts`. Then give me Postman requests to test each endpoint."

Useful follow-ups:

- "Add validation: name and phone are required."
- "Return proper status codes (201 for create, 404 if not found)."
- "Explain each line of `routes/contacts.js` like I'm a beginner."

Run it:

```bash
cd backend
npm install
npm run dev     # uses nodemon; or: node server.js
```

## Appendix — SQLite stage reference (literal series version)

Use this only if you follow the series with SQLite. The repo's final code uses MongoDB.

`backend/db.js`:

```js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

db.run(`CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  address TEXT
)`);

module.exports = db;
```

`backend/routes/contacts.js` (SQLite):

```js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM contacts', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, phone, email, address } = req.body;
  db.run(
    'INSERT INTO contacts (name, phone, email, address) VALUES (?, ?, ?, ?)',
    [name, phone, email, address],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, name, phone, email, address });
    }
  );
});

router.put('/:id', (req, res) => {
  const { name, phone, email, address } = req.body;
  db.run(
    'UPDATE contacts SET name=?, phone=?, email=?, address=? WHERE id=?',
    [name, phone, email, address, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

router.delete('/:id', (req, res) => {
  db.run('DELETE FROM contacts WHERE id=?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;
```

## Checklist

- [ ] Server prints `Server running on port 3000`
- [ ] All four endpoints work in Postman
- [ ] POST returns the new contact

**Previous:** [Part 2](part-02-environment-setup.md) · **Next:** [Part 4 — Frontend](part-04-frontend.md)
