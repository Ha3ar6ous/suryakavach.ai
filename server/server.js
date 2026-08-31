require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const reportsRoutes = require('./routes/reports');
const advisoriesRoutes = require('./routes/advisories');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/data', apiRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/advisories', advisoriesRoutes);
app.use('/api/ai', require('./routes/ai'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
