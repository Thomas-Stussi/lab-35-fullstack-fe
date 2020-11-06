/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
/* eslint-disable keyword-spacing */
export const postEvent = async (eventObj) => {
  //update to environment variable for deployment
  const res = await fetch('http://localhost/7890/api/v1/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventObj)
  });

  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};

export const getEvents = async () => {
  const res = await fetch('http://localhost/7890/api/v1/events');
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};

export const getEventById = async (id) => {
  const res = await fetch(`http://localhost/7890/api/v1/events/${id}`);
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};

export const updateEvent = async (eventObj) => {
  const res = await fetch(`http://localhost/7890/api/v1/events/${eventObj.id}`, {
    method: 'PUT',
    body: { ...eventObj }
  });
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};

export const deleteEvent = async (id) => {
  const res = await fetch(`http://localhost/7890/api/v1/events/${id}`, {
    method: 'DELETE'
  });
  const json = await res.json();
  if (!res.ok) throw json;

  return json;
};
