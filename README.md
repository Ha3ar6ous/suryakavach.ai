# suryakavach.ai — Climate Intelligence & Heatwave Early Warning System

> Predict extreme heat. Protect vulnerable cities.

suryakavach.ai is a full-stack climate-intelligence platform for tracking heat risk, validating AI forecasts against ground observations, and delivering practical safety guidance. It brings together IMD-aligned climate context, IoT Automated Weather Station (AWS) telemetry, AI heatwave intelligence, and stakeholder-specific LLM advisories.

## Why it matters
Extreme heat events are becoming more frequent and severe across India. Localized, real-time information is essential for helping communities, workers, health authorities, and emergency teams act before heat stress becomes a medical crisis.

## Technical Architecture
The project is built as a full-stack modern application powered by high-speed AI inference (Groq):

- **Frontend (`client/`)**: React, TypeScript, Vite, Tailwind CSS, Recharts.
- **Backend (`server/`)**: Node.js, Express.js, MongoDB Cloud.
- **AI Engine**: Groq API (Qwen 3.8 27B) for real-time situational awareness and an intelligent chat assistant.

## Folder Structure

```text
Projectmain/
├── client/               # React (Vite) Frontend Application
│   ├── src/
│   │   ├── components/   # UI and AiAssistant components
│   │   ├── data/         # Mock datasets
│   │   ├── pages/        # Dashboard, Advisory, Emergency, Reports
│   │   └── types/        # TypeScript interfaces
│   └── package.json
├── server/               # Node.js (Express) Backend Application
│   ├── models/           # MongoDB schemas (Report, Advisory, Sample)
│   ├── routes/           # REST API routes (api.js, reports.js, advisories.js, ai.js)
│   ├── server.js         # Express entry point
│   └── package.json
└── README.md             # This documentation
```

---

## 🛠️ Local Setup Instructions

To run the full application locally, you need to start both the backend server and the frontend development server.

### 1. Prerequisites
- Node.js (v18+)
- A MongoDB Cloud Database Connection String
- A Groq API Key (for the AI Assistant)

### 2. Start the Backend (Terminal 1)
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add your secret keys:
```env
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
PORT=5000
```
Start the backend:
```bash
node server.js
```
*You should see "MongoDB connected successfully" and "Server is running on port 5000".*

### 3. Start the Frontend (Terminal 2)
```bash
cd client
npm install
npm run dev
```
*The Vite development server will start on `http://localhost:5173`. API requests to `/api` are automatically proxied to the backend via `vite.config.ts`.*

---

## 🚀 Deployment Guide

We recommend deploying the **Frontend to Vercel** and the **Backend to Render**.

### Step 1: Deploy Backend to Render
1. Create a free account on [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub repository.
4. **Settings:**
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. **Environment Variables (Important!):**
   - Add `MONGO_URI` with your MongoDB connection string.
   - Add `GROQ_API_KEY` with your Groq API key.
6. Click **Deploy** and copy the provided Render URL once successful (e.g., `https://suryakavach-api.onrender.com`).

### Step 2: Configure Frontend for Production
In development, Vite proxies the `/api` calls. In production, Vercel needs to know how to route these requests to your Render backend.

1. Navigate to the `client/` folder.
2. Create a file named `vercel.json`.
3. Add the following configuration, replacing the destination URL with your **actual Render URL**:
   ```json
   {
     "rewrites": [
       {
         "source": "/api/(.*)",
         "destination": "https://suryakavach-api.onrender.com/api/$1"
       },
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```
*(This ensures all `/api/...` calls go to your backend, and all other routes serve your React app).*

### Step 3: Deploy Frontend to Vercel
1. Create a free account on [Vercel](https://vercel.com/).
2. Click **Add New -> Project** and select your GitHub repository.
3. **Settings:**
   - **Root Directory:** Click Edit and select `client`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Vercel will automatically build the site and deploy it globally!
