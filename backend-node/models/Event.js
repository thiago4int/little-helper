const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
