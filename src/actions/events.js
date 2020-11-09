import {
  postEvent,
  getEvents,
  deleteEvent
} from '../services/eventsApi';

export const PREPEND_EVENT = 'PREPEND_EVENT';
export const prependEvent = event => ({
  type: PREPEND_EVENT,
  payload: event
});

export const SET_EVENTS = 'SET_EVENTS';
export const setEvents = events => ({
  type: SET_EVENTS,
  payload: events
});

export const DELETE_EVENT = 'DELETE_EVENT';

export const createEvent = event => dispatch => {
  postEvent(event)
    .then(createdEvent => {
      dispatch(prependEvent(createdEvent));
    });
};

export const fetchEvents = () => dispatch => {
  getEvents()
    .then(events => {
      dispatch(setEvents(events));
    });
};

export const removeEvent = id => dispatch => {
  deleteEvent(id)
    .then(event => {
      dispatch({
        type: DELETE_EVENT,
        payload: event.id
      });
    });
};
