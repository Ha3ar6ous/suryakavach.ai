import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Advisory from './pages/Advisory';
import Emergency from './pages/Emergency';
import Reports from './pages/Reports';
import About from './pages/About';
import AiAssistant from './components/AiAssistant';

export default function App() {
  const [backendMsg, setBackendMsg] = useState<string>('');

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        if (data && data.message) setBackendMsg(data.message);
      })
      .catch(err => console.error('Error connecting to backend:', err));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#FBFBF9] text-slate-900 font-sans flex flex-col justify-between overflow-x-hidden">
        {backendMsg && <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">Backend Connected: {backendMsg}</div>}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <AiAssistant />
        <Footer />
      </div>
    </Router>
  );
}
