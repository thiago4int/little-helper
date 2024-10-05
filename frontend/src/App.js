import React, { useState, useEffect } from 'react';
import FlowChart from './components/FlowChart';
import EventCreation from './components/EventCreation';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/events`);
    const data = await res.json();
    setEvents(data);
  };

  const createEvent = async (event) => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/events/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    });
    fetchEvents();
  };

  return (
    <div>
      <h1>Event Scheduler with Flow</h1>
      <EventCreation createEvent={createEvent} />
      <FlowChart events={events} />
    </div>
  );
}

export default App;

