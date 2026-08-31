const express = require('express');
const router = express.Router();
const Sample = require('../models/Sample');

// Test GET route
router.get('/data', async (req, res) => {
  try {
    const data = await Sample.find();
    res.json({ message: 'Hello from the backend!', data });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Test POST route
router.post('/data', async (req, res) => {
  try {
    const newSample = new Sample({ name: req.body.name || 'Test Item' });
    await newSample.save();
    res.status(201).json(newSample);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
