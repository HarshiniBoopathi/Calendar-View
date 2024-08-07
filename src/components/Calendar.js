import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { fetchEvents } from '../services/api';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(response => {
      setEvents(response.data);
    }).catch(error => {
      console.error('Error fetching events', error);
    });
  }, []);

  const eventStyleGetter = (event) => {
    const backgroundColor = event.type === 'login' ? 'green' : 'red';
    const style = {
      backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return { style };
  };

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default MyCalendar;
