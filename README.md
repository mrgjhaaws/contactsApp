# Address Book App — Build with Kiro

A full-stack **Address Book** app built step by step across a 10-part infographic series (#BuildWithKiro).

| Layer | Tech | Port / Host |
|-------|------|-------------|
| Frontend | React 18 + Vite + Axios | `http://localhost:5173` (Vercel in production) |
| Backend | Node.js + Express | `http://localhost:3000` (Render in production) |
| Database | MongoDB + Mongoose | Local MongoDB or MongoDB Atlas |

Features: **add, view, search, edit and delete** contacts (name, phone, email, address).

> The Kiro prompts and parts from the infographics are left exactly as they are.
> This project only adds **documentation on how to use each Kiro part with this codebase** — see [`docs/`](docs/00-index.md).

---

## Project structure

```
address-book-app/
├── README.md
├── .gitignore
├── .vscode/                 # recommended extensions + launch/tasks
├── docs/                    # one guide per Kiro part (1–10)
├── backend/
│   ├── server.js            # Express app + MongoDB connection
│   ├── models/Contact.js    # Mongoose schema
│   ├── routes/contacts.js   # CRUD + search routes
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── .env.example
    └── src/
        ├── main.jsx · App.jsx · index.css
        ├── services/api.js          # Axios calls
        ├── components/ContactForm.jsx
        ├── components/ContactList.jsx
        └── pages/Home.jsx
```

## Quick start (local)

Prerequisites: Node.js LTS, Git, VS Code, Postman, and either a local MongoDB or a free MongoDB Atlas cluster.

```bash
# 1) Backend
cd backend
npm install
cp .env.example .env        # then set MONGO_URI
npm run dev                 # http://localhost:3000

# 2) Frontend (new terminal)
cd frontend
npm install
cp .env.example .env
npm run dev                 # http://localhost:5173
```

In VS Code you can also press **Ctrl+Shift+B** and choose **Run Full Stack** (see `.vscode/tasks.json`).

## REST API

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/contacts` | List all contacts (`?search=raj` filters) |
| GET | `/api/contacts/:id` | Get one contact |
| POST | `/api/contacts` | Create a contact |
| PUT | `/api/contacts/:id` | Update a contact |
| DELETE | `/api/contacts/:id` | Delete a contact |

Sample body:

```json
{ "name": "Raj Sharma", "phone": "9876543210", "email": "raj@example.com", "address": "Bangalore" }
```

## Documentation map

| Part | Topic | Guide |
|------|-------|-------|
| 1 | Project Kickoff | [docs/part-01-project-kickoff.md](docs/part-01-project-kickoff.md) |
| 2 | Set Up the Development Environment | [docs/part-02-environment-setup.md](docs/part-02-environment-setup.md) |
| 3 | Build the Backend (Node + Express) | [docs/part-03-backend.md](docs/part-03-backend.md) |
| 4 | Build the Frontend (React + Vite) | [docs/part-04-frontend.md](docs/part-04-frontend.md) |
| 5 | Test the Application | [docs/part-05-testing.md](docs/part-05-testing.md) |
| 6 | Store Data in MongoDB (Mongoose) | [docs/part-06-mongodb.md](docs/part-06-mongodb.md) |
| 7 | Understand the End-to-End Flow | [docs/part-07-end-to-end-flow.md](docs/part-07-end-to-end-flow.md) |
| 8 | Deploy (Vercel + Render + Atlas) | [docs/part-08-deployment.md](docs/part-08-deployment.md) |
| 9 | Real-World Use Cases & Extensions | [docs/part-09-extensions.md](docs/part-09-extensions.md) |
| 10 | Final Review & What's Next | [docs/part-10-final-review.md](docs/part-10-final-review.md) |

Also: [docs/00-index.md](docs/00-index.md) (how the Kiro workflow maps onto this repo) and [docs/troubleshooting.md](docs/troubleshooting.md).

## Note on the SQLite → MongoDB step

The series builds the backend on SQLite in Parts 2–5 and switches to MongoDB in Part 6.
This repository ships the **final (MongoDB) state** so everything runs end to end.
[docs/part-03-backend.md](docs/part-03-backend.md) includes the SQLite-stage reference code if you want to follow the series literally.

## License

MIT
