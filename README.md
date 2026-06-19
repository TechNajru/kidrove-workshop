# AI & Robotics Summer Workshop — Kidrove

## Project Structure
```
├── client/          → React frontend (deploy on Vercel)
└── server/          → Express backend (deploy on Render)
```

## Local Setup

### Backend
```bash
cd server
npm install
# Create .env file:
# MONGO_URI=mongodb+srv://najrudeenalam7:UmDOp6cVIKuYjMEW@cluster0.lpk8dzl.mongodb.net/kidrove?appName=Cluster0
# PORT=5000
npm start
```

### Frontend
```bash
cd client
npm install
npm run dev
```

## Deployment

### Render (Backend)
- Root Directory: `server`
- Build: `npm install`
- Start: `node index.js`
- Env Variable: `MONGO_URI` = your Atlas connection string

### Vercel (Frontend)
- Root Directory: `client`
- Framework: Vite
- Env Variable: `VITE_API_URL` = your Render URL

## API Endpoints
- `POST /api/enquiry` — Submit registration
- `GET /api/enquiries` — View all registrations
