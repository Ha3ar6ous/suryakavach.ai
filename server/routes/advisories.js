const express = require('express');
const router = express.Router();
const Advisory = require('../models/Advisory');

// GET all advisories
router.get('/', async (req, res) => {
  try {
    const advisories = await Advisory.find().sort({ createdAt: -1 });
    res.json(advisories);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new advisory
router.post('/', async (req, res) => {
  try {
    const newAdvisory = new Advisory(req.body);
    await newAdvisory.save();
    res.status(201).json(newAdvisory);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
