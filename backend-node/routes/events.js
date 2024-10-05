const express = require('express');
const Event = require('../models/Event');  // Import the Event model
const router = express.Router();

// Route to create a new event
router.post('/create', async (req, res) => {
  const { title, time } = req.body;
  try {
    const event = new Event({ title, time });
    await event.save();
    res.status(201).json(event);  // Return the created event
  } catch (error) {
    res.status(400).json({ error: 'Error creating event' });
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();  // Fetch all events from MongoDB Atlas
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching events' });
  }
});

module.exports = router;