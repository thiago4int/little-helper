const mongoose = require('mongoose');

// Define the schema for the Event
const EventSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  time: { 
    type: Date, 
    required: true 
  }
});

// Create and export the Event model based on the schema
module.exports = mongoose.model('Event', EventSchema);
