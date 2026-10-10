# Part 6/10 — Store Data in MongoDB (Mongoose)

**Goal:** Replace the SQLite database with MongoDB using Mongoose, and store contacts in the cloud (MongoDB Atlas) for a more realistic setup.

## Why MongoDB?

No complex setup · Easy to scale · Flexible document structure · Widely used · Free cloud tier (Atlas)

## Steps

### 1. Create a MongoDB Atlas account

1. Go to <https://www.mongodb.com/atlas>
2. Create a free account
3. Create a new cluster (**Free tier**)
4. Create a **database user** and allow your IP under **Network Access**
5. Click **Connect** and copy the connection string:

```
mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/addressbook?retryWrites=true&w=majority
```

### 2. Install Mongoose

```bash
cd backend
npm install mongoose
```

### 3. Create the Contact model — `backend/models/Contact.js`

Fields: `name`, `phone`, `email`, `address` (all required) with `timestamps: true`.

### 4. Connect in `server.js`

Reads `MONGO_URI` from the environment (`backend/.env`) and starts the server after a successful connection.

### 5. Update the routes — `backend/routes/contacts.js`

`Contact.find()`, `new Contact(req.body).save()`, `findByIdAndUpdate()` and `findByIdAndDelete()` replace the SQL statements. **The API endpoints stay the same** — only the database layer changes.

### 6. Test with Postman and the React UI

Start both servers, run all CRUD operations, and confirm the documents appear in your Atlas cluster (**Browse Collections**).

## Set up in this repo

```bash
cd backend
cp .env.example .env
# edit .env and paste your Atlas string into MONGO_URI
npm install
npm run dev
```

Never commit `.env` (it is in `.gitignore`).

## What changes from SQLite

| SQLite stage | MongoDB stage |
|--------------|---------------|
| `id` (integer) | `_id` (ObjectId string) |
| `db.run / db.all` | `Contact.find / save / findByIdAndUpdate / findByIdAndDelete` |
| `data.db` file | Atlas cluster (or local MongoDB) |
| Table with `CREATE TABLE` | Mongoose schema |

The frontend uses `c._id` for keys, edits and deletes, so it already matches this stage.

## How to use Kiro in this part

Prompt for Kiro:

> "Migrate the Address Book backend from SQLite to MongoDB using Mongoose. Create `models/Contact.js` (name, phone, email, address required, timestamps), read the connection string from `MONGO_URI` in a `.env` file, and update `routes/contacts.js` so the API endpoints stay exactly the same. Update the frontend to use `_id` instead of `id`."

Useful follow-ups:

- "Add `dotenv` and a `.env.example` file."
- "Make search work on name, phone, email and address."
- "Return `400` for validation errors and `404` for missing contacts."

## Checklist

- [ ] `Connected to MongoDB` appears in the terminal
- [ ] CRUD works in Postman and the UI
- [ ] Documents visible in Atlas

**Previous:** [Part 5](part-05-testing.md) · **Next:** [Part 7 — End-to-End Flow](part-07-end-to-end-flow.md)
