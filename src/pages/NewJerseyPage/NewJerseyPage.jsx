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
            value={newJersey.name}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder=""
            required
          />
  
          <label htmlFor="select">League:</label>
          <select
            name="type"
            value={newJersey.name}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            required
          >
            <option value="NBA">NBA</option>
            <option value="NFL">NFL</option>
            <option value="MLB">MLB</option>
            <option value="NHL">NHL</option>
            <option value="MLS">MLS</option>
            <option value="INTERNATIONAL">INTERNATIONAL</option>
          </select>
  
          <label htmlFor="textarea">Year/Era:</label>
          <textarea
            name="unique"
            value={newJersey.name}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder="What year/era was this jersey used in?"
          />
  
          <label htmlFor="textarea">Description:</label>
          <textarea
            name="Description"
            value={newJersey.name}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder="Small description"
            required
          />
  
          <button type="submit">Add to collection</button>
        </form>
      </>
    );
  }