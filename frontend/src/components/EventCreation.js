import React, { useState } from 'react';

function EventCreation({ createEvent }) {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !time) {
      alert('Please provide both a title and a time.');
      return;
    }
    createEvent({ title, time });
    setTitle('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventCreation;
