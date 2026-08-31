# Full-Stack Application: SuryaKavach

This repository contains a full-stack web application with a React (Vite) frontend and a Node.js/Express backend connected to a MongoDB database.

## Project Structure

- **`suryakavach.ai/`** (Frontend): The React application built with Vite and Tailwind CSS.
- **`server/`** (Backend): The Node.js Express server that provides the API and connects to MongoDB Cloud.

---

## 🛠️ How to Run Locally

To run the full application locally, you will need to start both the backend server and the frontend development server in two separate terminal windows.

### 1. Start the Backend (Terminal 1)

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory (if not already present) and add your MongoDB Connection String:
   ```env
   MONGO_URI=your_mongodb_connection_string_here
   PORT=5000
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   *You should see a message indicating the server is running on port 5000 and MongoDB is connected.*

### 2. Start the Frontend (Terminal 2)

1. Navigate to the frontend directory:
   ```bash
   cd suryakavach.ai
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the local URL provided by Vite (usually `http://localhost:5173`) in your browser.

> **Note:** The frontend `vite.config.ts` is configured to automatically proxy requests starting with `/api` to `http://localhost:5000`, so no CORS configuration is needed for local development!

---

## 🚀 How to Deploy

When deploying a split frontend/backend application, it is easiest to deploy them as two separate services.

### 1. Deploying the Backend (e.g., Render, Railway, Heroku)
- Create a new Web Service on your chosen platform.
- Connect your GitHub repository and set the **Root Directory** to `server`.
- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Environment Variables:** Be sure to add your `MONGO_URI` and any other secrets in the platform's dashboard.

### 2. Deploying the Frontend (e.g., Vercel, Netlify, Cloudflare Pages)
- Create a new project/site on your chosen platform.
- Connect your GitHub repository and set the **Root Directory** to `suryakavach.ai`.
- **Framework Preset:** Vite (or React)
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

### 🔗 Connecting Frontend to Backend in Production
In local development, Vite proxies the `/api` calls. In production, this proxy doesn't exist. You will need to make sure your frontend knows the URL of your deployed backend.

To do this:
1. In your frontend code, replace relative API calls (like `fetch('/api/data')`) with full URLs in production.
2. A common pattern is to create a `.env` file in the frontend (`suryakavach.ai/.env`) with:
   ```env
   VITE_API_URL=https://your-deployed-backend-url.com
   ```
3. Then update your fetch calls to use it:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || '';
   fetch(`${API_URL}/api/data`)
   ```
