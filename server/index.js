const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/kidrove';

app.use(cors());
app.use(express.json());

// ── MongoDB Connection ──
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// ── Schema & Model ──
const enquirySchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true },
  phone:     { type: String, required: true, trim: true },
  workshop:  { type: String, default: 'AI & Robotics Summer Workshop' },
}, { timestamps: true });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

// ── Validation helper ──
const validateEnquiry = ({ name, email, phone }) => {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.');
  if (!phone || !/^\+?[\d\s\-]{7,15}$/.test(phone)) errors.push('Valid phone number is required.');
  return errors;
};

// ── POST /api/enquiry ──
app.post('/api/enquiry', async (req, res) => {
  const { name, email, phone } = req.body;

  const errors = validateEnquiry({ name, email, phone });
  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    const enquiry = await Enquiry.create({ name, email, phone });
    console.log('New enquiry saved:', enquiry._id);
    return res.status(201).json({
      success: true,
      message: `Thanks ${enquiry.name}! Your registration has been received. We'll reach out at ${enquiry.email} soon.`,
      id: enquiry._id,
    });
  } catch (err) {
    console.error('Save error:', err.message);
    return res.status(500).json({ success: false, errors: ['Server error. Please try again.'] });
  }
});

// ── GET /api/enquiries (admin) ──
app.get('/api/enquiries', async (req, res) => {
  try {
    const data = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, errors: ['Could not fetch enquiries.'] });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
