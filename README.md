<div align="center">
  <img src="client/public/favicon.svg" alt="Logo" width="80" height="80">
  <h1 align="center">SuryaKavach.ai</h1>
  <p align="center">
    <strong>Climate Intelligence & Heatwave Early Warning System</strong>
    <br />
    Predict extreme heat. Protect vulnerable cities.
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </p>
</div>

---

##  Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [API Documentation](#-api-documentation)
- [Environment Variables](#-environment-variables)
- [Getting Started (Local Setup)](#%EF%B8%8F-getting-started-local-setup)
- [Deployment Guide](#-deployment-guide)

---

##  About the Project

**SuryaKavach.ai** is a full-stack climate-intelligence platform designed to track heat risks, validate AI forecasts against ground observations, and deliver actionable safety guidance.

Extreme heat events are becoming more frequent and severe across India. Localized, real-time information is essential for helping communities, workers, health authorities, and emergency teams act before heat stress becomes a medical crisis. 

This platform brings together IMD-aligned climate context, IoT Automated Weather Station (AWS) telemetry, AI heatwave intelligence, and stakeholder-specific LLM advisories powered by high-speed Groq AI inference.

---

##  Key Features

-  **Live Heat-Risk Dashboard**: City search, forecast/ground-truth trend charts, severity distribution, and peak-temperature comparisons.
-  **AI Chat Assistant (Surya)**: An intelligent floating widget powered by Groq (Qwen-27B) providing real-time situational awareness and answering heat-safety queries.
-  **Dynamic AI Advisory Center**: Automatically generates vulnerability profiles and targeted protocols for Citizens, Workers, the Elderly, and Health Authorities.
-  **Community Incident Reporting**: Crowd-sourced reporting network for heat stress, tracking symptoms and stress scores across regions.
- ⏱ **Work-Rest Cycle Calculator**: Dynamically computes shaded recovery intervals per hour based on temperature and job intensity.

---

##  Tech Stack

### Frontend (`client/`)
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + `clsx` + `tailwind-merge`
- **Routing:** React Router DOM
- **Charts/Maps:** Recharts, React-Leaflet
- **Icons:** Lucide React

### Backend (`server/`)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Cloud (via Mongoose)
- **AI Integration:** Groq SDK (`qwen/qwen3.8-27b`)

---

##  API Documentation

The Express backend provides the following RESTful endpoints:

### 1. Reports API
- `GET /api/reports`
  - Fetches all community incident reports, sorted by newest first.
- `POST /api/reports`
  - Submits a new heat stress report.
  - **Body Example:**
    ```json
    {
      "city": "Mumbai",
      "severity": "High",
      "symptoms": ["Dizziness", "Fatigue"],
      "stressScore": 75,
      "awsVerified": false
    }
    ```

### 2. Advisories API
- `GET /api/advisories`
  - Fetches all active heatwave advisories for all stakeholders.
- `POST /api/advisories`
  - Creates a new advisory protocol.

### 3. AI Assistant API
- `POST /api/ai/chat`
  - Processes a user query through the Groq AI LLaMA/Qwen model.
  - **Body Example:** `{ "message": "What should I do in a heatwave?" }`
  - **Response:** `{ "reply": "Stay hydrated, remain indoors..." }`

---

##  Environment Variables

Create a `.env` file in the **`server/`** directory with the following keys before running the backend:

| Variable Name | Description | Example |
|---|---|---|
| `MONGO_URI` | Your MongoDB Cloud connection string. | `mongodb+srv://user:pass@cluster0.mongodb.net/dbname` |
| `GROQ_API_KEY` | Your high-speed AI inference key from Groq. | `gsk_...` |
| `PORT` | The port the Express server will listen on. | `5000` |

---

##  Getting Started (Local Setup)

To run the application locally, you will need to start both the **Frontend** and **Backend** servers simultaneously in two separate terminals.

### Step 1: Start the Backend (Terminal 1)
```bash
# Navigate to the backend directory
cd server

# Install dependencies
npm install

# (Ensure you have created your server/.env file as detailed above)

# Start the server
node server.js
```
*You should see a message confirming the server is running on port 5000 and connected to MongoDB.*

### Step 2: Start the Frontend (Terminal 2)
```bash
# Navigate to the frontend directory
cd client

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```
*The React app will launch on `http://localhost:5173`. Any API calls to `/api` are automatically proxied to the backend via `vite.config.ts`.*

---

##  Deployment Guide

We recommend a split deployment strategy: **Vercel** for the React frontend and **Render** for the Node.js backend.

### 1. Deploying the Backend (Render)
1. Log into [Render](https://render.com/).
2. Click **New +** and select **Web Service**.
3. Connect this GitHub repository.
4. **Configuration:**
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. **Environment Variables:**
   - Add `MONGO_URI` and `GROQ_API_KEY`.
6. Click **Deploy**. Note your live Render URL (e.g., `https://suryakavach-api.onrender.com`).

### 2. Preparing the Frontend for Vercel
Because Vite's local `/api` proxy doesn't work in production, Vercel needs to know how to route your API calls to Render. We use a `vercel.json` file for this.

1. Navigate to the `client/` folder.
2. Create a file named `vercel.json` (if it doesn't already exist).
3. Add the following rewrite rule (replace the destination with your actual Render URL):
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

### 3. Deploying the Frontend (Vercel)
1. Log into [Vercel](https://vercel.com/).
2. Click **Add New -> Project** and import this repository.
3. **Configuration:**
   - **Root Directory:** Click "Edit" and select `client`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Vercel will build the frontend and your app will be live and fully connected to your backend!


Deployed server : https://suryakavach-ai.onrender.com
Deployed client : https://suryakavachdotai.vercel.app/
