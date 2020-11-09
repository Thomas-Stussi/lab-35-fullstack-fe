/* eslint-disable keyword-spacing */
import { DELETE_EVENT, PREPEND_EVENT, SET_EVENTS } from '../actions/events';

const initialState = {
  list: [],
  id: '',
  title: '',
  description: '',
  start: '',
  end: '',
  allDay: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PREPEND_EVENT:
      return { ...state, list: [action.payload, ...state.list] };
    case SET_EVENTS:
      return { ...state, list: action.payload };
    case DELETE_EVENT:
      return {
        ...state,
        list: state.list.filter(event => event.id !== action.payload)
      };
    default:
      return state;
  }
}
