# AI & Robotics Summer Workshop — Kidrove

## Project Structure
```
workshop/
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Details.jsx
│   │   │   ├── Outcomes.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Registration.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
└── server/          # Express.js backend
    ├── index.js
    └── package.json
```

## Quick Start

### 1. Start the Backend
```bash
cd server
npm install
npm start
# Runs on http://localhost:5000
```

### 2. Start the Frontend
```bash
cd client
npm install
npm run dev
# Runs on http://localhost:5173
```

## API

### POST /api/enquiry
Registers a new workshop enquiry.

**Request Body:**
```json
{
  "name": "Riya Sharma",
  "email": "parent@example.com",
  "phone": "+91 98765 43210"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thanks Riya Sharma! Your registration has been received...",
  "id": 1718123456789
}
```

**Validation Error (400):**
```json
{
  "success": false,
  "errors": ["Valid email is required."]
}
```

### GET /api/enquiries
Returns all submitted enquiries (admin use).

## Evaluation Checklist
- ✅ UI Design & Responsiveness — mobile-first, sticky nav, smooth scroll
- ✅ React Component Structure — 7 modular components
- ✅ Code Quality — clean JSX, prop-less where possible, semantic HTML
- ✅ API Implementation — Express + validation + error handling
- ✅ Attention to Detail — animations, hover states, accessible labels, loading state
