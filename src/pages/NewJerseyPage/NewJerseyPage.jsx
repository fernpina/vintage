import { useState } from 'react';
import './NewJerseyPage.css';

export default function NewJerseyPage({ addJersey }) {
  const [newJersey, setNewJersey] = useState({
    team: "",
    league: "",
    review: "",
    rating: 3,
  });
  
  function handleAddJersey(evt) {
    evt.preventDefault();
    addJersey(newJersey);
    setNewJersey({
        team: "",
        league: "",
        review: "",
        rating: 3,
    });
  }

  return (
    <>
      <h1>Add a New Jersey</h1>
      <form onSubmit={handleAddJersey}>
        <label htmlFor="input">Team:</label>
        <input
          name="flavor"
          type="text"
          value={newJersey.team}
          onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
          placeholder="Lakers"
          required
        />

        <label htmlFor="select">Type:</label>
        <select
          name="type"
          value={newJersey.type}
          onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
          required
        >
          <option value="NBA">NBA</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>

        <label htmlFor="textarea">Review:</label>
        <textarea
          name="review"
          value={newJersey.review}
          onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
          placeholder="Review jersey"
          required
        />

        <label htmlFor="select">Rating:</label>
        <select
          name="rating"
          value={newJersey.rating}
          onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Add to Jersey</button>
      </form>
    </>
  );
}