/* eslint-disable keyword-spacing */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../actions/events';
import styles from './Form.css';

const Form = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [allDay, setAllDay] = useState(false);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'id') setId(target.value);
    if (target.name === 'title') setTitle(target.value);
    if (target.name === 'description') setDescription(target.value);
    if (target.name === 'start') setStart(target.value);
    if (target.name === 'end') setEnd(target.value);
    if (target.name === 'allDay') setAllDay(target.value);
  };

  const handleCreate = event => {
    event.preventDefault();
    dispatch(createEvent({
      title,
      description,
      start,
      end,
      allDay
    }));
  };

  const handleCheck = ({ target }) => {
    if (target.checked === true) { setAllDay(true); }
    else { setAllDay(false); }
  };

  return (
    <div>
      <form onSubmit={handleCreate} className={styles.all}>
        <label htmlFor="title">Event Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />

        <label htmlFor="description">Event Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />

        <label htmlFor="start">Start Time</label>
        <input
          id="start"
          type="datetime-local"
          name="start"
          value={start}
          onChange={handleChange}
        />

        <label htmlFor="end">End Time</label>
        <input
          id="end"
          type="datetime-local"
          name="end"
          value={end}
          onChange={handleChange}
        />

        <label htmlFor="allDay">All Day? (Check for true)</label>
        <input
          id="allDay"
          type="checkbox"
          name="allDay"
          value={allDay}
          onChange={handleCheck}
        />
        <button>Create Event</button>
      </form>
    </div>
  );
};

export default Form;
