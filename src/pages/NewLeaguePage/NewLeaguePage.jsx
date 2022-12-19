import { useState } from 'react';
import './NewLeaguePage.css';

export default function NewLeaguePage({ addLeague }) {
  const [newLeague, setNewLeague] = useState({
    name: "",
    sport: ""
  });

  function handleAddLeague(evt) {
    evt.preventDefault();
    addLeague(newLeague);
    setNewLeague({
      name: "",
      sport: ""
    });
  }

  return(
    <>
      <h1>Add a League</h1>
      <form onSubmit={handleAddLeague}>
        <label htmlFor="input">League Name:</label>
        <input
          name="name"
          type="text"
          value={newLeague.name}
          onChange={(evt) => setNewLeague({...newLeague, [evt.target.name]: evt.target.value })}
          placeholder="Name"
          required
        />

        <label htmlFor="input">Sport:</label>
        <input
          name="sport"
          type="text"
          value={newLeague.sport}
          onChange={(evt) => setNewLeague({...newLeague, [evt.target.name]: evt.target.value })}
          placeholder="League"
          required
        />

        <button type="submit">Add League</button>
      </form>
    </>
  );
}