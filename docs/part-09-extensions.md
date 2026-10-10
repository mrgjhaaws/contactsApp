# Part 9/10 — Real-World Use Cases & Extensions

**Goal:** Explore real-world use cases and add new features to make the Address Book App more useful, professional and production-ready.

## Real-world use cases

Personal use · Professional (clients, team) · School/College (students, teachers, parents) · Hospital/Clinic (patients) · Small business (customers, suppliers) · Community/NGO (members, volunteers)

## Feature ideas and how Kiro helps

| Feature | Tech to explore | Kiro prompt (starter) |
|---------|-----------------|-----------------------|
| User authentication | JWT, bcrypt | "Add sign up / login / logout with JWT and bcrypt. Protect `/api/contacts` and scope contacts to the logged-in user." |
| Profile pictures | Multer, Cloudinary | "Let me upload a photo for each contact using Multer and Cloudinary, and show it in the list." |
| Contact categories | schema + UI | "Add a `category` field (Personal, Work, Family, Others) to the schema, form and list." |
| Import / export CSV | Papaparse | "Add Export CSV and Import CSV buttons using Papaparse." |
| Advanced search | query params | "Filter by name, email, phone or category." |
| Mobile friendly | CSS / React Native | "Improve the responsive layout, or outline a React Native version." |
| Better UI/UX | Tailwind CSS, Material UI | "Restyle the UI with Tailwind CSS without changing behavior." |
| Data validation | schema + frontend | "Add phone-number validation and clear error messages." |
| Analytics | counts per category | "Add a small stats panel: total contacts, per category." |
| Cloud services | email, backup | "Send a welcome email when a contact is added." |

## Sample feature walk-through — Add Categories

Touch these files:

1. `backend/models/Contact.js`

   ```js
   category: { type: String, enum: ['Personal', 'Work', 'Family', 'Others'], default: 'Personal' },
   ```

2. `backend/routes/contacts.js` — include `category` in the POST and PUT destructuring, and optionally in `GET ?category=Work` filtering.
3. `frontend/src/components/ContactForm.jsx` — add a `<select name="category">` and include it in `form` state and the `onSave` payload.
4. `frontend/src/components/ContactList.jsx` — add a **Category** column.

Prompt for Kiro:

> "Add a `category` field (Personal, Work, Family, Others) to the Address Book App. Update the Mongoose model, the POST/PUT routes, the contact form (dropdown) and the contact list (new column). Keep existing contacts working with a default of Personal."

## Working tip

Add **one feature per Kiro session**, test it (Part 5 checklist), commit, then move on. Redeploy (Part 8) after each stable feature.

## Benefits

More useful and practical · Real-world skills · Stronger portfolio · Ready for professional projects · Customizable · Opens freelance/job opportunities

**Previous:** [Part 8](part-08-deployment.md) · **Next:** [Part 10 — Final Review](part-10-final-review.md)
