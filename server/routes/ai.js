const express = require('express');
const router = express.Router();
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are Surya, a helpful AI assistant for the SuryaKavach disaster and emergency management platform. Keep your answers concise, helpful, and focused on safety and situational awareness." },
        { role: "user", content: message }
      ],
      model: "qwen/qwen3.8-27b", 
    });

    res.json({ reply: chatCompletion.choices[0]?.message?.content || "No response generated." });
  } catch (error) {
    console.error("Groq Error:", error);
    res.status(500).json({ error: 'Failed to generate AI response' });
  }
});

module.exports = router;
