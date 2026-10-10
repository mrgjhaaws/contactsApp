# Part 8/10 — Deploy the Address Book App

**Goal:** Deploy the frontend on **Vercel**, the backend on **Render**, and use **MongoDB Atlas** as the database, so the app is live on the internet.

```
User (browser) ⇄ Vercel (React + Vite) ⇄ Render (Node + Express) ⇄ MongoDB Atlas
```

## Before you start

1. Push the project to GitHub (repo name e.g. `address-book-app`).
2. Confirm `.env` is **not** committed.
3. Make sure the app works locally (Part 5).

```bash
git init
git add .
git commit -m "Address Book App"
git branch -M main
git remote add origin https://github.com/<you>/address-book-app.git
git push -u origin main
```

## Step 1 — Database (MongoDB Atlas)

You created the cluster in Part 6. Confirm:

- [ ] Free Atlas cluster
- [ ] Database user
- [ ] Network access (allow `0.0.0.0/0` for now — tighten later)
- [ ] Connection string

```
mongodb+srv://<username>:<password>@cluster0.abcd.mongodb.net/addressbook?retryWrites=true&w=majority
```

Keep it safe — it goes into Render as an environment variable.

## Step 2 — Backend on Render

1. Go to <https://render.com> and sign up with GitHub.
2. **New + → Web Service**.
3. Connect the `address-book-app` repository.
4. Set:

| Setting | Value |
|---------|-------|
| Name | `address-book-backend` |
| Root Directory | `backend` |
| Environment / Runtime | Node |
| Build Command | `npm install` |
| Start Command | `node server.js` |
| Env var `MONGO_URI` | your Atlas connection string |
| Env var `CORS_ORIGIN` | your Vercel URL (add after Step 3) |

5. Deploy. You get a URL like `https://address-book-backend.onrender.com`.
6. Check `https://address-book-backend.onrender.com/api/contacts` returns JSON (`[]` at first).

> Render's free tier sleeps when idle; the first request after a pause can take about a minute.

## Step 3 — Frontend on Vercel

1. Go to <https://vercel.com> and sign up with GitHub.
2. **Add New Project** → import the repository.
3. Set **Root Directory** to `frontend` (framework preset: Vite).
4. Add environment variable:

| Name | Value |
|------|-------|
| `VITE_API_URL` | `https://address-book-backend.onrender.com/api` |

5. **Deploy**. You get `https://address-book-frontend.vercel.app` (name varies).
6. Go back to Render and set `CORS_ORIGIN` to that Vercel URL, then redeploy the backend.

## Step 4 — Test the live app

- [ ] Add a contact
- [ ] View the list
- [ ] Search
- [ ] Edit
- [ ] Delete
- [ ] Data appears in Atlas

## How to use Kiro in this part

Prompt for Kiro:

> "Help me deploy the Address Book App. The backend (Node + Express + Mongoose) is in `backend/` and goes to Render, the frontend (React + Vite) is in `frontend/` and goes to Vercel, the database is MongoDB Atlas. Give me a checklist of exact settings for each service, tell me which environment variables to set (`MONGO_URI`, `CORS_ORIGIN`, `VITE_API_URL`), and review my code for anything that would break in production."

If deployment fails, paste Kiro the **build log** from Render or Vercel.

## Common deployment problems

| Symptom | Likely cause |
|---------|--------------|
| Frontend loads but list is empty and console shows a network error | Wrong `VITE_API_URL`, or Render is still waking up |
| CORS error in the browser | `CORS_ORIGIN` on Render doesn't match the Vercel URL |
| Backend crashes at start: `MongoDB connection error` | Wrong password in `MONGO_URI`, or Atlas Network Access blocks Render |
| Build fails on Vercel | Root Directory is not `frontend` |

**Previous:** [Part 7](part-07-end-to-end-flow.md) · **Next:** [Part 9 — Extensions](part-09-extensions.md)
