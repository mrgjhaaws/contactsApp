# Troubleshooting

| Problem | Cause | Fix |
|---------|-------|-----|
| `MongoDB connection error: ... ECONNREFUSED` | No local MongoDB running | Start MongoDB, or set `MONGO_URI` to an Atlas string in `backend/.env` |
| `MongoServerError: bad auth` | Wrong Atlas user/password | Recreate the DB user; URL-encode special characters in the password |
| Atlas times out | IP not allowed | Atlas → Network Access → add your IP (or `0.0.0.0/0` for demos) |
| `EADDRINUSE :::3000` | Port already used | Stop the other process or change `PORT` in `.env` |
| UI says "Could not reach the API" | Backend down or wrong URL | Start the backend; check `VITE_API_URL` in `frontend/.env` and restart `npm run dev` |
| CORS error | Origin not allowed | Set `CORS_ORIGIN` on the backend to the frontend URL |
| Env var change has no effect (Vite) | Vite reads env at start | Restart `npm run dev` / redeploy |
| `Invalid contact id` | Non-ObjectId in URL | Use the `_id` value from the list response |
| First request on Render is slow | Free tier sleeps | Wait ~1 minute, retry |
| `npm create vite` prompts | Interactive | Choose React → JavaScript |

## Handy commands

```bash
# Is the API alive?
curl http://localhost:3000/api/contacts

# Create a contact
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Raj Sharma","phone":"9876543210","email":"raj@example.com","address":"Bangalore"}'
```
