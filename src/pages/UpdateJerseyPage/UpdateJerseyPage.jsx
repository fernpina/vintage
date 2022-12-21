import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as jerseysAPI from '../../utilities/jerseys-api';

export default function UpdateJerseyPage({ jerseys, setJerseys, }) {
  const navigate = useNavigate();
  const { jerseyId } = useParams();
  const changedJersey = jerseys.find((j) => j._id === jerseyId);
  const [jerseyFormData, setJerseyFormData] = useState(changedJersey);
  if (!changedJersey) return null;

  async function handleUpdateJersey(jerseyFormData, jerseyId) {
    await jerseysAPI.updateJersey(jerseyFormData, jerseyId);
    const updatedJerseys = await jerseysAPI.index();
    setJerseys(updatedJerseys);
    navigate(`/jerseys/${jerseyId}`);
  }

  function handleChange(evt) {
    const updateJersey = {...jerseyFormData, [evt.target.name]: evt.target.value};
    setJerseyFormData(updateJersey);
  }

  function handleSubmitEdits(evt) {
    evt.preventDefault();
    handleUpdateJersey(jerseyFormData, jerseyId);
  }

  return(
    <>
      <h1>Edit Jersey</h1>
      <form onSubmit={handleSubmitEdits}>
        <label htmlFor="input">Flavor:</label>
          <input
            name="flavor"
            type="text"
            value={jerseyFormData.team}
            onChange={handleChange}
            placeholder="Glazed, Chocolate, etc."
          />

          <label htmlFor="select">Type:</label>
          <select
            name="type"
            value={jerseyFormData.league}
            onChange={handleChange}
          >
            <option value="NBA">NBA</option>
            <option value="NFL">NFL</option>
          </select>

          {/* <label htmlFor="textarea">Year/Era:</label>
          <textarea
            name="unique"
            value={newJersey.year}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder="What year/era was this jersey used in?"
          />
  
          <label htmlFor="textarea">Description:</label>
          <textarea
            name="Description"
            value={setJersey.description}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            placeholder="Small description"
            required
          />
  
          <label htmlFor="select">Rating:</label>
          <select
            name="rating"
            value={setJersey.rating}
            onChange={(evt) => setNewJersey({ ...newJersey, [evt.target.name]: evt.target.value })}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select> */}
  
        <button type="submit">Submit Edits</button>
      </form>
    </>
  );
}