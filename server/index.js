const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({ origin: '*' }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err.message));

// Schema
const enquirySchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, trim: true, lowercase: true },
  phone:    { type: String, required: true, trim: true },
  workshop: { type: String, default: 'AI & Robotics Summer Workshop' },
}, { timestamps: true });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Validation
const validate = ({ name, email, phone }) => {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.');
  if (!phone || !/^\+?[\d\s\-]{7,15}$/.test(phone)) errors.push('Valid phone number is required.');
  return errors;
};

// POST /api/enquiry
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone } = req.body;
  const errors = validate({ name, email, phone });
  if (errors.length) return res.status(400).json({ success: false, errors });

  try {
    const enquiry = await Enquiry.create({ name, email, phone });
    res.status(201).json({
      success: true,
      message: `Thanks ${enquiry.name}! Registration received. We'll contact you at ${enquiry.email} soon.`,
      id: enquiry._id,
    });
  } catch (err) {
    res.status(500).json({ success: false, errors: ['Server error. Please try again.'] });
  }
});

// GET /api/enquiries
app.get('/api/enquiries', async (req, res) => {
  try {
    const data = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, errors: ['Could not fetch.'] });
  }
});

app.get('/', (req, res) => res.json({ status: 'API running ✅' }));

app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
