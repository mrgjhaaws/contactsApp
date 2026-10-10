const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// GET /api/contacts?search=raj  -> list (optionally filtered) contacts
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.search) {
      const rx = new RegExp(escapeRegex(req.query.search), 'i');
      filter.$or = [{ name: rx }, { phone: rx }, { email: rx }, { address: rx }];
    }
    const contacts = await Contact.find(filter).sort({ name: 1 });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
});

// GET /api/contacts/:id -> one contact
router.get('/:id', async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    next(err);
  }
});

// POST /api/contacts -> create
router.post('/', async (req, res, next) => {
  try {
    const { name, phone, email, address } = req.body;
    const saved = await new Contact({ name, phone, email, address }).save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// PUT /api/contacts/:id -> update
router.put('/:id', async (req, res, next) => {
  try {
    const { name, phone, email, address } = req.body;
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, phone, email, address },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Contact not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/contacts/:id -> remove
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Contact deleted', id: deleted._id });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
