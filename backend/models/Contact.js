const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    phone: { type: String, required: [true, 'Phone is required'], trim: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Email format is invalid'],
    },
    address: { type: String, required: [true, 'Address is required'], trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
