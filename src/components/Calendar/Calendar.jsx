/* eslint-disable max-len */
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const myEventsList = [{
    title: 'test',
    start: new Date(2020, 10, 5),
    end: new Date(2020, 10, 6),
    allDay: true,
    resource: null,
  }];

  return (
    <div style={{ height: '300pt' }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
      />
    </div>
  );
};

export default MyCalendar;
