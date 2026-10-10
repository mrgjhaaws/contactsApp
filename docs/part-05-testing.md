# Part 5/10 — Test the Application (Frontend + Backend)

**Goal:** Verify that everything works end to end — all CRUD operations in Postman and in the React UI — and debug common issues.

## What we test

- Start backend and frontend
- Test API endpoints in Postman
- Test all operations in the React UI
- Debug common issues
- Confirm end-to-end functionality

## Steps

### 1. Start the backend

```bash
cd backend
node server.js      # or: npm run dev
# Server running on port 3000
```

### 2. Start the frontend

```bash
cd frontend
npm run dev         # http://localhost:5173
```

### 3. Test the API in Postman

Import or recreate these requests (base URL `http://localhost:3000/api/contacts`):

| Request | Expected |
|---------|----------|
| `GET /` | `200` + array of contacts |
| `POST /` with the sample body | `201` + created contact |
| `PUT /:id` with changed fields | `200` + updated contact |
| `DELETE /:id` | `200` + `{ "message": "Contact deleted" }` |
| `POST /` with empty body | `400` + validation message |
| `GET /not-a-real-id` | `400` (bad id) or `404` (missing) |

### 4. Test in the React UI

Open `http://localhost:5173`.

### 5. Verify CRUD operations

- [ ] Add a new contact
- [ ] See it in the list
- [ ] Search for it
- [ ] Edit its details
- [ ] Delete it
- [ ] Changes show immediately in the UI **and** the database

### 6. Debug common issues

| Problem | Fix |
|---------|-----|
| **CORS error** | Make sure `cors()` is enabled in `backend/server.js` (and `CORS_ORIGIN` includes the frontend URL in production) |
| **API not reachable** | Is the backend running? Is `VITE_API_URL` correct? |
| **Empty form submission** | Frontend validation in `ContactForm.jsx` + schema validation in `models/Contact.js` |
| **Invalid email format** | `input type="email"` + the `match` rule in the schema |
| **Changes not reflecting** | Check the browser console, backend logs and the DevTools **Network** tab |

## How to use Kiro in this part

Prompt for Kiro:

> "Help me test the Address Book App end to end. Give me a Postman test list for every endpoint (including error cases), then a manual UI checklist. If I paste an error from the browser console or backend terminal, find the cause and propose the smallest fix."

When something fails, paste to Kiro:

1. The exact error text
2. The failing request (method, URL, body)
3. The related file (`routes/contacts.js`, `ContactForm.jsx`, …)

## Checklist

- [ ] Every endpoint behaves as in the table above
- [ ] Every UI action works
- [ ] No red errors in the browser console

**Previous:** [Part 4](part-04-frontend.md) · **Next:** [Part 6 — MongoDB](part-06-mongodb.md)
