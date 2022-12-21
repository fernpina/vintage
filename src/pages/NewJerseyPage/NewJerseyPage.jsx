import { useState } from 'react';
import './NewJerseyPage.css';

export default function NewJerseyPage({ addJersey }) {
    const [newJersey, setNewJersey] = useState({
      team: "",
      league: "",
      year: "",
      description: "",
      rating: 3,
    });
    
    function handleAddJersey(evt) {
      evt.preventDefault();
      addJersey(newJersey);
      setNewJersey({
        team: "",
        league: "",
        year: "",
        description: "",
        rating: 3,
      });
    }
  
    return (
      <>
        <h1>Add a New Jersey</h1>
        <form onSubmit={handleAddJersey}>
          <label htmlFor="input">Team:</label>
          <input
            name="Team"
            type="text"
            value={newJersey.team}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder="Glazed, Chocolate, etc."
            required
          />
  
          <label htmlFor="select">League:</label>
          <select
            name="type"
            value={newJersey.type}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            required
          >
            <option value="Dough">Dough</option>
            <option value="Cake">Cake</option>
          </select>
  
          <label htmlFor="textarea">Year/Era:</label>
          <textarea
            name="unique"
            value={newJersey.year}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder="What year/era was this jersey used in?"
          />
  
          <label htmlFor="textarea">Description:</label>
          <textarea
            name="Description"
            value={newJersey.description}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder="Small description"
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
  
          <button type="submit">Add to Donut Case</button>
        </form>
      </>
    );
  }