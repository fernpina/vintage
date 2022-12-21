import { useState } from 'react';
import './NewJerseyPage.css';

export default function NewJerseyPage({ addJersey }) {
    const [newJersey, setNewJersey] = useState({
      team: "",
      league: "NBA",
      year: "",
      description: "",
      rating: 3,
      image: ""
    });
    
    function handleAddJersey(evt) {
      evt.preventDefault();
      addJersey(newJersey);
      setNewJersey({
        team: "",
        league: "NBA",
        year: "",
        description: "",
        rating: 3,
        image: ""
      });
    }

    function handleChange(evt) {
        const jersey= {...newJersey, [evt.target.name]:evt.target.value}
        setNewJersey(jersey)
    }
  
    console.log(newJersey)
    return (
      <>
        <h1>Add a New Jersey</h1>
        <form onSubmit={handleAddJersey}>
          <label htmlFor="input">Image:</label>
          <input
            name="image"
            type="text"
            value={newJersey.name}
            onChange={handleChange}
            placeholder=""
            required
          />
          <label htmlFor="input">Team:</label>
          <input
            name="team"
            type="text"
            value={newJersey.name}
            onChange={handleChange}
            placeholder=""
            required
          />
  
          <label htmlFor="select">League:</label>
          <select
            name="league"
            value={newJersey.name}
            onChange={handleChange}
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
            name="year"
            value={newJersey.name}
            onChange={handleChange}
            placeholder="What year/era was this jersey used in?"
          />
  
          <label htmlFor="textarea">Description:</label>
          <textarea
            name="description"
            value={newJersey.name}
            onChange={handleChange}
            placeholder="Small description"
            required
          />
  
          <button type="submit">Add to collection</button>
        </form>
      </>
    );
  }